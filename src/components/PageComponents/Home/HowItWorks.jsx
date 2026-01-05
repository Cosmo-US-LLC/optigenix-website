import React from "react";
import { TestTube, Search, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: TestTube,
    title: "Test with Confidence",
    description:
      "Order your at-home Gene or blood test kit. Simple, safe, and science-backed, everything you need is sent straight to you.",
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
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 pb-20 md:py-16 lg:py-[80px]">
        {/* Mobile Layout: Title, Button, then Stacked Cards */}
        <div className="flex flex-col gap-8 lg:hidden">
          {/* Title and Button */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#010907]">How It Works</h2>
              <p className="description text-[#010907]">
                Your body already knows what it needs, we help you understand
                it.
              </p>
            </div>
            <button className="bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40] transition-all duration-200 !text-[#fff] btn-primary px-6 py-[14px] rounded-full w-fit">
              Decode My Gene
            </button>
          </div>

          {/* Stacked Cards with Sticky Scroll */}
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: step.bgColor,
                  top: `${80 + index * 20}px`,
                  zIndex: 10 + index,
                }}
                className={`rounded-[16px] px-4 py-5 flex flex-col gap-6 ${
                  index < steps.length - 1 ? "sticky" : ""
                } ${index > 0 ? "mt-[14px]" : ""}`}
              >
                <div className="flex flex-col gap-20">
                  {/* Top: Title and Number */}
                  <div className="flex justify-between items-center text-white">
                    <h3 className=" !text-[#ffffff]">{step.title}</h3>
                    <span className="font-['Inter'] font-normal text-[16px] leading-[24px]">
                      {step.number}
                    </span>
                  </div>

                  {/* Bottom: Description and Icon */}
                  <div className="flex gap-5 items-center">
                    <p className="description !text-[#f8fffd]">
                      {step.description}
                    </p>
                    <div className="shrink-0 w-[48px] h-[48px] flex items-center justify-center">
                      <step.icon
                        className="w-full h-full text-white"
                        strokeWidth={0.6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout: Sticky Scroll */}
        <div className="hidden lg:flex flex-row gap-[48px] items-start">
          {/* Left: Empty space for sticky title */}
          <div className="flex-1"></div>

          {/* Right: Steps - Stacked Cards with Sticky Scroll */}
          <div className="w-[640px] flex flex-col space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: step.bgColor,
                  top: `${120 + index * 80}px`,
                }}
                className="rounded-[16px] px-[24px] py-[32px] h-[400px] flex flex-col gap-[24px] sticky"
              >
                {/* Title and Button positioned absolutely on first card */}
                {index === 0 && (
                  <div className="flex absolute top-0 left-[-90%] flex-col gap-6">
                    <div className="flex flex-col gap-[16px]">
                      <h2 className="   text-[#010907]">How It Works</h2>
                      <p className="description text-[#010907]">
                        Your body already knows what it needs, we help you
                        understand it.
                      </p>
                    </div>
                    <button className="bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40] transition-all duration-200 text-white btn-primary px-6 py-3.5 rounded-full w-fit">
                      Decode My Gene
                    </button>
                  </div>
                )}

                <div className="flex flex-col flex-1 justify-between">
                  {/* Top: Title and Number */}
                  <div className="flex justify-between items-center text-white">
                    <h3 className="!text-[#ffffff]">{step.title}</h3>
                    <span className="font-['Inter'] font-normal text-[16px] leading-[24px]">
                      {step.number}
                    </span>
                  </div>

                  {/* Bottom: Description and Icon */}
                  <div className="flex gap-4 justify-between items-end">
                    <p className="description !text-[#f8fffd] max-w-[400px]">
                      {step.description}
                    </p>
                    <div className="shrink-0 w-[80px] h-[80px] flex items-center justify-center">
                      <step.icon
                        className="w-full h-full text-white"
                        strokeWidth={0.6}
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
