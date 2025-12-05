import React from "react";
import { Button } from "@/components/ui/button";
import pillsImage from "@/assets/images/single_test/gene_test/gone_test_img.webp";

const categories = [
  { label: "Muscle Performance & Fiber Type", color: "#3b82f6" },
  { label: "Recovery & Injury Risk", color: "#000000" },
  { label: "Nutrition & Vitamin/Mineral Absorption", color: "#10b981" },
  { label: "Metabolism & Body Composition", color: "#f59e0b" },
  { label: "Bone & Structural Health", color: "#b200ff" },
  { label: "Cognition & Stress Response", color: "#3b82f6" },
  { label: "Circadian Rhythm & Environmental Adaptation", color: "#000000" },
  { label: "Substance Metabolism", color: "#10b981" },
  { label: "Longevity & Cellular Health", color: "#f59e0b" },
];

const GeneTest = () => {
  return (
    <section className="py-12 bg-white md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row  gap-10 md:gap-12">
        {/* Left Content */}
        <div className="flex flex-col flex-1 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#252525]">Gene Test</h2>
            <p className="description text-[#252525] max-w-[640px]">
              This comprehensive test analyzes{" "}
              <span className="font-bold">
                30+ genes and 50+ SNPs across 9 functional categories.
              </span>{" "}
              Your DNA helps you and your doctor identify the medications that
              work best for you.
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center h-[44px] rounded-[12px] bg-[#f7f7f7] px-3 border-l-[3px]"
                style={{ borderColor: cat.color }}
              >
                <span className="font-['Funnel_Display'] text-[14px] leading-[22px] text-[#252525]">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            size="md"
            className="mt-2 w-fit btn-primary"
          >
            Get Started Today
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[320px] md:h-[447px] rounded-[16px] overflow-hidden border border-[#f3f3f3] shadow-sm">
            <img
              src={pillsImage}
              alt="Gene test visual"
              className="object-cover absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneTest;
