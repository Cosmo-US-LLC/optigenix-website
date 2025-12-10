import React from "react";
import { Check, X } from "lucide-react";
import comparisonImg from "../../../assets/images/comparison/comparison_img2.webp";
import optigenixIcon from "../../../assets/images/footer/footer_logo.webp";

// Reusable TableRow Component
const TableRow = ({ benefit, optigenixStatus, traditionalStatus }) => {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-[rgba(1,9,7,0.5)] border-opacity-20">
      <p className="flex-1 font-inter font-normal text-[14px] lg:text-[20px] leading-[24px] lg:leading-[28px] text-[#010907]">
        {benefit}
      </p>
      <div className="flex items-center justify-between w-[46%] lg:w-[288px]">
        {/* OptiGenix column */}
        <div className="flex md:justify-center justify-start max-md:pl-[2px]  items-center max-md:w-[100px] ">
          {optigenixStatus ? (
            <Check
              className="w-6 h-6 lg:w-[24px] lg:h-[24px] text-[#5CDDC6] relative z-10"
              strokeWidth={3}
            />
          ) : (
            <X
              className="w-6 h-6 lg:w-[24px] lg:h-[24px] text-red-400"
              strokeWidth={2}
            />
          )}
        </div>
        {/* Traditional column */}
        <div className="flex md:justify-center justify-center items-center w-[110px] lg:w-[209px]">
          {traditionalStatus ? (
            <Check
              className="w-6 h-6 lg:w-[24px] lg:h-[24px] text-[#0d8360]"
              strokeWidth={3}
            />
          ) : (
            <X
              className="w-6 h-6 lg:w-[24px] lg:h-[24px] text-red-400"
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
    <section className="py-12 bg-white lg:py-[80px] px-4 lg:px-[32px]">
      <div className="max-w-[1280px] mx-auto lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-center">
          {/* Product Image */}
          <div className="w-full h-[300px] lg:w-[600px] lg:h-[600px] rounded-[24px] overflow-hidden shrink-0">
            <img
              src={comparisonImg}
              alt="OptiGenix Product"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Comparison Content */}
          <div className="flex-1 w-full flex flex-col gap-6 lg:gap-0 lg:h-[600px] lg:justify-between">
            {/* Title */}
            <h2 className=" text-[#010907] capitalize max-w-[374px]">
              Why OptiGenix Is Different
            </h2>

            {/* Comparison Table */}
            <div className="flex flex-col gap-6 lg:gap-[14px] relative">
              {/* Vertical dark pill behind OptiGenix column */}
              <div className="absolute bg-[#042b24] w-[50px] h-[342px] lg:w-[68px] lg:h-[380px] rounded-[100px] md:left-[57%] left-[58%] lg:left-[260px] md:top-[-10px] translate-x-[-50%] lg:translate-x-0" />

              {/* Table Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(1,9,7,0.5)]">
                <p className="flex-1 font-inter font-semibold text-[14px] lg:text-[18px] leading-[22px] lg:leading-[26px] text-[#010907]">
                  Benefits
                </p>
                <div className="flex items-center max-md:pl-[3px] justify-between w-[46%] lg:w-[288px]">
                  <img
                    src={optigenixIcon}
                    alt="OptiGenix"
                    className="w-[25px] h-[28px] lg:w-[28px] lg:h-[32px] z-30 object-contain"
                  />
                  <p className="font-inter font-medium italic text-[14px] lg:text-[18px] leading-[22px] lg:leading-[26px] text-[#2b7a6c] text-center w-[100px] lg:w-[209px]">
                    Traditional
                    <br />
                    Supplements
                  </p>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="flex flex-col gap-3">
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
