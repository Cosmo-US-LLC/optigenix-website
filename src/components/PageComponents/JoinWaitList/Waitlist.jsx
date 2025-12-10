import React, { useState } from "react";
import { Check } from "lucide-react";
import image1 from "../../../assets/images/join_wait_list/join_wait_list_img1.webp";
import image2 from "../../../assets/images/join_wait_list/join_wait_list_img2.webp";
import image3 from "../../../assets/images/join_wait_list/join_wait_list_img3.webp";

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

const Waitlist = () => {
  const [selectedTests, setSelectedTests] = useState(["test1"]); // Start with test1 selected
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const tests = [
    {
      id: "test1",
      title: "OptiGenix Blueprint",
      description: "A bio-data performance roadmap.",
      image: image1,
    },
    {
      id: "test2",
      title: "OptiGenix Elite",
      description: "Precision program for athletes.",
      image: image2,
    },
    {
      id: "test3",
      title: "Performance Blood Test",
      description: "Get a blood test to understand your needs.",
      image: image3,
    },
  ];

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", {
      selectedTests,
      formData,
    });
    // You can add API call or navigation here
  };

  const selectedCount = selectedTests.length;

  // Check if form is valid: at least one test selected and both inputs filled
  const isFormValid =
    selectedCount > 0 &&
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "";

  return (
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
                </div>

                {/* CTA Button and Selected Count */}
                <div className="flex flex-col gap-2 items-center w-full md:gap-3">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`transition-colors flex items-center justify-center px-5 py-[10px] rounded-[100px] w-full font-funnel font-semibold text-[16px] text-white ${
                      isFormValid
                        ? "bg-[#0d8360] hover:bg-[#0a6b4f] cursor-pointer"
                        : "bg-[#c7c7c7] cursor-not-allowed opacity-60"
                    }`}
                  >
                    <span className="md:hidden">Reserve Your Spot</span>
                    <span className="hidden md:inline">Reserve Your Sport</span>
                  </button>
                  <p className="font-inter font-normal opacity-80 text-[#02110e] text-[12px] leading-[24px]">
                    {selectedCount === 0
                      ? "Please select at least one test"
                      : `You selected ${selectedCount} ${
                          selectedCount === 1 ? "test" : "tests"
                        }`}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
