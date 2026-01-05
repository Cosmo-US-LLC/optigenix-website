import React from "react";
import { useNavigate } from "react-router-dom";
import shopByFocusImage from "../../../assets/images/all_category/category_hero/category_hero_img1.webp";
import personalizedSolutionsImage2 from "../../../assets/images/all_category/category_hero/category_hero_img3.webp";

// Temporary image URLs from Figma - you'll need to replace these with your actual images
// const shopByFocusImage =
//   "https://www.figma.com/api/mcp/asset/6bd580ee-bbe1-4748-9d80-dfd107f973ee";

const CategoryHero = () => {
  const navigate = useNavigate();

  // Helper function to scroll to element with offset above
  const scrollToElementWithOffset = (elementId, offset = 80) => {
    const target = document.getElementById(elementId);
    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleExploreGoals = () => {
    scrollToElementWithOffset("shop-your-focus", 80);
  };

  const handleSeePersonalized = () => {
    scrollToElementWithOffset("personalized-solutions", 70);
  };
  return (
    <section className="bg-[#042b24] py-[60px] ">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-[40px]">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center max-w-[1000px] mx-auto">
            <h2 className="!text-[#f8fffd] text-center">
              Find the Right Path to Better Health
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col lg:flex-row gap-[24px] w-full">
            {/* Left Card - Shop by Focus */}
            <div className="flex-1 lg:min-w-0 rounded-[16px] overflow-hidden relative h-[428px] flex flex-col justify-end p-[16px]">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="overflow-hidden absolute inset-0">
                  <img
                    src={shopByFocusImage}
                    alt="Shop by Focus"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col max-md:justify-end gap-[16px] max-md:min-h-[250px]">
                <p className="description !text-[#F8FFFD] max-w-[320px]">
                  Find supplements designed to target your specific performance
                  and wellness goals.
                </p>
                <button
                  className="btn_secondary max-w-[160px] w-full"
                  onClick={handleExploreGoals}
                >
                  Explore Goals
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 lg:min-w-0 flex flex-col gap-[16px]">
              {/* Top Right Card - See Personalized Solutions */}
              <div className="rounded-[16px] overflow-hidden relative min-h-[234px] flex flex-col justify-end px-[16px] py-[24px]">
                {/* Background with multiple layers */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="overflow-hidden absolute inset-0">
                    <img
                      src={personalizedSolutionsImage2}
                      className="min-h-[234px] object-cover"
                      alt=""
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-[16px] ">
                  <p className="description !text-[#F8FFFD] max-w-[240px]">
                    Get recommendations backed by your Gene and blood tests.
                  </p>

                  <button
                    className="btn_secondary max-w-[260px] w-full"
                    onClick={handleSeePersonalized}
                  >
                    See Personalized Solutions
                  </button>
                </div>
              </div>

              {/* Bottom Right Card - Not sure where to start */}
              <div className="bg-[#2b7a6c] rounded-[16px] p-[24px] md:h-[175px] flex flex-col md:flex-row md:items-center items-start gap-[16px]">
                <div className="flex-1 flex flex-col gap-[6px]">
                  <h3 className="!text-[#fff] !font-[700] !leading-[31px] max-w-[286px]">
                    Not sure where to start?
                  </h3>
                  <p className="font-['Inter'] font-normal text-[16px] leading-[22px] text-[#f8fffd] max-w-[344px]">
                    Get a quick suggestion and customize your routine in under a
                    minute.
                  </p>
                </div>

                <button
                  className="btn_secondary max-w-[160px] w-full"
                  onClick={() => navigate("/quiz")}
                >
                  Take the Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
