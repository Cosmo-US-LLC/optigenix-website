import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Check, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import image1 from "../../../assets/images/join_wait_list/join_wait_list_img1.webp";
import image2 from "../../../assets/images/join_wait_list/join_wait_list_img2.webp";
import image3 from "../../../assets/images/join_wait_list/join_wait_list_img3.webp";

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

const CheckBox = ({ isChecked, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center shrink-0 cursor-pointer transition-colors ${
        isChecked
          ? "bg-[#0d8360] border border-[#0d8360]"
          : "border border-[#010907]"
      } ${className}`}
      aria-label={isChecked ? "Uncheck" : "Check"}
    >
      {isChecked && (
        <Check
          className="text-white shrink-0 w-[13.333px] h-[13.333px] md:w-4 md:h-4"
          strokeWidth={3}
        />
      )}
    </button>
  );
};

const Waitlist = ({ defaultSelected = null }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Map prop/URL values to test IDs
  const getTestIdFromValue = (value) => {
    const normalizedValue = value?.toLowerCase().trim();
    if (normalizedValue === "blueprint") return "test1";
    if (normalizedValue === "elite") return "test2";
    if (normalizedValue === "blood test" || normalizedValue === "bloodtest")
      return "test3";
    return null;
  };

  // Get initial selection from prop or URL param
  const getInitialSelection = () => {
    // Check URL param first
    const urlParam = searchParams.get("test") || searchParams.get("type");
    if (urlParam) {
      const testId = getTestIdFromValue(urlParam);
      if (testId) return [testId];
    }

    // Check prop
    if (defaultSelected) {
      const testId = getTestIdFromValue(defaultSelected);
      if (testId) return [testId];
    }

    // Default to test1
    return ["test1"];
  };

  const [selectedTests, setSelectedTests] = useState(getInitialSelection);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const validateEmail = (value) => {
    // Basic email pattern: some text, "@", domain, ".", tld (2+ chars)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(value);
  };

  const tests = [
    {
      id: "test1",
      title: "OptiGenix Blueprint",
      description: "A bio-data performance roadmap.",
      image: image1,
      value: "blueprint", // For prop matching
    },
    {
      id: "test2",
      title: "OptiGenix Elite",
      description: "Precision program for athletes.",
      image: image2,
      value: "elite", // For prop matching
    },
    {
      id: "test3",
      title: "Performance Blood Test",
      description: "Get a blood test to understand your needs.",
      image: image3,
      value: "blood test", // For prop matching
    },
  ];

  // Update selection when prop or URL param changes
  useEffect(() => {
    const urlParam = searchParams.get("test") || searchParams.get("type");
    const valueToUse = urlParam || defaultSelected;

    if (valueToUse) {
      const testId = getTestIdFromValue(valueToUse);
      if (testId) {
        setSelectedTests([testId]);
      }
    }
  }, [searchParams, defaultSelected]);

  const handleTestToggle = (testId) => {
    setSelectedTests((prev) => {
      if (prev.includes(testId)) {
        // Allow unchecking any test
        return prev.filter((id) => id !== testId);
      } else {
        return [...prev, testId];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      // Clear error live when email becomes valid
      if (emailError && validateEmail(value)) {
        setEmailError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email before submit
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!isFormValid || loading) return;

    setLoading(true);

    const selectedTestTitles = tests
      .filter((test) => selectedTests.includes(test.id))
      .map((test) => test.title);

    const messageText = `
Hi ${formData.fullName},

Thanks for joining the OptiGenix waitlist! You selected:
${selectedTestTitles.map((title) => `- ${title}`).join("\n")}
We'll be in touch with next steps and early access details.

Best,
The OptiGenix Team
`;

    const messageHTML = `
  <p>Hi ${formData.fullName},</p>
  <p>
    Thanks for joining the OptiGenix waitlist! You selected:
    <ul>
      ${selectedTestTitles.map((title) => `<li>${title}</li>`).join("")}
    </ul>
    We'll be in touch with next steps and early access details.
  </p>
  <p>
    Best,<br>
    The OptiGenix Team
  </p>
`;

    try {
      const apiUrl = `${API_BASE}api/send-mail`;
      console.log("Sending waitlist submission to:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          subject: "Thanks for joining the OptiGenix waitlist",
          messageText,
          messageHTML,
        }),
      });

      console.log("Response status:", response.status);

      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", errorData);
        setEmailError(
          errorData.message ||
            `Failed to submit. Server error: ${response.status}. Please check if the backend server is running.`
        );
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Check if email was sent successfully
      if (data.status === "success") {
        // Show success dialog
        setShowSuccessDialog(true);

        // Reset form on success
        setSelectedTests(["test1"]);
        setFormData({ fullName: "", email: "" });
        setEmailError("");
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      console.error("API Base URL:", API_BASE);
      setEmailError(
        error.message ||
          "Failed to submit. Please check your connection and try again."
      );
    }

    setLoading(false);
  };

  const selectedCount = selectedTests.length;

  // Check if form is valid: at least one test selected and both inputs filled
  const isFormValid =
    selectedCount > 0 &&
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "";

  return (
    <>
      {/* Success Alert Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-[800px] w-[calc(100%-3rem)] md:w-full px-4 md:px-0 py-8 md:py-16 gap-6 md:gap-8  md:mx-0">
          <button
            onClick={() => setShowSuccessDialog(false)}
            className="absolute top-3 right-3 z-10 rounded-sm opacity-70 transition-opacity md:top-4 md:right-4 ring-offset-background hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-6 w-6 md:h-8 md:w-8 text-[#010907]" />
          </button>

          <AlertDialogHeader className="flex flex-col gap-4 items-center px-0 md:gap-6">
            <AlertDialogTitle className="capitalize font-funnel font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#010907] text-center">
              Welcome to Early Access
            </AlertDialogTitle>
            <AlertDialogDescription className="font-inter font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#010907] text-center max-w-full md:max-w-[622px] px-2 md:px-0">
              You've secured early access. Expect product updates, exclusive
              previews, and first-day access straight to your inbox.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex justify-center px-4 w-full md:px-0">
            <button
              onClick={() => {
                setShowSuccessDialog(false);
                navigate("/");
              }}
              className="bg-[#0d8360] hover:bg-[#0a6b4f] flex items-center justify-center px-6 py-[14px] rounded-[100px] transition-colors w-full md:w-auto"
            >
              <span className="font-funnel font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white whitespace-nowrap">
                Return to Homepage
              </span>
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <section className="flex relative justify-center items-center py-5 w-full h-full bg-white md:py-10">
        <div className="max-w-[1130px] mx-auto px-4 md:px-8 w-full h-full">
          <div className="flex flex-col gap-6 items-center w-full md:gap-12">
            {/* Header */}
            <div className="flex flex-col gap-4 md:gap-4 items-start text-center max-w-[600px] w-full">
              <h2 className="capitalize !text-[#0d8360] w-full">
                Join Our Waitlist
              </h2>
              <p className="description !text-[#010907] !text-[18px] w-full">
                Discover customized solutions based on your genetic makeup and
                up-to-date health data.
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-5 items-start w-full md:gap-12 lg:flex-row">
              {/* Test List - Left Side */}
              <div className="flex flex-col gap-2 items-start w-full md:max-w-[55%] md:gap-3 ">
                {tests.map((test) => {
                  const isSelected = selectedTests.includes(test.id);
                  return (
                    <div
                      key={test.id}
                      onClick={() => handleTestToggle(test.id)}
                      className={`border-solid content-stretch flex flex-col hover:bg-[#0d836008] items-start w-full transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#f8fffd] border-2 border-[#0d8360]"
                          : "bg-white border border-[#c7c7c7]"
                      } pl-3 pr-[14px] py-[14px] md:pl-4 md:pr-6 md:py-4 rounded-[12px] md:rounded-[14px]`}
                    >
                      <div className="flex gap-[14px] md:gap-4 items-center w-full">
                        {/* Image */}
                        <div className="h-[80px] md:h-[100px] relative rounded-[8px] shrink-0 w-[84px] md:w-[105px] overflow-hidden">
                          <img
                            alt={test.title}
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                            src={test.image}
                          />
                        </div>

                        {/* Title and Description */}
                        <div className="flex flex-[1_0_0] flex-col gap-1 md:gap-3 items-start leading-[24px] min-h-px min-w-px">
                          <p className="font-inter font-semibold text-[#010907] text-[16px] md:text-[22px] leading-[24px]">
                            {test.title}
                          </p>
                          <p className="font-inter font-normal text-[#414651] text-[12px] md:text-[16px] leading-[20px] md:leading-[24px]">
                            {test.description}
                          </p>
                        </div>

                        {/* Checkbox */}
                        <CheckBox
                          isChecked={isSelected}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTestToggle(test.id);
                          }}
                          className="shrink-0 p-[3.333px] md:p-[4px] w-5 h-5 md:w-6 md:h-6 rounded-[4px]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Form - Right Side */}
              <div className="bg-gray-50 flex flex-col gap-4 md:gap-5 items-start px-[14px] py-6 md:px-6 md:py-8 rounded-[8px] w-full md:max-w-[45%]">
                <h3 className="capitalize font-funnel font-semibold leading-[32px] md:leading-[48px] text-[#010907] text-[24px] md:text-[32px] text-center w-full">
                  Get Early Access
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-[14px] items-center w-full md:gap-6"
                >
                  {/* Input Fields - Horizontal on mobile, vertical on desktop */}
                  <div className="flex flex-row md:flex-col gap-[8px] md:gap-3 items-start w-full">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="bg-white border border-[#c7c7c7] border-solid flex flex-[1_0_0] items-center min-h-px min-w-px md:w-full px-[8px] md:px-4 py-[10px] md:py-[20px] rounded-[6px] shrink-0 font-inter font-normal text-[12px] md:text-[14px] text-black placeholder:text-[#00000080] placeholder:opacity-80 focus:outline-none focus:border-[#0d8360] transition-colors"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border font-Inter border-[#c7c7c7] border-solid flex flex-[1_0_0] items-center min-h-px min-w-px md:w-full px-[8px] md:px-4 py-[10px] md:py-[20px] rounded-[6px] shrink-0 font-inter font-normal text-[12px] md:text-[14px] text-black placeholder:text-[#00000080] placeholder:opacity-80 focus:outline-none focus:border-[#0d8360] transition-colors"
                      required
                    />
                    {emailError && (
                      <p className="text-red-500 text-[11px] md:text-[12px] mt-1">
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* CTA Button and Selected Count */}
                  <div className="flex flex-col gap-2 items-center w-full md:gap-3">
                    <button
                      type="submit"
                      disabled={!isFormValid || loading}
                      className={`transition-colors flex items-center justify-center px-5 py-[10px] rounded-[100px] w-full font-funnel font-semibold text-[16px] text-white ${
                        isFormValid && !loading
                          ? "bg-[#0d8360] hover:bg-[#0a6b4f] cursor-pointer"
                          : "bg-[#c7c7c7] cursor-not-allowed opacity-60"
                      }`}
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <span className="md:hidden">Reserve Your Spot</span>
                          <span className="hidden md:inline">
                            Reserve Your Spot
                          </span>
                        </>
                      )}
                    </button>
                    <p className="font-inter font-normal opacity-80 text-[#02110e] text-[12px] leading-[24px]">
                      {selectedCount === 0 && "Please select at least one test"}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Waitlist;
