import React from "react";
import { FlaskConical, Award, Microscope } from "lucide-react";
import whatMakesDifferentImage from "../../../assets/images/all_category/whats_make/whats_make_img.webp";

// Temporary image URL from Figma - replace with your actual image

const features = [
  {
    icon: FlaskConical,
    title: "Science-Backed & Personalized",
    description: "Recommendations based on your DNA and validated research.",
  },
  {
    icon: Award,
    title: "Advanced Nutrition Solutions",
    description:
      "Guidance designed for athletes and health-conscious individuals who demand data-driven insights.",
  },
  {
    icon: Microscope,
    title: "Clarity & Confidence",
    description:
      "Kkip supplements your body doesn't need — no guesswork, no generic plans.",
  },
];

const WhatMakesDifferent = () => {
  return (
    <section className="bg-white border-t border-b border-[rgba(1,9,7,0.1)] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-[48px] items-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-[32px]">
            {/* Header */}
            <div className="flex flex-col gap-[16px]">
              <h2 className="capitalize font-['Funnel_Display'] font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#010907]">
                What Makes OptiGenix Different
              </h2>
              <div className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907] space-y-[14px]">
                <p>
                  The first personalized supplement company for athletes, we
                  combine advanced genetic testing, real-time insights, and
                  targeted nutrition solutions to remove the guesswork from your
                  health.
                </p>
                <p>
                  We go beyond general advice, we find the hidden missing piece
                  in your nutrition, recovery, and performance, giving you
                  precision-driven solutions that are built for your body, your
                  goals, and your life.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-[16px]">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-[16px] items-start">
                  {/* Icon */}
                  <div className="shrink-0 w-[32px] h-[32px] text-[#0d8360]">
                    <feature.icon className="w-full h-full" strokeWidth={1.5} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col gap-[8px]">
                    <h3 className="font-['Inter'] font-medium text-[16px] leading-[24px] text-[#010907]">
                      {feature.title}
                    </h3>
                    <p className="font-['Inter'] font-light text-[16px] leading-[24px] text-[#010907]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-[24px] overflow-hidden">
              <img
                src={whatMakesDifferentImage}
                alt="Supplement bottle being dispensed into hand"
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
