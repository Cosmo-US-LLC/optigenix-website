import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";
import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Normalize backend base URL (same logic as other components)
const getApiBase = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  if (backendUrl) {
    return backendUrl.endsWith("/") ? backendUrl : `${backendUrl}/`;
  }

  if (baseUrl) {
    return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  }

  // Default to production backend
  return "https://optigenix-website-backend.vercel.app/";
};

const QuizSecond = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const iframeRef = React.useRef(null);

  // Ensure step parameter is in URL on initial load
  useEffect(() => {
    const step = searchParams.get("step");
    if (!step) {
      // If no step parameter, redirect to age step
      navigate("/quiz?step=age", { replace: true });
    }
  }, [searchParams, navigate]);

  // Get the current step from URL - update when step changes
  const currentStep = searchParams.get("step") || "age";
  const iframeInitializedRef = React.useRef(false);
  const lastStepRef = React.useRef(null);

  // Initialize iframe and send initial step
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      if (iframeInitializedRef.current) return;
      iframeInitializedRef.current = true;

      // Get current step at load time
      const initialStep = searchParams.get("step") || "age";

      // Send initial step after iframe loads
      setTimeout(() => {
        try {
          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage(
              {
                type: "change_step",
                step: initialStep,
              },
              window.location.origin
            );
            lastStepRef.current = initialStep;
          }
        } catch {
          // Iframe not ready, ignore
        }
      }, 100);
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [searchParams]);

  // Send step change message to iframe (no reload) - only when step actually changes
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !iframeInitializedRef.current) return;

    // Don't send if step hasn't changed
    if (lastStepRef.current === currentStep) return;
    lastStepRef.current = currentStep;

    // Send message immediately
    try {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          {
            type: "change_step",
            step: currentStep,
          },
          window.location.origin
        );
      }
    } catch {
      // Iframe not ready, ignore
    }
  }, [currentStep]);

  // Inject API base URL into iframe when it loads
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const apiBase = getApiBase();
        // Inject API base URL into iframe's window object
        iframe.contentWindow.API_BASE_URL = apiBase;
        console.log("Injected API_BASE_URL into quiz iframe:", apiBase);
      } catch (error) {
        console.error("Error injecting API URL into iframe:", error);
      }
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  // Listen for messages from iframe (when quiz step changes)
  useEffect(() => {
    const handleMessage = (event) => {
      // Accept messages from same origin (works on Netlify, Vercel, and localhost)
      const currentOrigin = window.location.origin;
      if (event.origin !== currentOrigin) {
        // Log for debugging on Netlify
        console.warn(
          "Message origin mismatch:",
          event.origin,
          "vs",
          currentOrigin
        );
        return;
      }

      // Handle step change from iframe
      if (event.data.type === "quiz_step_change") {
        const newStep = event.data.step;
        // Use navigate with replace: false to update URL properly on Netlify
        navigate(`/quiz?step=${newStep}`, { replace: false });
      }

      // Handle quiz complete
      if (event.data.type === "quiz_complete") {
        navigate(`/quiz?step=results`, { replace: false });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <>
      <MetaTags
        title="Complete the Personalized Supplement Quiz for Custom Health Plans"
        description="Take the personalized supplement quiz to get customized health recommendations and supplement suggestions based on your age and lifestyle."
      />
      <iframe
        ref={iframeRef}
        src="/quiz/index.html"
        style={{ width: "100%", border: "none" }}
        className="md:min-h-[calc(100vh)] min-h-[calc(100vh)]"
        title="OptiGenix Quiz"
      />
    </>
  );
};

export default QuizSecond;
