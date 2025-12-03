import React from "react";
import meetOurExpertImage from "../../../assets/images/all_category/meet_out_expert/meet_out_expert_img.webp";

const MeetOurExpert = () => {
  return (
    <section className="bg-white border-t border-b border-[rgba(1,9,7,0.1)] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-[48px] items-center">
          {/* Left Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[400px] lg:h-[508px] rounded-[24px] overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-[#dce3e4] rounded-[24px]" />

              {/* Expert Image */}
              <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                <img
                  src={meetOurExpertImage}
                  alt="Laura Hix Glickman, Ph.D."
                  className="absolute top-[-5.25%] left-0 w-full h-[125.2%] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-between min-h-[400px] lg:min-h-[508px]">
            {/* Top Content */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[16px] text-[#010907]">
                <h2 className="capitalize font-['Funnel_Display'] font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[56px]">
                  Meet Our Expert
                </h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[24px]">
                  Curious why personalized supplementation works?
                </p>
                <p className="font-['Inter'] font-normal text-[16px] leading-[24px]">
                  Laura Hix Glickman, Ph.D., Chief Strategic and Scientific
                  Advisor at OptiGenix, combines her expertise as a five-time
                  biotech founder and top-five ranked female Series A
                  entrepreneur to ensure every recommendation is science-backed
                  and tailored to your DNA, helping you optimize performance,
                  recovery, and overall health.
                </p>
              </div>
            </div>

            {/* Bottom - Expert Credentials */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Inter'] font-medium text-[16px] leading-[24px] text-[#010907]">
                Laura Hix Glickman, Ph.D.
              </p>
              <p className="font-['Inter'] font-light text-[16px] leading-[24px] text-[#010907]">
                Chief Strategic and Scientific Advisor at OptiGenix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurExpert;
