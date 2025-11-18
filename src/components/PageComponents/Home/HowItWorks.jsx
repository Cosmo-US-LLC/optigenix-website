import React from "react";
import { TestTube, Search, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: TestTube,
    title: "Test with Confidence",
    description:
      "Order your at-home DNA or blood test kit. Simple, safe, and science-backed, everything you need is sent straight to you.",
    bgColor: "#2b7a6c",
  },
  {
    number: "02",
    icon: Search,
    title: "Decode Your Data",
    description:
      "Once your results are in, our in-house expert dietitians review your data to uncover your body's unique needs and imbalances",
    bgColor: "#185348",
  },
  {
    number: "03",
    icon: Package,
    title: "Personalize Your Plan",
    description:
      "Based on your insights, order Personalized Packs tailored to your goals.",
    bgColor: "#042b24",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-[80px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[48px] items-start">
          {/* Left: Title and Description */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-[32px] relative">
            {/* <div className="flex absolute top-0 left-0 flex-col gap-6">
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px]">
                <h2 className="font-funnel font-medium text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[56px] text-[#010907]">
                  How It Works
                </h2>
                <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[24px] text-[#010907]">
                  Your body already knows what it needs, we help you understand
                  it.
                </p>
              </div>
              <button className="bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40] transition-all duration-200 text-white font-funnel font-semibold text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] px-6 py-3 md:py-3.5 rounded-full w-fit">
                Decode My DNA
              </button>
            </div> */}
          </div>

          {/* Right: Steps - Stacked Cards with Sticky Scroll */}
          <div className="w-full lg:w-[640px] flex flex-col space-y-4 md:space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: step.bgColor,
                  top: `${120 + index * 80}px`,
                }}
                className="rounded-[16px] px-6 py-8 md:px-8 md:py-10 lg:px-[24px] lg:py-[32px] h-auto lg:h-[400px] flex flex-col gap-6 md:gap-8 lg:gap-[24px] lg:sticky"
              >
                {index === 0 && (
                  <div className="flex absolute top-0 left-[-90%] flex-col gap-6">
                    <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px]">
                      <h2 className="font-funnel font-medium text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[56px] text-[#010907]">
                        How It Works
                      </h2>
                      <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[24px] text-[#010907]">
                        Your body already knows what it needs, we help you
                        understand it.
                      </p>
                    </div>
                    <button className="bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40] transition-all duration-200 text-white font-funnel font-semibold text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] px-6 py-3 md:py-3.5 rounded-full w-fit">
                      Decode My DNA
                    </button>
                  </div>
                )}
                <div className="flex flex-col flex-1 gap-6 justify-between md:gap-8 lg:gap-0">
                  {/* Top: Title and Number */}
                  <div className="flex justify-between items-center text-white">
                    <h3 className="font-funnel font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] lg:leading-[32px]">
                      {step.title}
                    </h3>
                    <span className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-[24px]">
                      {step.number}
                    </span>
                  </div>

                  {/* Bottom: Description and Icon */}
                  <div className="flex gap-4 justify-between items-end">
                    <p className="font-inter text-[14px] md:text-[15px] lg:text-[16px] leading-[1.4] lg:leading-[22px] text-[#f8fffd] max-w-[400px]">
                      {step.description}
                    </p>
                    <div className="shrink-0 w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                      <step.icon
                        className="w-full h-full text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
