import { useState } from "react";

// Base URL for the backend API, configured via Vite env vars
const API_BASE = import.meta.env.VITE_BASE_URL;

const NewsLetterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email } = formData;

    // Build email body (no personalization)
    const message = `
        Hi,

        Thanks for subscribing! You’ll now receive expert tips, updates on personalized supplements, 
        and special offers to help you perform at your best.

        Best,
        The OptiGenix Team
                `;

    const messageHTML = `
  <p>Hi,</p>

  <p>
    Thanks for subscribing! You’ll now receive expert tips, updates on personalized supplements, 
    and special offers to help you perform at your best.
  </p>

  <p>
    Best,<br>
    The OptiGenix Team
  </p>
`;

    try {
      if (!API_BASE) {
        throw new Error("Missing API_BASE configuration (VITE_BASE_URL)");
      }

      await fetch(`${API_BASE}/api/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Welcome to OptiGenix!",
          messageText: message,
          messageHTML,
        }),
      });

      // alert("Subscribed successfully! Check your inbox.");
      setFormData({ email: "" });
    } catch (error) {
      console.error("Newsletter error:", error);
      // alert("Failed to subscribe. Try again later.");
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
          onChange={(e) => setFormData({ email: e.target.value })}
          className="font-inter w-full bg-[rgba(248,255,253,0.1)] backdrop-blur-xl border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[4px] px-3 py-2 text-[12px] md:text-[14px] leading-[22px] text-white placeholder:text-white/80 focus:outline-none focus:border-white/30 transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`cursor-pointer font-['Funnel_Display'] w-full ${
          loading
            ? "bg-[#0c704d]/60 cursor-not-allowed"
            : "bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40]"
        } transition-all duration-200 text-white text-[14px] md:text-[16px] leading-[24px] px-[19px] py-[10px] rounded-full font-semibold`}
      >
        {loading ? "Subscribing..." : "Subscribe Now"}
      </button>
    </form>
  );
};

export default NewsLetterForm;
