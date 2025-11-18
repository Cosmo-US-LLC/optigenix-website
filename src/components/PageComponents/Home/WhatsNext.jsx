import React from "react";
import optiGenixBlueprint from "../../../assets/images/human_performance/human_performance_c1.webp";
import optiGenixElite from "../../../assets/images/human_performance/human_performance_c2.webp";

// Reusable Card Component
const FeatureCard = ({ image, tagText, title, description, buttonLabel }) => {
  return (
    <div className="relative flex-1 h-[500px] md:h-[560px] rounded-[16px] overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-[#1c3a13] rounded-[16px]" /> */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
        />
        {/* <div className="absolute inset-0 bg-black/30 rounded-[16px]" /> */}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-[21px] px-6 md:px-8 lg:px-12">
        {/* Coming Soon Badge */}
        <div className="bg-black/40 border border-[#fcfcf7] px-4 md:px-5 lg:px-[16px] py-2 md:py-2.5 lg:py-[8px] rounded-full">
          <p className="font-funnel text-[14px] md:text-[15px] lg:text-[15.6px] text-white text-center">
            {tagText}
          </p>
        </div>

        {/* Title */}
        <h3 className="font-funnel text-[28px] md:text-[34px] lg:text-[39.2px] leading-[1.1] lg:leading-[44px] text-[#fcfcf7] text-center tracking-[-0.4px]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-inter text-[14px] md:text-[15px] lg:text-[15.4px] leading-[1.4] lg:leading-[20.8px] text-[#fcfcf7] text-center tracking-[-0.16px] max-w-[300px] md:max-w-[350px]">
          {description}
        </p>

        {/* Button */}
        <button className="bg-[#fcfcf7] hover:bg-white transition-colors text-[#1c3a13] font-funnel text-[14px] md:text-[15px] lg:text-[15.6px] px-6 md:px-7 lg:px-8 py-3 md:py-3.5 lg:py-4 rounded-full tracking-[-0.04px] mt-2 md:mt-3 lg:mt-4">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

const WhatsNext = () => {
  const features = [
    {
      image: optiGenixBlueprint,
      tagText: "Coming Soon",
      title: "OptiGenix Blueprint",
      description: '"A complete bio-data performance roadmap."',
      buttonLabel: "Join the Waitlist",
    },
    {
      image: optiGenixElite,
      tagText: "Coming Soon",
      title: "OptiGenix Elite",
      description: '"A private precision program for athletes."',
      buttonLabel: "Join the Waitlist",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-16 md:px-8">
        <div className="flex flex-col gap-8 items-center md:gap-10">
          {/* Title */}
          <h2 className="font-funnel font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[56px] text-[#042b24] text-center tracking-[-0.72px]">
            What's Next for Human Performance?
          </h2>

          {/* Feature Cards Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-[24px]">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                tagText={feature.tagText}
                title={feature.title}
                description={feature.description}
                buttonLabel={feature.buttonLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;
