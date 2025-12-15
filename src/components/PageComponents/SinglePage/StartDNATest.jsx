import React from "react";
import bgImage from "@/assets/images/single_test/dna_test/dna_test_img2.webp";
import cartIcon from "@/assets/images/single_test/gene_test/cart_icon.svg";

const StartDNATest = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="relative rounded-[24px] md:rounded-[30px] overflow-hidden">
          {/* Background image with dark overlay */}
          <div className="absolute inset-0">
            <img
              src={bgImage}
              alt="DNA background"
              className="h-[100%]"
              // className="absolute w-[120%] h-[160%] left-[-10%] top-[-30%] max-w-none object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex relative flex-col gap-4 items-center px-6 py-10 text-center md:gap-5 md:py-14 md:px-12">
            <div className="bg-[#FFFFFF05] backdrop-blur-sm border border-white/30 rounded-[24px] p-6 md:p-10 flex flex-col gap-4 items-center">
              <h2 className="!text-[#ffffff]">Get Your DNA Test Kit</h2>
              <div className="flex flex-col gap-1 items-center">
                <div className="text-[#0d8360] text-[48px] md:text-[68px] leading-[56px] md:leading-[72px] font-['Funnel_Display'] font-semibold">
                  $200
                </div>
                <p className="text-white text-[14px] md:text-[16px] leading-[22px] font-['Funnel_Display']">
                  One-time payment No subscription
                </p>
              </div>

              <button
                className="bg-[#0d8360] hover:bg-[#0b7254] cursor-pointer active:bg-[#095c45] transition-colors text-white rounded-full px-5 md:px-[19px] py-3 md:py-[12px] flex items-center gap-2 font-['Funnel_Display'] font-semibold text-[16px] leading-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                onClick={() =>
                  window.open(
                    "https://buy.stripe.com/7sY7sM0arfBlgMW77gf3a02",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <img
                  src={cartIcon}
                  alt=""
                  className="w-5 h-5"
                  loading="lazy"
                  aria-hidden="true"
                />
                Order Your Test
              </button>

              <p className="!text-[#ffffff] description  !text-[14px] max-w-[520px]">
                Your results will provide personalized insights to guide your
                training, nutrition, and overall wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartDNATest;
