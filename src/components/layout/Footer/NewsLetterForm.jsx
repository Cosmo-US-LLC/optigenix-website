import { useState } from "react";
import { Check, X } from "lucide-react";
import InfoIcon from "../../../assets/images/footer/infoIcon.svg";

// Normalize backend base URL
// Priority: VITE_BACKEND_URL > VITE_BASE_URL > current origin
const API_BASE = (() => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Use backend URL if available (for separate backend server)
  if (backendUrl) {
    return backendUrl.endsWith("/") ? backendUrl : `${backendUrl}/`;
  }

  // Fall back to base URL or current origin
  if (baseUrl) {
    return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  }

  // Default to production backend
  return "https://optigenix-website-backend.vercel.app/";
})();

const NewsLetterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (value) => {
    // Basic email pattern: some text, "@", domain, ".", tld (2+ chars)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Client-side email validation
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      setSuccess(false);
      return;
    }

    setEmailError("");
    setSuccess(false);
    setLoading(true);

    const { email } = formData;

    // Build email body (no personalization)
    const message = `
        Hi,

        Thanks for subscribing! You'll now receive expert tips, updates on personalized supplements, 
        and special offers to help you perform at your best.

        Best,
        The OptiGenix Team
                `;

    const messageHTML = `
  <p>Hi,</p>

  <p>
    Thanks for subscribing! You'll now receive expert tips, updates on personalized supplements, 
    and special offers to help you perform at your best.
  </p>

  <p>
    Best,<br>
    The OptiGenix Team
  </p>
`;

    try {
      const apiUrl = `${API_BASE}api/send-mail`;
      console.log("Sending newsletter subscription to:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Welcome to OptiGenix!",
          messageText: message,
          messageHTML,
        }),
      });

      console.log("Response status:", response.status);

      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", errorData);
        throw new Error(
          errorData.message ||
            `Server error: ${response.status}. Please check if the backend server is running.`
        );
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Check if email was sent successfully
      if (data.status === "success") {
        // Show success message
        setSuccess(true);
        setFormData({ email: "" });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      console.error("API Base URL:", API_BASE);
      setEmailError(
        error.message ||
          "Failed to subscribe. Please check your connection and try again."
      );
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 md:p-5 lg:p-[24px] space-y-4 md:space-y-5 lg:space-y-[20px] rounded-[16px] backdrop-blur-xl bg-[rgba(248,255,253,0.2)]"
    >
      {/* Email Field */}
      <div className="space-y-2 lg:space-y-[8px]">
        <label className="font-inter text-[12px] md:text-[14px] leading-[24px] text-white block">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({ email: value });
            // Clear error when user starts typing valid email
            if (emailError && validateEmail(value)) {
              setEmailError("");
            }
            // Clear success message when user starts typing
            if (success) {
              setSuccess(false);
            }
          }}
          className="newsletter-input font-inter w-full bg-[rgba(248,255,253,0.1)] backdrop-blur-xl border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[4px] px-3 py-2 text-[12px] md:text-[14px] leading-[22px] text-white placeholder:text-white/80 focus:outline-none focus:border-white/30 transition-colors"
        />
        {/* Success Message - Figma Design */}
        {success && (
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#0d8360] flex items-center justify-center rounded-full shrink-0 w-5 h-5">
              <Check
                className="w-[13px] h-[13px] text-white"
                strokeWidth={2.5}
              />
            </div>
            <p className="font-inter font-normal text-[12px] leading-[20px] text-[#fff] whitespace-nowrap">
              Thanks for subscribing
            </p>
          </div>
        )}

        {/* Error Message - Figma Design */}
        {emailError && (
          <div className="flex gap-[8px] items-center">
            {/* <div className="bg-[#b80f0f] flex items-center justify-center rounded-full shrink-0 w-5 h-5"> */}
            <img src={InfoIcon} alt="Info" className="" />
            {/* </div> */}
            <p className="font-inter font-normal text-[12px] leading-[20px] text-white whitespace-nowrap">
              {emailError}
            </p>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || success}
        className={`cursor-pointer font-['Funnel_Display'] w-full ${
          loading || success
            ? "bg-[#0c704d]/60 cursor-not-allowed"
            : "bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40]"
        } transition-all duration-200 text-white text-[14px] md:text-[16px] leading-[24px] px-[19px] py-[10px] rounded-full font-semibold`}
      >
        {loading ? "Subscribing..." : success ? "Subscribed!" : "Subscribe Now"}
      </button>
    </form>
  );
};

export default NewsLetterForm;
