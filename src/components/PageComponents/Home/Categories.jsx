import React from "react";

// Image URLs from Figma
const imgRecovery = "https://www.figma.com/api/mcp/asset/85243d75-1e37-457d-b608-d0e9c09d4a56";
const imgPhysicalPerformance = "https://www.figma.com/api/mcp/asset/18b6c2db-136c-4719-b9a7-d99b3937a331";
const imgMentalPerformance = "https://www.figma.com/api/mcp/asset/0a7e7cd4-6833-46f8-bc85-ad97d14ba302";
const imgArrowIcon = "https://www.figma.com/api/mcp/asset/3c27ca99-1da5-4ed6-86d6-d2f5fb758213";

const categories = [
  {
    title: "Recovery",
    description:
      "Improve focus, mental clarity, and cognitive function with nootropic blends.",
    buttonText: "Shop recovery",
    image: imgRecovery,
  },
  {
    title: "Physical Performance",
    description:
      "Enhance strength and endurance with comprehensive performance formulas.",
    buttonText: "Shop physical performance",
    image: imgPhysicalPerformance,
  },
  {
    title: "Mental Performance",
    description:
      "Targeted supplements for joint health, immune support, and quality sleep.",
    buttonText: "shop mental health",
    image: imgMentalPerformance,
  },
];

const Categories = () => {
  return (
    <section className="bg-white py-[80px] px-[32px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Title with Description */}
        <div className="flex flex-col gap-[16px] items-center text-center mb-[48px]">
          {/* Heading */}
          <h2
            className="text-[48px] leading-[56px] text-[#010907] font-medium"
            style={{ fontFamily: "Funnel Display, sans-serif" }}
          >
            Shop your Focus
          </h2>

          {/* Subtitle */}
          <p
            className="text-[16px] leading-[24px] text-[#010907] font-normal max-w-full"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Expertly formulated, personalized blends designed to support your{" "}
            <br className="hidden md:block" />
            body's unique performance goals and provide sustained results.
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
                  <div className="h-[360px] w-full rounded-lg overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Category Label */}
                  <p
                    className="absolute top-[12px] left-[9.67px] text-[16px] leading-[24px] text-[#010907] font-medium"
                    style={{ fontFamily: "Funnel Display, sans-serif" }}
                  >
                    {category.title}
                  </p>
                </div>

                {/* Description and Button Container */}
                <div className="bg-[#f7f7f7] rounded-[8px] p-[20px] flex flex-col gap-[12px] items-center w-full">
                  {/* Description */}
                  <p
                    className="text-[16px] leading-[24px] text-[#010907] text-center font-normal w-full"
                    style={{ fontFamily: "Funnel Display, sans-serif" }}
                  >
                    {category.description}
                  </p>

                  {/* Button */}
                  <button className="border-[1.5px] border-[#010907] border-solid rounded-[100px] px-[24px] py-[14px] flex gap-[10px] items-center justify-center hover:bg-[#010907] hover:text-white transition-all duration-200 group">
                    <span
                      className="text-[16px] leading-[20px] text-[#010907] capitalize font-semibold group-hover:text-white"
                      style={{ fontFamily: "Funnel Display, sans-serif" }}
                    >
                      {category.buttonText}
                    </span>
                    {/* Arrow Icon */}
                    <div className="w-[20px] h-[20px] flex items-center justify-center rotate-90">
                      <img
                        src={imgArrowIcon}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="flex flex-col gap-[10px] items-center justify-center w-full">
            <button className="bg-[#0d8360] hover:bg-[#0c704d] transition-all duration-200 rounded-[100px] px-[24px] py-[14px] flex gap-[10px] items-center justify-center">
              <span
                className="text-[16px] leading-[24px] text-white font-semibold whitespace-nowrap"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                Unsure which one fits you? Take the quiz.
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

