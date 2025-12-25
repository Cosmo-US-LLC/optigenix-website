import React, { useState } from "react";

const BackedByScience = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Science-Backed Formulas",
      content:
        "Every supplement is developed using proven research and reviewed by our in-house PhD experts. Formulated for optimal results and backed by clinical research.",
    },
    {
      title: "Premium Natural Ingredients",
      content: "",
    },
    {
      title: "Pharmaceutical-Grade Quality",
      content: "",
    },
    {
      title: "Third-Party Tested",
      content: "",
    },
    {
      title: "Made in the USA",
      content: "",
    },
    {
      title: "Money-Back Guarantee",
      content: "",
    },
  ];

  return (
    <div className="bg-white py-[50px] px-[60px] w-full">
      <div className="max-w-[1440px] mx-auto flex gap-4 items-center min-h-[720px]">
        <div className="flex-1 h-[635px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#042b24] to-[#0d8360]">
          {/* Placeholder for science image */}
          <div className="w-full h-full flex items-center justify-center text-[120px]">
            <span>🔬</span>
          </div>
        </div>

        <div className="w-[676px] bg-white border border-dashed border-[rgba(0,0,0,0.1)] rounded-3xl p-8">
          <div className="mb-5">
            <h2 className="font-funnel font-bold text-5xl leading-[56px] text-black m-0 mb-4">
              Backed by Science
            </h2>
            <p className="font-inter font-normal text-base leading-6 text-black m-0">
              Our process starts with genetic and metabolic insights and ends
              with supplements verified for purity, safety, and efficacy in
              ISO-accredited, third-party labs.
            </p>
          </div>

          <div className="flex flex-col gap-[14px] px-[17px]">
            {accordionItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">
                <button
                  className={`bg-transparent border-none w-full flex justify-between items-center cursor-pointer p-0 transition-all duration-300 ${
                    activeAccordion === index
                      ? "bg-[#adedda] p-[17px] rounded-2xl min-h-[140px] items-start"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? -1 : index)
                  }
                >
                  <span
                    className={`font-funnel font-bold text-xl leading-[26px] capitalize text-black text-left ${
                      activeAccordion === index
                        ? "text-[22px] text-[#042b24]"
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="w-[18px] h-5 text-2xl text-black flex items-center justify-center">
                    {activeAccordion === index ? "−" : "+"}
                  </span>
                </button>

                {activeAccordion === index && item.content && (
                  <div className="p-0 animate-slideDown">
                    <p className="font-inter font-normal text-base leading-6 text-[#010907] tracking-[-0.1px] m-0">
                      {item.content}
                    </p>
                  </div>
                )}

                {index < accordionItems.length - 1 && (
                  <div className="h-px bg-[rgba(0,0,0,0.1)] w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackedByScience;
