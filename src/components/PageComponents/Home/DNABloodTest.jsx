import React from "react";
import { Check, ShieldCheck, FlaskConical, Zap, Clock } from "lucide-react";

const DNABloodTest = () => {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 max-w-[800px] mx-auto">
          <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[56px] text-[#010907]">
            Looking for a More Personalized Supplement Approach?
          </h2>
          <p className="font-['Inter'] font-normal text-[16px] leading-[26px] text-[#010907]">
            Discover exactly what your body needs with our DNA and Performance
            Blood analysis. These comprehensive tests are designed to create
            your fully personalized supplement plan.
          </p>
          <p className="font-['Inter'] font-semibold text-[18px] leading-[32px] text-[#010907]">
            Choose how to get started.
          </p>
        </div>

        {/* DNA Test Card */}
        <div className="grid grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
          {/* Left: Graphics/Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#0d8360] to-[#042b24]">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200"
                alt="DNA Testing"
                className="object-cover w-full h-full opacity-50"
              />
              <div className="grid absolute right-8 bottom-8 left-8 grid-cols-4 gap-4">
                {[
                  { icon: ShieldCheck, text: "HSA / FSA Accepted" },
                  { icon: FlaskConical, text: "Comprehensive Testing" },
                  { icon: Zap, text: "Cutting-Edge Science" },
                  { icon: Clock, text: "Easy and Convenient" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 text-center rounded-lg backdrop-blur-sm bg-white/90"
                  >
                    <item.icon className="w-8 h-8 mx-auto mb-2 text-[#0d8360]" />
                    <p className="font-['Inter'] font-semibold text-[10px] leading-[12px] text-[#010907]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-['Funnel_Display'] font-medium text-[32px] leading-[40px] text-[#010907]">
              Discover exactly what your body needs with our DNA and Performance
              Blood analysis.
            </h3>
            <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
              Discover your body's unique genetic profile for performance,
              recovery, and nutrition. Our at-home DNA test uses a simple cheek
              swab to reveal how your body responds to training, diet, and
              supplementation. These comprehensive tests are designed to create
              your fully personalized supplement plan.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "Train to your genetic strengths",
                "Optimize nutrition based on your biology",
                "Skip supplements you don't need",
                "Includes free 1:1 expert dietitian review",
              ].map((benefit, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0d8360] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="font-['Inter'] font-normal text-[14px] leading-[20px] text-[#010907]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <button className="bg-[#0d8360] hover:bg-[#0a6b4f] transition-colors text-white font-['Funnel_Display'] font-semibold text-[16px] leading-[24px] px-6 py-3.5 rounded-full w-fit">
              Select and continue
            </button>
          </div>
        </div>

        {/* Performance Blood Test Card */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-['Funnel_Display'] font-medium text-[32px] leading-[40px] text-[#010907]">
              Performance Blood Test
            </h3>
            <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
              Our Performance Bloodwork panel measures key biomarkers tied to
              energy, recovery, and overall performance, including Vitamin D,
              Ferritin, Testosterone, Inflammation, and more.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "Identify hidden imbalances affecting recovery and performance",
                "Check Stress Markers & Neurocognitive Markers",
                "105+ Biomarker Levels Tracked",
                "Test Nutrient & Vitamin Levels",
                "Includes free 1:1 expert dietitian review",
              ].map((benefit, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0d8360] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="font-['Inter'] font-normal text-[14px] leading-[20px] text-[#010907]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <button className="bg-[#0d8360] hover:bg-[#0a6b4f] transition-colors text-white font-['Funnel_Display'] font-semibold text-[16px] leading-[24px] px-6 py-3.5 rounded-full w-fit">
              Select and continue
            </button>
          </div>

          {/* Right: Graphics/Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#042b24] to-[#0d8360]">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200"
                alt="Blood Testing"
                className="object-cover w-full h-full opacity-50"
              />
              <div className="grid absolute right-8 bottom-8 left-8 grid-cols-4 gap-4">
                {[
                  { icon: ShieldCheck, text: "HSA / FSA Accepted" },
                  { icon: FlaskConical, text: "Comprehensive Testing" },
                  { icon: Zap, text: "Cutting-Edge Science" },
                  { icon: Clock, text: "Easy and Convenient" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 text-center rounded-lg backdrop-blur-sm bg-white/90"
                  >
                    <item.icon className="w-8 h-8 mx-auto mb-2 text-[#0d8360]" />
                    <p className="font-['Inter'] font-semibold text-[10px] leading-[12px] text-[#010907]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNABloodTest;
