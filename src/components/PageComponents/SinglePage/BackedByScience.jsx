import React from "react";
import backedByScienceImage from "@/assets/images/single_test/backed_image/backed_by_img2.webp";

const checklist = [
  "Your DNA is secure, encrypted, anonymized, and never shared or sold",
  "HIPAA-compliant, ensuring top-tier privacy and security",
  "Full control of your information, download or remove your data at any time",
  "CLIA-certified & CAP-accredited lab testing, processed in a U.S laboratory meeting the highest standards",
  "Actionable health insights, personalized guidance for nutrition supplement exercise, and lifestyle optimization",
];

const BackedByScience = () => {
  return (
    <section className="py-12 bg-white md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-[88px]">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col gap-5 max-w-[510px]">
          <h2 className="text-[#252525] capitalize">
            Backed By Science & Trust
          </h2>
          <div className="flex flex-col gap-4">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <span className="bg-[#0d8360] rounded-md w-6 h-6 flex items-center justify-center shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 8.25L2.25 6L1.5 6.75L4.5 9.75L10.5 3.75L9.75 3L4.5 8.25Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="font-['Inter'] text-[16px] leading-[24px] text-[#252525]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image with overlays */}
        <div className="flex-1 w-full max-w-[616px]">
          <div className="relative h-[320px] md:h-[447px] rounded-[16px] overflow-hidden shadow-md">
            <img
              src={backedByScienceImage}
              alt="Backed by science visual"
              className="object-cover w-full h-full"
              loading="lazy"
            />

            {/* <div className="absolute left-4 bottom-6 bg-[rgba(12,12,12,0.72)] text-white rounded-[12px] px-4 py-3 flex flex-col gap-1 min-w-[180px]">
              <span className="font-['Funnel_Display'] text-[18px] leading-[22px]">
                Testosterone
              </span>
              <div className="flex items-center gap-2 text-[14px] leading-[20px] text-[#8ef7c7]">
                <span className="w-2 h-2 rounded-full bg-[#8ef7c7] inline-block" />
                Sufficient
              </div>
            </div>

            <div className="absolute right-4 bottom-4 bg-[rgba(12,12,12,0.72)] text-white rounded-[12px] px-4 py-3 flex flex-col gap-1 min-w-[170px]">
              <span className="font-['Funnel_Display'] text-[18px] leading-[22px]">
                Cholesterol
              </span>
              <div className="flex items-center gap-2 text-[14px] leading-[20px] text-[#f7c96f]">
                <span className="w-2 h-2 rounded-full bg-[#f7c96f] inline-block" />
                Out of Range
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedByScience;
