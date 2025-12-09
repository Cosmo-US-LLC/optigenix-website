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
    question: "How long does it take to get my gene test results?",
    answer:
      "Once your sample reaches our lab, processing typically takes 3–4 weeks. You’ll receive a detailed, personalized report online as soon as your results are ready.",
  },
  {
    question: "Is this gene test safe and private?",
    answer:
      "Absolutely. Your genetic information is encrypted, anonymized, and never shared or sold. We follow HIPAA-compliant standards, and you have full control over your data — you can download or remove it at any time.",
  },
  {
    question: "What exactly does this test analyze?",
    answer:
      "Our test examines key genes and SNPs across 9 functional categories, including: muscle performance, recovery, nutrition, metabolism, bone health, cognition, substance metabolism, circadian rhythm, and cellular health. It provides personalized, actionable insights.",
  },
  {
    question: "How is this different from other gene or health tests?",
    answer:
      "OUnlike generic fitness or ancestry tests, this test decodes genetic factors that directly affect your performance, recovery, and nutrient absorption. You get science-backed guidance you can act on in your training routine.",
  },
  {
    question: "Can this test help me improve my training or nutrition?",
    answer:
      "Yes! Understanding your genetic predispositions allows you to train smarter, recover faster, and optimize your nutrition and supplementation for your body’s unique biology. Your report includes clear, actionable recommendations.",
  },
  {
    question: "Can I share my gene test results with my healthcare provider?",
    answer:
      "Absolutely! You can download your personalized report and share it with your doctor, nutritionist, or any healthcare professional to get tailored guidance based on your genetic insights.",
  },
];

const SinglePageFAQs = () => {
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
              <AccordionTrigger className="md:px-[24px] px-4 py-[24px] md:py-[32px] hover:bg-gray-50 hover:no-underline group">
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

export default SinglePageFAQs;
