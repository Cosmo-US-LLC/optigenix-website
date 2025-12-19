import React from "react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import shopYourFocusC1 from "../../../assets/images/shop_your_focus/shop_your_focus_c4.webp";
import shopYourFocusC2 from "../../../assets/images/shop_your_focus/shop_your_focus_c2.webp";
import shopYourFocusC3 from "../../../assets/images/shop_your_focus/shop_your_focus_c5.webp";

const categories = [
  {
    title: "Mental Performance",
    description:
      "Boost focus, clarity, and cognitive function with brain-supporting nootropics.",
    buttonText: "Shop Mental Health",
    link: "https://tryoptigenix.com/collections/mental-performance",
    image: shopYourFocusC3,
  },
  {
    title: "Physical Performance",
    description:
      "Enhance strength, endurance, and overall athletic performance with comprehensive formulas.",
    buttonText: "Shop physical performance",
    link: "https://tryoptigenix.com/collections/physical-performance",
    image: shopYourFocusC2,
  },
  {
    title: "Recovery",
    description:
      "Support muscle repair, joint health, and quality sleep with targeted recovery blends.",
    buttonText: "Shop recovery",
    link: "https://tryoptigenix.com/collections/recovery",
    image: shopYourFocusC1,
  },
];

const Categories = () => {
  return (
    <section className="bg-white md:py-[80px] py-[40px]">
      <div className="max-w-[1284px] mx-auto px-4 md:px-8">
        {/* Title with Description */}
        <div className="flex flex-col gap-[16px] items-center text-center md:mb-[48px] mb-[24px]">
          {/* Heading */}
          <h2 className="!text-[#010907]">Find Your Personalized Path</h2>

          {/* Subtitle */}
          <p className="w-full description md:max-w-[540px]">
            Goal-focused packs to support mental, physical, and recovery needs.
          </p>
        </div>

        {/* Categories Container */}
        <div className="flex flex-col gap-[32px] items-start w-full">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px] w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col gap-[16px] items-start justify-center"
              >
                {/* Image with Label Overlay */}
                <div className="relative w-full">
                  <div className="max-md:max-w-[390px] md:h-[318px] w-full rounded-lg overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Category Label */}
                  <h6 className="absolute top-2.5 left-2  md:!text-[16px] !text-[13px] !text-[#fff] px-[13px] py-1 border border-[#F8FFFD] font-medium! rounded-2xl ">
                    {category.title}
                  </h6>
                </div>

                {/* Description and Button Container */}
                <div className="bg-[#f7f7f7] rounded-[8px] p-[20px] flex flex-col gap-[12px] items-center w-full">
                  {/* Description */}
                  <p className="w-full text-center description !font-['Funnel_Display'] h-[70px]">
                    {category.description}
                  </p>

                  {/* Button */}
                  <a href={category.link} target="_blank">
                    <button className="border-[1.5px] border-[#010907] border-solid rounded-[100px] px-[24px] py-[14px] flex gap-[10px] items-center justify-center hover:bg-[#010907] font-semibold cursor-pointer hover:text-white transition-all duration-200 group">
                      <span className="text-[#010907] !font-['Funnel_Display'] capitalize group-hover:text-white btn-primary">
                        {category.buttonText}
                      </span>
                      {/* Arrow Icon */}
                      <div className="w-[20px] h-[20px] flex items-center justify-center rotate-90">
                        <MoveLeft className="text-[#010907] group-hover:text-[#ffffff] rotate-45" />
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="flex flex-col gap-[10px] items-center justify-center w-full">
            <a href="/quiz">
              <button className="btn_primary flex gap-[10px] items-center justify-center">
                Not sure which path is right for you?{" "}
                <br className="md:hidden" /> Take our quiz.
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
