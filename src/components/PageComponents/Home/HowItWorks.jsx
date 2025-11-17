import React from "react";
import { TestTube, Search, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: TestTube,
    title: "Test with Confidence",
    description:
      "Order your at-home DNA or blood test kit. Simple, private, and quick to complete.",
  },
  {
    number: "02",
    icon: Search,
    title: "Decode Your Data",
    description:
      "Our experts analyze your biomarkers and genetic profile to identify your body's unique needs.",
  },
  {
    number: "03",
    icon: Package,
    title: "Personalize Your Plan",
    description:
      "Receive a custom supplement pack tailored to your results, delivered to your door monthly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Title and Description */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[56px] text-[#010907]">
                How It Works
              </h2>
              <p className="font-['Inter'] font-normal text-[18px] leading-[24px] text-[#010907]">
                Your body already knows what it needs, we help you understand
                it.
              </p>
            </div>
            <button className="border-2 border-[#0d8360] hover:bg-[#0d8360] hover:text-white transition-colors text-[#0d8360] font-['Funnel_Display'] font-semibold text-[16px] leading-[20px] px-6 py-3 rounded-md">
              Decode My DNA
            </button>
          </div>

          {/* Right: Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#0d8360] rounded-lg flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-['Funnel_Display'] font-semibold text-[24px] leading-[28px] text-[#010907]">
                        {step.title}
                      </h3>
                      <span className="font-['Funnel_Display'] font-bold text-[20px] leading-[24px] text-[#010907] opacity-30">
                        {step.number}
                      </span>
                    </div>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
                      {step.description}
                    </p>
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
