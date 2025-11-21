import React from "react";
import { Button } from "@/components/ui/button";
import dnaTestVideo from "../../../assets/images/at_home_dna_test/Dna 20S.webm";
import bloodTestVideo from "../../../assets/images/performance_blood_test/Examining-Blood-Specimen.webm";

const DNABloodTest = () => {
  return (
    <section className="bg-[#dedede]/20 md:py-20 py-12 md:pb-32">
      <div className="max-w-[1280px] md:px-8 px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[32px] md:mb-[30px] space-y-[15px] max-w-[800px] mx-auto">
          <h2 className="font-['Funnel_Display'] font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.72px] text-[#042b24]">
            Looking for a More Personalized Supplement Approach?
          </h2>
          <p className="font-['Inter'] font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] text-[#010907]">
            Discover exactly what your body needs with our DNA and Performance
            Blood analysis. These comprehensive tests are designed to create
            your fully personalized supplement plan.
          </p>
          <p className="font-['Funnel_Display'] font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#0d8360]">
            Choose how to get started.
          </p>
        </div>

        {/* Cards Container - Sticky Scroll Effect */}
        <div className="flex flex-col gap-0">
          {/* DNA Test Card - Sticky */}
          <div className="sticky top-[80px] md:top-[100px] h-[530px] md:h-[530px] rounded-[16px] overflow-hidden md:p-[30px] px-4 py-6 flex items-end">
            {/* Background Video with Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover rounded-[16px]"
              >
                <source src={dnaTestVideo} type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[rgba(0,0,0,0.2)] rounded-[16px]" />
            </div>

            {/* Content Card - Glassmorphic Overlay */}
            <div className="relative backdrop-blur-lg bg-[rgba(255,255,255,0.1)] border border-white rounded-[20px] px-4 md:px-[24px] py-5 md:py-[24px] w-full md:w-[550px] md:h-[440px] h-[300px] flex justify-between flex-col gap-3">
              <div className="space-y-[16px]">
                {/* Title and Description */}
                <div className="space-y-[18px] text-white">
                  <h3 className="font-['Funnel_Display'] font-medium text-[20px] md:text-[24px] leading-[22px] md:leading-[20px]">
                    DNA Test: Unlock Your Genetic Potential
                  </h3>
                  <p className="font-inter font-normal text-[16px] leading-[20px]">
                    Easy and effective test to personalize your nutrition,
                    training, and supplements for optimal results.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-[16px]">
                  <ul className="space-y-[16px] font-inter font-normal text-[14px] leading-[22px] text-white list-disc pl-[21px]">
                    <li>Includes a free 1:1 dietitian consultation</li>
                    <li>HSA/FSA accepted</li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="primary" size="md" className="w-fit">
                Learn More
              </Button>
            </div>
          </div>

          {/* Performance Blood Test Card - Scrolls Over */}
          <div className="relative z-10 mt-[20px] h-[530px] md:h-[530px] rounded-[16px] overflow-hidden md:p-[30px] px-4 py-6 flex items-end">
            {/* Background Video with Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover rounded-[16px]"
              >
                <source src={bloodTestVideo} type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[rgba(0,0,0,0.2)] rounded-[16px]" />
            </div>

            {/* Content Card - Glassmorphic Overlay */}
            <div className="relative backdrop-blur-lg bg-[rgba(0,0,0,0.3)] border border-white rounded-[20px] px-4 md:px-[24px] py-5 md:py-[20px] w-full md:w-[550px] md:h-[440px] h-[480px] flex justify-between flex-col gap-3">
              <div className="space-y-[16px]">
                {/* Title and Description */}
                <div className="space-y-[14px] text-white">
                  <h3 className="font-['Funnel_Display'] font-medium text-[20px] md:text-[24px] leading-[22px] md:leading-[20px]">
                    Performance Blood Test
                  </h3>
                  <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[20px]">
                    Easy and effective blood test to uncover imbalances and
                    maximize energy, recovery, and results.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="font-inter font-normal text-[14px] leading-[22px] text-white">
                  <ul className="space-y-[16px] md:space-y-0 list-disc pl-[21px]">
                    <li>
                      Measures 105+ biomarkers tied to energy, recovery, and
                      overall performance
                    </li>
                    <li className="md:mt-4">
                      Checks Vitamin D, Ferritin, Testosterone, Inflammation,
                      and more
                    </li>
                    <li className="md:mt-4">
                      Identifies hidden imbalances affecting recovery and
                      performance
                    </li>
                    <li className="md:mt-4">
                      Includes free 1:1 dietitian consultation
                    </li>
                    <li className="md:mt-4">HSA/FSA accepted</li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="md"
                className="w-fit md:py-[14px] py-[10px]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNABloodTest;
