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
        "We source only the highest-quality, natural ingredients that are bioavailable and effective. Each ingredient is carefully selected for its proven benefits.",
    },
    {
      id: "item-2",
      title: "Pharmaceutical-Grade Quality",
      content:
        "Our supplements are manufactured in FDA-registered facilities that adhere to strict pharmaceutical-grade standards, ensuring consistency and quality.",
    },
    {
      id: "item-3",
      title: "Third-Party Tested",
      content:
        "Every batch is independently tested by ISO-accredited labs to verify purity, potency, and safety. We provide complete transparency in our testing results.",
    },
    {
      id: "item-4",
      title: "Made in the USA",
      content:
        "All our supplements are proudly manufactured in the United States, following the highest industry standards and quality control measures.",
    },
    {
      id: "item-5",
      title: "Money-Back Guarantee",
      content:
        "We stand behind our products with a satisfaction guarantee. If you're not completely satisfied, we'll refund your purchase—no questions asked.",
    },
  ];

  return (
    <div className="bg-white py-[50px] h-[880px] w-full">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto flex gap-8 items-start">
        <div className="flex-1 h-[655px] rounded-3xl overflow-hidden">
          <img
            src={scienceImage || backedByScienceBg}
            alt="Science-backed research"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 border border-dashed border-white rounded-3xl px-8 py-4 min-h-[655px]">
          <div className="w-full max-w-[577px]">
            <div className="flex flex-col gap-5 mb-5">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold! leading-[56px]! text-black m-0">
                  Backed by Science
                </h2>
                <p className="description text-black! m-0">
                  Our process starts with genetic and metabolic insights and
                  ends with supplements verified for purity, safety, and
                  efficacy in ISO-accredited, third-party labs.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-[#ADEDDA] p-4 rounded-2xl my-4">
              <div className="flex justify-between items-center">
                <p className="font-bold capitalize text-[22px] leading-[26px] text-[#042B24] m-0">
                  Science-Backed Formulas
                </p>
                <img src={optigenixLogo} alt="OptiGenix Logo" />
              </div>
              <p className="description text-[#010907]!">
                Every supplement is developed using proven research and reviewed
                by our in-house PhD experts. Formulated for optimal results and
                backed by clinical research.
              </p>
            </div>

            <div className="">
              <Accordion type="single" collapsible defaultValue="item-1">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-none"
                  >
                    <AccordionTrigger className="bg-transparent border-none w-full flex justify-between items-center cursor-pointer p-0 py-0 hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-2xl data-[state=open]:py-[17px] data-[state=open]:min-h-[70px] transition-all [&[data-state=open]>span:first-child]:text-[22px] [&[data-state=open]>span:first-child]:text-[#042b24] [&[data-state=open]>span:last-child]:text-[#042b24] [&[data-state=open]>span:last-child]:rotate-45">
                      <h5 className="font-bold! leading-[26px]! capitalize text-black text-left">
                        {item.title}
                      </h5>
                      <span className="w-[22px] h-[22px] text-[28px] flex items-center justify-center text-xl shrink-0 ml-4 transition-transform">
                        +
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className=" rounded-b-2xl pb-[17px] pt-0">
                      <p className="font-inter font-normal text-base leading-6 text-[#010907] tracking-[-0.1px] m-0">
                        {item.content}
                      </p>
                    </AccordionContent>
                    {index < accordionItems.length - 1 && (
                      <div className="h-px bg-[rgba(0,0,0,0.1)] w-full my-6" />
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
