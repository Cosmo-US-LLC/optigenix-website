import React from "react";
import { Check, X } from "lucide-react";
import comparisonImg from "../../../assets/images/comparison/comparison_img.webp";
import optigenixIcon from "../../../assets/images/footer/footer_logo.webp";

// Reusable TableRow Component
const TableRow = ({ benefit, optigenixStatus, traditionalStatus }) => {
  return (
    <div className="flex items-center justify-between pb-3 md:pb-4 lg:pb-[16px] border-b border-[rgba(1,9,7,0.5)] border-opacity-20">
      <p className="font-inter text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] text-[#010907]">
        {benefit}
      </p>
      <div className="flex gap-8 md:gap-10 lg:gap-[48px] items-center">
        {/* OptiGenix column */}
        <div className="flex justify-center items-center w-[32px]">
          {optigenixStatus ? (
            <Check
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] text-white relative z-10"
              strokeWidth={3}
            />
          ) : (
            <X
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] text-red-400"
              strokeWidth={2}
            />
          )}
        </div>
        {/* Traditional column */}
        <div className="flex justify-center items-center w-[180px] md:w-[200px] lg:w-[209px]">
          {traditionalStatus ? (
            <Check
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] text-[#0d8360]"
              strokeWidth={3}
            />
          ) : (
            <X
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] text-red-400"
              strokeWidth={2}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Comparison = () => {
  const comparisons = [
    {
      benefit: "80% less plastic",
      optigenixStatus: true,
      traditionalStatus: false,
    },
    {
      benefit: "4 pills - 1 sachet",
      optigenixStatus: true,
      traditionalStatus: false,
    },
    {
      benefit: "$2/day average",
      optigenixStatus: true,
      traditionalStatus: false,
    },
    {
      benefit: "Pocket ready",
      optigenixStatus: true,
      traditionalStatus: false,
    },
    {
      benefit: "Ingredients by function",
      optigenixStatus: true,
      traditionalStatus: false,
    },
  ];

  return (
    <section className="py-12 bg-white md:py-16 lg:py-[80px] px-4 md:px-8 lg:px-[32px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[48px] items-center">
          {/* Left: Product Image */}
          <div className="w-full lg:w-[600px] lg:h-[600px] rounded-[24px] overflow-hidden shrink-0">
            <img
              src={comparisonImg}
              alt="OptiGenix Product"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: Comparison Content */}
          <div className="flex-1 w-full flex flex-col justify-between gap-8 md:gap-10 lg:gap-0 lg:h-[600px]">
            {/* Title */}
            <h2 className="font-funnel font-medium text-[32px] md:text-[40px] lg:text-[48px] leading-[56px] text-[#010907] capitalize">
              Comparison
            </h2>

            {/* Comparison Table */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] relative">
              {/* Vertical dark pill behind OptiGenix column - desktop only */}
              <div className="hidden lg:block absolute bg-[#042b24] w-[68px] h-[380px] rounded-[100px] left-[260px] top-[0px]" />

              {/* Table Header */}
              <div className="flex items-center justify-between pb-3 md:pb-4 lg:pb-[16px] border-b border-[rgba(1,9,7,0.5)]">
                <p className="font-inter font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] text-[#010907]">
                  Benefits
                </p>
                <div className="flex items-center justify-between w-[240px] md:w-[260px] lg:w-[288px]">
                  <img
                    src={optigenixIcon}
                    alt="OptiGenix"
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-[28px] lg:h-[32px] z-30 object-contain"
                  />
                  <p className="font-inter font-medium italic text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] text-[#2b7a6c] text-center w-[180px] md:w-[200px] lg:w-[209px]">
                    Traditional
                    <br />
                    Supplements
                  </p>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px]">
                {comparisons.map((item, index) => (
                  <TableRow
                    key={index}
                    benefit={item.benefit}
                    optigenixStatus={item.optigenixStatus}
                    traditionalStatus={item.traditionalStatus}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
