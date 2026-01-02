import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import optigenixLogo from "../../../assets/images/category/category_hero/optigenix_logo.svg";
import backedByScienceBg from "../../../assets/images/category/category_hero/category_backedby.webp";

const BackedByScience = ({ scienceImage }) => {
  const accordionItems = [
    {
      id: "item-1",
      title: "Premium Natural Ingredients",
      content:
        "Made with all-natural, high-quality ingredients. Non-GMO and free from artificial colors.",
    },
    {
      id: "item-2",
      title: "Pharmaceutical-Grade Quality",
      content:
        "Ingredients are pure, potent, and designed for optimal performance. GMP-certified for your confidence.",
    },
    {
      id: "item-3",
      title: "Third-Party Tested",
      content:
        "Every batch is independently verified in ISO-accredited labs for safety, accuracy, and trust.",
    },
    {
      id: "item-4",
      title: "Made in the USA",
      content:
        "Crafted under strict quality standards to ensure consistency and reliability.",
    },
    {
      id: "item-5",
      title: "Money-Back Guarantee",
      content: "We stand by our products—your satisfaction is our promise.",
    },
  ];

  return (
    <div className="bg-white py-[40px] md:py-[50px] lg:py-[60px] w-full">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
        {/* Image Section */}
        <div className="overflow-hidden w-full h-[680px] rounded-2xl md:rounded-3xl">
          <img
            src={scienceImage || backedByScienceBg}
            alt="Science-backed research"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="px-4 w-full max-w-[560px] rounded-2xl  md:rounded-3xl md:px-6">
          <div className="w-full">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-4 md:gap-5 md:mb-5">
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="font-bold! text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[48px] lg:leading-[56px]! text-black m-0">
                  Backed by Science
                </h2>
                <p className="description text-[14px] md:text-[16px] lg:text-[18px] text-black! m-0">
                  Our process starts with genetic and metabolic insights and
                  ends with supplements verified for purity, safety, and
                  efficacy in ISO-accredited, third-party labs.
                </p>
              </div>
            </div>

            {/* Featured Card */}
            <div className="flex flex-col gap-3 md:gap-4 bg-[#ADEDDA] p-4 md:p-5 rounded-xl md:rounded-2xl my-4 md:my-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <p className="font-bold capitalize text-[18px] md:text-[20px] lg:text-[22px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-[#042B24] m-0">
                  Science-Backed Formulas
                </p>
                <img
                  src={optigenixLogo}
                  alt="OptiGenix Logo"
                  className="w-auto h-[24px] md:h-[28px] lg:h-[32px]"
                />
              </div>
              <p className="description text-[14px] md:text-[16px] text-[#010907]!">
                Every supplement is developed using proven research and reviewed
                by our in-house PhD experts. Formulated for optimal results and
                backed by clinical research.
              </p>
            </div>

            {/* Accordion */}
            <div className="mt-2">
              <Accordion type="single" collapsible defaultValue="">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-none"
                  >
                    <AccordionTrigger className="bg-transparent border-none w-full flex justify-between items-center cursor-pointer p-0 py-0 hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-xl md:data-[state=open]:rounded-2xl data-[state=open]:py-3 md:data-[state=open]:py-[17px] data-[state=open]:min-h-[60px] md:data-[state=open]:min-h-[70px] transition-all [&[data-state=open]>span:first-child]:text-[18px] md:[&[data-state=open]>span:first-child]:text-[20px] lg:[&[data-state=open]>span:first-child]:text-[22px] [&[data-state=open]>span:first-child]:text-[#042b24] [&[data-state=open]>span:last-child]:text-[#042b24] [&[data-state=open]>span:last-child]:rotate-45">
                      <h5 className="font-bold! text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[26px]! capitalize text-black text-left pr-2">
                        {item.title}
                      </h5>
                      <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] text-[24px] md:text-[28px] flex items-center justify-center shrink-0 ml-2 md:ml-4 transition-transform">
                        +
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="rounded-b-xl md:rounded-b-2xl pb-3 md:pb-[17px] pt-0">
                      <p className="font-inter font-normal text-[14px] md:text-base leading-5 md:leading-6 text-[#010907] tracking-[-0.1px] m-0">
                        {item.content}
                      </p>
                    </AccordionContent>
                    {index < accordionItems.length - 1 && (
                      <div className="h-px bg-[rgba(0,0,0,0.1)] w-full my-4 md:my-6" />
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackedByScience;
