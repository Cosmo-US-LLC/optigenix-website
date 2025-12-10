import React from "react";
import { useNavigate } from "react-router-dom";
import optiGenixBlueprint from "../../../assets/images/human_performance/human_performance_c1.webp";
import optiGenixElite from "../../../assets/images/human_performance/human_performance_c2.webp";

// Reusable Card Component
const FeatureCard = ({
  image,
  tagText,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="relative flex-1 h-[400px] md:h-[560px] rounded-[16px] overflow-hidden group">
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
      <div className="absolute bottom-10 left-0 right-0 mx-auto flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-[21px] px-6 md:px-8 lg:px-12">
        {/* Coming Soon Badge */}
        <div className="bg-black/40 border border-[#fcfcf7] px-4 md:px-5 lg:px-[16px] py-2 md:py-2.5 lg:py-[8px] rounded-full">
          <p className="font-funnel text-[14px] md:text-[15px] lg:text-[15.6px] text-white text-center">
            {tagText}
          </p>
        </div>

        {/* Title */}
        <h3 className="btn-primary !text-[#fcfcf7] !text-[28px] md:!text-[34px] !font-[400] lg:!text-[39.2px] leading-[1.1] lg:leading-[44px] text-[#fcfcf7] text-center tracking-[-0.4px]">
          {title}
        </h3>

        {/* Description */}
        <p className=" description !text-[#fcfcf7] text-center tracking-[-0.16px] max-w-[300px] md:max-w-[350px]">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="bg-[#fcfcf7] btn_secondary mt-2 md:mt-3 lg:mt-4"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

const WhatsNext = () => {
  const navigate = useNavigate();

  const handleJoinWaitlist = () => {
    navigate("/join-wait-list");
  };

  const features = [
    {
      image: optiGenixBlueprint,
      tagText: "Coming Soon",
      title: "OptiGenix Blueprint",
      description: "A complete bio-data performance roadmap.",
      buttonLabel: "Join the Waitlist",
    },
    {
      image: optiGenixElite,
      tagText: "Coming Soon",
      title: "OptiGenix Elite",
      description: "A private precision program for athletes.",
      buttonLabel: "Join the Waitlist",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-16 md:px-8">
        <div className="flex flex-col gap-8 items-center md:gap-10">
          {/* Title */}
          <h2 className="text-[#042b24] text-center ">
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
                onButtonClick={handleJoinWaitlist}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;
