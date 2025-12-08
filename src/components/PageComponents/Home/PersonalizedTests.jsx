import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import icon1 from "../../../assets/images/performance_blood_test/icon1.svg";
import icon2 from "../../../assets/images/performance_blood_test/icon2.svg";
import icon3 from "../../../assets/images/performance_blood_test/icon3.svg";
import icon4 from "../../../assets/images/performance_blood_test/icon4.svg";

import dnaTest from "../../../assets/images/performance_blood_test/dna_img1.webp";
import bloodTest from "../../../assets/images/performance_blood_test/tube_img1.webp";

const PersonalizedTests = () => {
  return (
    <section className="bg-white py-[80px] ">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[48px] w-full md:max-w-[800px] mx-auto ">
          <h2 className="text-[#042b24] mb-[15px] px-4 !text-[30px] md:!text-[48px] !leading-[30px] md:!leading-[56px]">
            Looking for a More Personalized Supplement Approach?
          </h2>
          <p className="description text-[#010907] mb-[15px] px-4">
            Discover exactly what your body needs with our DNA and Performance
            Blood analysis. These comprehensive tests are designed to create
            your fully personalized supplement plan.
          </p>
          <p className="font-['Funnel_Display'] font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#0d8360]">
            Choose how to get started.
          </p>
        </div>

        {/* Cards Container - Sticky Scroll Effect */}
        <div className="flex flex-col gap-0 max-w-[1280px] mx-auto px-4 md:px-8">
          {/* DNA Test Card - Sticky */}
          <div className="sticky top-[-6px] md:top-[100px] bg-[#fbfbfb] rounded-[32px] p-[16px] md:p-[32px] flex flex-col md:flex-row gap-[32px] md:gap-[48px] items-center justify-center">
            {/* Left Content */}
            <div className="flex flex-col gap-[16px] w-full md:w-[624px]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="capitalize font-['Funnel_Display'] font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#010907]">
                      At-Home DNA Test
                    </h3>
                  </div>
                  <p className="text-black description">
                    Discover your body's unique genetic profile for performance,
                    recovery, and nutrition. Our at-home DNA test uses a simple
                    cheek swab to reveal how your body responds to training,
                    diet, and supplementation.
                  </p>
                </div>

                {/* Benefits Box */}
                <div className="backdrop-blur-[7px] bg-[#f8fffd] border border-[#2b7a6c] rounded-[16px] p-[12px] md:p-[24px]">
                  <div className="flex flex-col gap-[16px]">
                    {[
                      "Train to your genetic strengths",
                      "Optimize nutrition based on your biology",
                      "Skip supplements you don't need",
                      "Includes free 1:1 expert dietitian review",
                    ].map((benefit, index) => (
                      <div key={index} className="flex gap-[10px] items-center">
                        <div className="shrink-0 w-[20px] h-[20px] rounded-full bg-[#0D8360] flex items-center justify-center">
                          <Check className="w-[14px] h-[14px] text-white stroke-3" />
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-black">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="md"
                className="w-fit"
                onClick={() => console.log("Explore DNA Test")}
              >
                Shop Now
              </Button>
            </div>

            {/* Right Graphics */}
            <div className="bg-[#dce3e4] rounded-[24px] w-full md:w-[550px] h-[400px] md:h-[500px] relative overflow-hidden shrink-0">
              {/* DNA Image */}
              <div className="flex absolute inset-0 justify-center items-center">
                <img
                  src={dnaTest}
                  alt="DNA Helix"
                  className="object-cover w-full h-full md:object-contain"
                />
              </div>

              {/* Feature Badges */}
              <div className="absolute bottom-[20px] left-[16px] md:left-[28px] right-[16px] md:right-[28px] flex flex-wrap gap-[8px] md:gap-[14px]">
                {[
                  { icon: icon1, text: "HSA / FSA\nAccepted" },
                  { icon: icon2, text: "Comprehensive\nTesting" },
                  { icon: icon4, text: "Cutting-Edge\nScience" },
                  { icon: icon3, text: "Easy and\nConvenient" },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-[7px] bg-[#042B24] border border-[rgba(255,255,255,0.1)] rounded-[16px] px-[8px] py-[16px] md:py-[20px] flex-1 min-w-[90px] md:min-w-[100px]"
                  >
                    <div className="flex flex-col gap-[12px] md:gap-[16px] items-center">
                      <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]">
                        <img
                          src={badge.icon}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <p className="font-['Inter'] font-normal text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-white text-center whitespace-pre-line">
                        {badge.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Blood Test Card - Scrolls Over */}
          <div className="relative z-10 mt-[400px] md:mt-[600px] bg-[#fbfbfb] rounded-[32px] p-[16px] md:p-[32px] flex flex-col-reverse md:flex-row gap-[32px] md:gap-[48px] items-center justify-between">
            {/* Left Graphics */}
            <div className="bg-[#dce3e4] rounded-[24px] w-full md:w-[550px] h-[400px] md:h-[500px] relative overflow-hidden shrink-0">
              {/* Blood Test Tube Image */}
              <div className="flex absolute inset-0 justify-center items-center">
                <img
                  src={bloodTest}
                  alt="Blood Test"
                  className="object-cover w-full h-full md:object-contain"
                />
              </div>

              {/* OptiGenix Logo on Tube */}

              {/* Feature Badges - Grid Layout */}
              <div className="absolute inset-0 p-[16px] md:p-0">
                {/* Top Left */}
                <div className="absolute left-[6px] md:left-[30px] top-[180px] md:top-[200px] backdrop-blur-[7px] bg-[#042b24] border border-[rgba(255,255,255,0.1)] rounded-[16px] px-[8px] py-[16px] md:py-[20px] w-[90px] md:w-[123.5px]">
                  <div className="flex flex-col gap-[12px] md:gap-[16px] items-center">
                    <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]">
                      <img src={icon2} alt="" className="w-full h-full" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[11px] md:text-[14px] leading-[16px] md:leading-[20px] text-white text-center whitespace-pre-line">
                      Comprehensive{"\n"}Testing
                    </p>
                  </div>
                </div>

                {/* Bottom Left */}
                <div className="absolute left-[6px] md:left-[30px] bottom-[12px] md:bottom-[26px] backdrop-blur-[7px] bg-[#042b24] border border-[rgba(255,255,255,0.1)] rounded-[16px] px-[8px] py-[16px] md:py-[20px] w-[90px] md:w-[123.5px]">
                  <div className="flex flex-col gap-[12px] md:gap-[16px] items-center">
                    <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]">
                      <img src={icon1} alt="" className="w-full h-full" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[11px] md:text-[14px] leading-[16px] md:leading-[20px] text-white text-center whitespace-pre-line">
                      HSA / FSA{"\n"}Accepted
                    </p>
                  </div>
                </div>

                {/* Top Right */}
                <div className="absolute right-[6px] md:right-[30px] top-[180px] md:top-[200px] backdrop-blur-[7px] bg-[#042b24] border border-[rgba(255,255,255,0.1)] rounded-[16px] px-[8px] py-[16px] md:py-[20px] w-[90px] md:w-[123.5px]">
                  <div className="flex flex-col gap-[12px] md:gap-[16px] items-center">
                    <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]">
                      <img src={icon4} alt="" className="w-full h-full" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[11px] md:text-[14px] leading-[16px] md:leading-[20px] text-white text-center whitespace-pre-line">
                      Cutting-Edge Science
                    </p>
                  </div>
                </div>

                {/* Bottom Right */}
                <div className="absolute right-[6px] md:right-[30px] bottom-[12px] md:bottom-[26px] backdrop-blur-[7px] bg-[#042b24] border border-[rgba(255,255,255,0.1)] rounded-[16px] px-[8px] py-[16px] md:py-[20px] w-[90px] md:w-[123.5px]">
                  <div className="flex flex-col gap-[12px] md:gap-[16px] items-center">
                    <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]">
                      <img src={icon3} alt="" className="w-full h-full" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[11px] md:text-[14px] leading-[16px] md:leading-[20px] text-white text-center whitespace-pre-line">
                      Easy and{"\n"}Convenient
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-[25px] w-full md:w-[624px]">
              <h3 className="capitalize font-['Funnel_Display'] font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#010907]">
                Performance Blood Test
              </h3>

              <p className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">
                Our Performance Bloodwork panel measures key biomarkers tied to
                energy, recovery, and overall performance, including Vitamin D,
                Ferritin, Testosterone, Inflammation, and more.
              </p>

              {/* Benefits Box */}
              <div className="backdrop-blur-[7px] bg-[#f8fffd] border border-[#2b7a6c] rounded-[16px] p-[12px] md:p-[16px]">
                <div className="flex flex-col gap-[10px]">
                  {[
                    "Identify hidden imbalances affecting recovery and performance",
                    "Check Stress Markers & Neurocognitive Markers",
                    "105+ Biomarker Levels Tracked",
                    "Test Nutrient & Vitamin Levels",
                    "Includes free 1:1 expert dietitian review",
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-[10px] items-center">
                      <div className="shrink-0 w-[20px] h-[20px] rounded-full bg-[#0D8360] flex items-center justify-center">
                        <Check className="w-[14px] h-[14px] text-white stroke-3" />
                      </div>
                      <p className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-black">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="md"
                className="w-fit"
                onClick={() => console.log("Explore Blood Test")}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedTests;
