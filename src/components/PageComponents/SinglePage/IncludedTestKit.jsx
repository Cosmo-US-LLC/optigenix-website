import React from "react";
import icon1 from "@/assets/images/single_test/kit/icon1.svg";
import icon2 from "@/assets/images/single_test/kit/icon2.svg";
import icon3 from "@/assets/images/single_test/kit/icon3.svg";
import icon4 from "@/assets/images/single_test/kit/icon4.svg";
import icon5 from "@/assets/images/single_test/kit/icon5.svg";
import icon6 from "@/assets/images/single_test/kit/icon6.svg";

const items = [
  {
    title: "Collection Swab or Tube",
    desc: "Easy-to-use cheek swab or saliva tube to safely collect your DNA sample.",
    icon: icon1,
    accent: false,
  },
  {
    title: "Instructions Guide",
    desc: "Step-by-step directions to ensure your sample is collected correctly.",
    icon: icon2,
    accent: false,
  },
  {
    title: "Barcode / ID Label",
    desc: "Unique identifier linking your sample to your account.",
    icon: icon3,
    accent: true,
  },
  {
    title: "Prepaid Return Envelope",
    desc: "Convenient, pre-addressed packaging to send your sample back to the lab.",
    icon: icon4,
    accent: false,
  },
  {
    title: "Safety / Biohazard Bag",
    desc: "Keeps your sample protected during shipping.",
    icon: icon5,
    accent: false,
  },
  {
    title: "Online Kit Registration",
    desc: "Quick registration to access results online once processed.",
    icon: icon6,
    accent: false,
  },
];

const IncludedTestKit = () => {
  return (
    <section className="py-12 bg-white md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-5 items-center mb-10 text-center md:mb-8">
          <h2 className="text-[#010907] ">What’s Included In Your Test Kit</h2>
          <p className=" description !text-[#010907]">
            Everything you need to unlock your genetic insights
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border transition-colors duration-200 ${
                item.accent ? "border-2 " : "border-[#dedede] border-2"
              } hover:border-[#0d8360] rounded-[16px] p-6 md:p-8 flex flex-col items-center text-center gap-5 shadow-sm`}
            >
              <div className="bg-[#0d8360] rounded-full w-[79px] h-[79px] flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[44px] h-[44px]"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h5 className=" !text-[#010907] !font-[700]">{item.title}</h5>
                <p className="description !text-[#02110e]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedTestKit;
