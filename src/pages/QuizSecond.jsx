import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";
import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const QuizSecond = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get the current step from URL
  const step = searchParams.get("step") || "age";

  // Build iframe URL with query parameters
  const iframeUrl = `/quiz/index.html?step=${step}`;

  // Listen for messages from iframe (when quiz step changes)
  useEffect(() => {
    const handleMessage = (event) => {
      // Only accept messages from same origin
      if (event.origin !== window.location.origin) return;

      // Handle step change from iframe
      if (event.data.type === "quiz_step_change") {
        const newStep = event.data.step;
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
        key={step}
        src={iframeUrl}
        style={{ width: "100%", border: "none" }}
        className="md:min-h-[calc(100vh)] min-h-[calc(100vh)]"
        title="OptiGenix Quiz"
      />
    </>
  );
};

export default QuizSecond;
