import React from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does OptiGenix work?",
    answer:
      "OptiGenix combines advanced gene and blood testing with personalized supplement formulations. We analyze your unique genetic markers and current biomarker levels to create a customized nutrition plan tailored specifically to your body's needs, goals, and lifestyle.",
  },
  {
    question: "Is OptiGenix only for athletes?",
    answer:
      "Not at all! While athletes love our personalized approach, OptiGenix is designed for anyone looking to optimize their health and wellness. Whether you're a busy professional, fitness enthusiast, or simply focused on healthy aging, our personalized supplements work for you.",
  },
  {
    question: "Why choose OptiGenix?",
    answer:
      "Unlike generic supplements, OptiGenix is built on science-backed personalization. Our gene and blood analysis ensures you get exactly what your body needs - no more, no less. Plus, our supplements are third-party tested and backed by expert support to help you achieve your health goals.",
  },
];

const FAQs = () => {
  return (
    <section
      className="bg-[#f7f7f7] py-[40px] md:py-[80px] px-4 lg:px-[180px]"
      id="faqs"
    >
      <div className="max-w-[1080px] mx-auto flex flex-col gap-[48px]">
        {/* Header */}
        <h2 className="text-[#010907] text-center ">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-[16px]"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-[16px] overflow-hidden border-none"
            >
              <AccordionTrigger className="cursor-pointer md:px-[24px] px-4 py-[24px] md:py-[32px] hover:bg-gray-50 hover:no-underline group">
                <h3 className=" text-[#010907] pr-4">{faq.question}</h3>
                <div className="bg-[rgba(0,0,0,0.06)] rounded-[24px] w-[48px] h-[48px] flex items-center justify-center shrink-0 ml-4 relative">
                  <Plus
                    className="w-[24px] h-[24px] text-[#010907] transition-all duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0 group-data-[state=open]:scale-0"
                    strokeWidth={2}
                  />
                  <Minus
                    className="w-[24px] h-[24px] text-[#010907] transition-all duration-200 absolute opacity-0 scale-0 rotate-90 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100 group-data-[state=open]:scale-100"
                    strokeWidth={2}
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-[24px] pb-[32px] pt-0">
                <p className="font-inter text-[18px] leading-[28px] text-[#010907]">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
