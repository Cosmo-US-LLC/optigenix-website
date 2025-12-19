import React, { useState } from "react";
import { Dna } from "lucide-react";
import image1 from "../../../assets/images/all_category/about_quality/about_quality_img1.webp";
import image2 from "../../../assets/images/all_category/about_quality/about_quality_img2.webp";
import image3 from "../../../assets/images/all_category/about_quality/about_quality_img3.webp";
import image4 from "../../../assets/images/all_category/about_quality/about_quality_img4.webp";
import image5 from "../../../assets/images/all_category/about_quality/about_quality_img5.webp";

import icon1 from "../../../assets/images/all_category/about_quality/icon1.svg";
import icon2 from "../../../assets/images/all_category/about_quality/icon2.svg";
import icon3 from "../../../assets/images/all_category/about_quality/icon3.svg";
import icon4 from "../../../assets/images/all_category/about_quality/icon4.svg";
import icon5 from "../../../assets/images/all_category/about_quality/icon5.svg";
import icon6 from "../../../assets/images/all_category/about_quality/icon6.svg";

const qualityFeatures = [
  {
    title: "Pharmaceutical-Grade Quality",
    description:
      "Each ingredient meets the highest purity and potency standards for real performance.",
    icon: icon1,
  },
  {
    title: "Science-Reviewed Supplements",
    description:
      "Every supplement is Ph.D-reviewed, clinically tested, and formulated for real results. ",
    icon: icon2,
  },
  {
    title: "Third-Party Tested",
    description:
      "Every batch is independently verified in ISO-accredited labs for safety, accuracy, purity, and potency. ",
    icon: icon3,
  },
  {
    title: "Premium Natural Ingredients",
    description:
      "Made with premium natural ingredients, Non-GMO, GMP-certified, and free from artificial colors and fillers.",
    icon: icon4,
  },
  {
    title: "Made in the USA",
    description:
      "Manufactured under strict quality standards to ensure reliability and consistency.",
    icon: icon5,
  },
  {
    title: "Lab-Tested Insights",
    description:
      "Your DNA and biomarkers are analyzed in CLIA-certified & CAP-accredited U.S. labs. Data is secure, encrypted, and HIPAA compliant.",
    icon: icon6,
  },
];

const QualitySection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-[40px]">
          {/* Header */}
          <div className="flex flex-col gap-[40px] items-center">
            <h2 className="!text-[#010907] text-center max-w-[1100px]">
              At OptiGenix, we believe your body deserves solutions as unique as
              you are.
            </h2>

            {/* Photo Collage - Hoverable on Desktop, Simple Grid on Mobile */}
            {/* Mobile Version - Simple Grid */}
            <div className="block w-full lg:hidden">
              <div className="grid grid-cols-2 gap-[16px]">
                {[image1, image2, image3, image4, image5]
                  .slice(0, 4)
                  .map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-[8px] overflow-hidden aspect-square"
                    >
                      <img
                        src={img}
                        alt={`OptiGenix ${idx + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Desktop Version - Hoverable Collage */}
            <div
              className="hidden lg:block relative h-[253px] w-full max-w-[1320px] cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Image 1 - Left */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
                  isHovered
                    ? "left-[-1.23%] rotate-[350.957deg]"
                    : "left-[28.08%] rotate-[354.795deg]"
                }`}
              >
                <div className="w-[240px] h-[240px] rounded-[8px] overflow-hidden">
                  <img
                    src={image1}
                    alt="OptiGenix team"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Image 2 - Second from left */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
                  isHovered
                    ? "left-[19.58%] rotate-[353.06deg]"
                    : "left-[33.52%] rotate-[355.183deg]"
                }`}
              >
                <div className="w-[240px] h-[240px] rounded-[8px] overflow-hidden">
                  <img
                    src={image2}
                    alt="OptiGenix presentation"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Image 3 - Center */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[40.76%] transition-all duration-500 ease-in-out rotate-[0deg]">
                <div className="w-[240px] h-[240px] rounded-[8px] overflow-hidden">
                  <img
                    src={image3}
                    alt="OptiGenix event"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Image 4 - Second from right */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
                  isHovered
                    ? "left-[59.82%] rotate-[8.351deg]"
                    : "left-[46.13%] rotate-[6.028deg]"
                }`}
              >
                <div className="w-[240px] h-[240px] rounded-[8px] overflow-hidden">
                  <img
                    src={image4}
                    alt="OptiGenix founders"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Image 5 - Right */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
                  isHovered
                    ? "left-[79.48%] rotate-[9.775deg]"
                    : "left-[51.92%] rotate-[6.31deg]"
                }`}
              >
                <div className="w-[240px] h-[240px] rounded-[8px] overflow-hidden">
                  <img
                    src={image5}
                    alt="OptiGenix product"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quality Features Grid */}
          <div className="flex flex-col gap-[34px]">
            {/* First Row - 3 cards */}
            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-0 justify-between">
              {qualityFeatures.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[370px] flex flex-col gap-[10px]"
                >
                  <div className="flex flex-col gap-[12px]">
                    <div className="bg-[#0d8360] rounded-full w-[48px] h-[48px] p-[8px] flex items-center justify-center">
                      <div className="h-[48px] w-[48px] bg-[#0D8360] rounded-full flex items-center justify-center">
                        <img
                          src={feature.icon}
                          alt={`${feature.title} icon`}
                          className="h-[28px] w-[28px]"
                        />
                      </div>
                    </div>
                    <h3 className="font-['Funnel_Display'] font-bold !text-[22px] leading-[24px] tracking-[-0.72px] text-[#010907]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-['Inter'] font-normal text-[18px] leading-[26px] text-[#02110e]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second Row - 3 cards */}
            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-0 justify-between">
              {qualityFeatures.slice(3, 6).map((feature, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[370px] flex flex-col gap-[10px]"
                >
                  <div className="flex flex-col gap-[12px]">
                    <div className="bg-[#0d8360] rounded-full w-[48px] h-[48px] p-[8px] flex items-center justify-center">
                      <div className="h-[48px] w-[48px] bg-[#0D8360] rounded-full flex items-center justify-center">
                        <img
                          src={feature.icon}
                          alt={`${feature.title} icon`}
                          className="h-[28px] w-[28px]"
                        />
                      </div>
                    </div>
                    <h3 className="font-['Funnel_Display'] font-bold !text-[22px] leading-[24px] tracking-[-0.72px] text-[#010907]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-['Inter'] font-normal text-[18px] leading-[26px] text-[#02110e]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
