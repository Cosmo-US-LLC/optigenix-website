import React from "react";
import caseStudyBg from "../../../assets/images/case_study/case_study_bg.webp";

const CaseStudy = () => {
  const mainStats = [
    { value: "42%", label: "Avg. Performance Gain", highlighted: true },
    { value: "30", label: "Athletes", highlighted: false },
    { value: "30", label: "Days", highlighted: false },
    { value: "100%", label: "Completion Rate", highlighted: false },
  ];

  const resultCards = [
    {
      title: "Performance",
      description:
        "FTP, VO₂ Max, Max Power, VT1 & VT2 improved significantly across athletes.",
      borderColor: "border-blue-500",
    },
    {
      title: "Nutrient Status",
      description:
        "Vitamin D & B12 increased; ferritin normalized in deficient athletes.",
      borderColor: "border-emerald-500",
    },
    {
      title: "Inflammation",
      description:
        "TNF-α significantly reduced; systemic inflammation stabilized.",
      borderColor: "border-amber-500",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-12 md:py-12 lg:py-[42px] px-4 md:px-8 lg:px-[60px]">
      <div className="max-w-[1280px] mx-auto md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[32px] items-center">
          {/* Left Side: Image with Overlay Content */}
          <div className="relative flex-1 w-full">
            <div className="relative h-[646px] md:h-[670px] w-full lg:w-[604px] rounded-[24px] overflow-hidden">
              {/* Background Image with Dark Overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-[24px]">
                <img
                  src={caseStudyBg}
                  alt="Athletes using OptiGenix"
                  className="absolute w-full h-full object-cover rounded-[24px]"
                />
                {/* <div className="absolute inset-0 bg-black/70 rounded-[24px]" /> */}
              </div>

              {/* Content Overlay */}
              <div className="flex absolute inset-0 flex-col justify-between p-4 md:p-6">
                {/* Title and Description */}
                <div className="flex flex-col gap-[14px] lg:gap-[24px] text-center text-white max-w-[674px] md:mt-36 mt-26 ">
                  <h2 className="!text-[#ffffff] md:!text-[40px] !text-[30px] ">
                    How Athletes Use OptiGenix and Transformed Their Game
                  </h2>
                  <p className="description !text-white">
                    30 collegiate endurance athletes participated in a 30-day
                    pilot study on personalized supplementation
                  </p>
                </div>

                {/* Stats Grid - 2x2 */}
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {/* First row */}
                    {mainStats.slice(0, 2).map((stat, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center px-2 py-5 border bg-white/15 hover:bg-[rgba(82,201,180,0.43)] border-transparent backdrop-blur-[7px] hover:border-white rounded-[16px] lg:px-[20px] lg:py-[26px]`}
                      >
                        <div className="flex flex-col gap-4 items-center w-full text-center text-white">
                          <p className="font-['Inter'] font-bold text-[24px] lg:text-[40px] leading-[22px]">
                            {stat.value}
                          </p>
                          <p className="font-['Inter'] font-normal text-[14px] lg:text-[16px] leading-[22px]">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {/* Second row */}
                    {mainStats.slice(2, 4).map((stat, index) => (
                      <div
                        key={index + 2}
                        className={`backdrop-blur-[7px] bg-white/15 hover:bg-[rgba(82,201,180,0.43)] border border-transparent hover:border-white rounded-[16px] px-2 py-6 lg:px-[20px] lg:py-[26px] flex items-center justify-center 
                         `}
                      >
                        <div className="flex flex-col gap-4 items-center w-full text-center text-white">
                          <p className="font-['Inter'] font-bold text-[24px] lg:text-[40px] leading-[22px]">
                            {stat.value}
                          </p>
                          <p className="font-['Inter'] font-normal text-[14px] lg:text-[16px] leading-[22px]">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Results Content */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-[24px] w-full">
            {/* Header Section */}
            <div className="flex flex-col gap-6 lg:gap-[24px]">
              {/* Badge */}
              <div className="bg-[#2b7a6c] rounded-full flex items-center px-4 py-2 lg:px-[20px] w-full lg:w-full">
                <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[21px] leading-[24px] text-white">
                  OptiGenix × UC Berkeley Triathlon Team
                </p>
              </div>

              {/* Title and Description */}
              <div className="flex flex-col gap-3 lg:gap-[12px]">
                <h2 className="font-['Funnel_Display'] font-medium text-[32px] lg:text-[48px] leading-[48px] lg:leading-[45px] text-[#010907]">
                  Results
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[21px] leading-[24px] text-[#010907]">
                    Performance & Recovery
                  </p>
                  <p className="font-['Inter'] font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907]">
                    A 30-day pilot with collegiate endurance athletes showed
                    that biomarker-based, personalized supplements improved
                    performance, recovery, and nutrient status versus standard
                    supplements.
                  </p>
                </div>
              </div>
            </div>

            {/* Result Cards - Horizontal scroll on mobile, 3 columns on desktop */}
            <div className="block md:flex gap-3 lg:gap-[12px] overflow-x-auto lg:overflow-x-visible scrollbar-hide">
              {resultCards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-white ${card.borderColor} border-l-[3px] rounded-[12px] p-3 lg:p-[20px] shrink-0 w-[100%] max-md:mb-4 md:w-[210px] lg:flex-1 md:h-[164px] h-[110px] flex flex-col gap-2`}
                >
                  <h4 className="font-['Funnel_Display'] font-medium text-[18px] leading-[20px] text-[#010907]">
                    {card.title}
                  </h4>
                  <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[rgba(1,9,7,0.7)]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="bg-[rgba(16,185,129,0.1)] border-emerald-500 border-l-[3px] rounded p-3 lg:p-[12px]">
              <p className="font-['Funnel_Display'] text-[16px] leading-[20px] text-[#010907]">
                <span className="font-semibold">
                  Top responder: Athlete OG0027 →
                </span>{" "}
                <span className="font-normal">
                  +15% FTP, +7 VO₂ Max points, ferritin doubled.
                </span>
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1.5px] bg-[#d9d9d9]" />

            {/* Conclusion */}
            <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[18px] leading-[24px] text-[#010907]">
              These findings demonstrate that personalized, biology-driven
              supplementation is practical, scalable, and more effective than
              standard protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
