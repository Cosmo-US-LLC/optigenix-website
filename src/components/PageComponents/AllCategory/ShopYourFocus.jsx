import React from "react";
import { Button } from "@/components/ui/button";
import mentalPerformanceImage from "../../../assets/images/all_category/shop_your_focus/shop_your_focus_img1.webp";
import physicalPerformanceImage from "../../../assets/images/all_category/shop_your_focus/shop_your_focus_img2.webp";
import recoveryImage from "../../../assets/images/all_category/shop_your_focus/shop_your_focus_img3.webp";

const categories = [
  {
    title: "Mental\nPerformance",
    description:
      "Enhance focus, clarity, and cognitive function with supplements carefully formulated to support your mind and mental agility.",
    image: mentalPerformanceImage,
    imagePosition: "top-[-17.75%] left-[-2.99%] w-[105.99%] h-[140.5%]",
  },
  {
    title: "Physical\nPerformance",
    description:
      "Elevate strength, endurance, and overall athletic potential with targeted supplements crafted to fuel your body's performance goals.",
    image: physicalPerformanceImage,
    imagePosition: "top-[-10.13%] left-[-59.2%] w-[203.77%] h-[120.27%]",
  },
  {
    title: "Recovery",
    description:
      "Support joint health, immune function, quality sleep, and overall recovery with personalized blends designed to help your body bounce back faster.",
    image: recoveryImage,
    imagePosition: "top-[-1.46%] left-[-7.3%] w-[173.99%] h-[102.71%]",
  },
];

const ShopYourFocus = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-[30px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-[16px] items-center text-center max-w-[832px]">
            <h2 className="capitalize font-['Funnel_Display'] font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[48px] text-[#010907]">
              Shop Your Focus
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#010907]">
              Explore expertly formulated, clinically proven supplements
              designed to support your body's unique needs and health goals
            </p>
          </div>

          {/* Category Cards */}
          <div className="flex flex-col lg:flex-row gap-[24px] w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-1 rounded-[24px] overflow-hidden relative h-[479px] flex flex-col justify-end p-[16px]"
              >
                {/* Background Image with Gradient */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                    <img
                      src={category.image}
                      alt={category.title.replace("\n", " ")}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[29%] to-black/99 rounded-[24px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-[20px] w-full">
                  <div className="flex flex-col gap-[8px] text-white">
                    <h3 className="font-['Funnel_Display'] font-medium text-[24px] leading-[32px] whitespace-pre-line">
                      {category.title}
                    </h3>
                    <p className="font-['Inter'] font-normal text-[14px] leading-[22px]">
                      {category.description}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-white text-[#010907] hover:bg-white/90 font-['Funnel_Display'] font-semibold text-[16px] px-[24px] py-[14px] rounded-full h-auto"
                    onClick={() =>
                      console.log(
                        `View ${category.title.replace("\n", " ")} Products`
                      )
                    }
                  >
                    View Products
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopYourFocus;
