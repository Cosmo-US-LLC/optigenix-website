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
    <section className="bg-[#f7f7f7] py-8 md:py-12 lg:py-[42px] px-4 md:px-8 lg:px-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[32px] items-center">
          {/* Left Side: Image with Overlay Content */}
          <div className="relative flex-1 w-full">
            <div className="relative h-[500px] md:h-[670px] w-full lg:w-[604px] rounded-[24px] overflow-hidden">
              {/* Background Image with Dark Overlay */}
              <img
                src={caseStudyBg}
                alt="Athletes using OptiGenix"
                className="object-cover absolute inset-0 w-full h-full"
              />
              {/* <div className="absolute inset-0 bg-black/70 rounded-[24px]" /> */}

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 lg:p-[35px]">
                {/* Title and Description */}
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] text-white text-center max-w-[574px] mx-auto mt-16 md:mt-30">
                  <h3 className="font-funnel font-medium text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] lg:leading-[45px]">
                    How Athletes Use OptiGenix and Transformed Their Game
                  </h3>
                  <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-normal lg:leading-[24px]">
                    30 collegiate endurance athletes participated in a 30-day
                    pilot study on personalized supplementation
                  </p>
                </div>

                {/* Stats Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-[16px] max-w-[574px] mx-auto w-full">
                  {mainStats.map((stat, index) => (
                    <div
                      key={index}
                      className={`backdrop-blur-[7px] border border-white rounded-[16px] px-4 py-6 md:px-5 md:py-7 lg:px-[20px] lg:py-[32px] h-[100px] md:h-[109px] flex items-center justify-center ${
                        stat.highlighted
                          ? "bg-[rgba(82,201,180,0.43)]"
                          : "bg-white/15"
                      }`}
                    >
                      <div className="flex flex-col gap-4 items-center w-full text-center text-white">
                        <p className="font-inter font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-[29px]">
                          {stat.value}
                        </p>
                        <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-[29px]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Results Content */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-[24px] w-full">
            {/* Header Section */}
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-[24px]">
              {/* Badge */}
              <div className="bg-[#2b7a6c] h-[40px] md:h-[45px] rounded-full flex items-center px-4 md:px-5 lg:px-[20px] w-fit">
                <p className="font-funnel font-medium text-[18px] md:text-[20px] lg:text-[21px] leading-[45px] text-white">
                  OptiGenix × UC Berkeley Triathlon Team
                </p>
              </div>

              {/* Title and Description */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-[12px]">
                <h2 className="font-funnel font-medium text-[32px] md:text-[38px] lg:text-[42px] leading-[45px] text-[#010907]">
                  Results
                </h2>
                <p className="font-funnel font-medium text-[18px] md:text-[20px] lg:text-[21px] leading-[21px] text-[#010907]">
                  Performance & Recovery
                </p>
                <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-normal lg:leading-[24px] text-[#010907]">
                  A 30-day pilot with collegiate endurance athletes showed that
                  biomarker-based, personalized supplements improved
                  performance, recovery, and nutrient status versus standard
                  supplements.
                </p>
              </div>
            </div>

            {/* Result Cards - 3 columns */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-[12px]">
              {resultCards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-white ${card.borderColor} border-l-[3px] rounded-[12px] p-3 md:p-4 lg:p-[20px] flex-1 min-h-[140px] md:min-h-[164px] flex flex-col gap-2 lg:gap-[8px]`}
                >
                  <h4 className="font-funnel font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[20px] text-[#010907]">
                    {card.title}
                  </h4>
                  <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-normal lg:leading-[24px] text-[rgba(1,9,7,0.7)]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="bg-[rgba(16,185,129,0.1)] border-emerald-500 border-l-[3px] rounded p-3 lg:p-[12px]">
              <p className="font-funnel text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] text-[#010907]">
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
            <p className="font-funnel font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[1.4] lg:leading-[24px] text-[#010907]">
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
