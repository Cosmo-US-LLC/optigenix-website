import React, { useState } from "react";
import { Dna } from "lucide-react";
import image1 from "../../../assets/images/all_category/about_quality/about_quality_img1.webp";
import image2 from "../../../assets/images/all_category/about_quality/about_quality_img2.webp";
import image3 from "../../../assets/images/all_category/about_quality/about_quality_img3.webp";
import image4 from "../../../assets/images/all_category/about_quality/about_quality_img4.webp";
import image5 from "../../../assets/images/all_category/about_quality/about_quality_img5.webp";

const qualityFeatures = [
  {
    title: "Pharmaceutical-Grade Quality",
    description:
      "Each ingredient meets the highest purity and potency standards for real performance.",
  },
  {
    title: "Science-Reviewed Supplements",
    description:
      "Every supplement is PhD-reviewed, clinically tested, and formulated for real results.",
  },
  {
    title: "Third-Party Tested",
    description:
      "Every batch is independently verified in ISO-accredited labs for safety, accuracy, purity, and potency",
  },
  {
    title: "Premium Natural Ingredients",
    description:
      "Made with premium natural ingredients, Non-GMO, GMP-certified, and Free from artificial colors and fillers.",
  },
  {
    title: "Made in the USA",
    description:
      "Manufactured under strict quality standards to ensure reliability and consistency.",
  },
  {
    title: "Lab-Tested Insights",
    description:
      "Your DNA and biomarkers are analyzed in CLIA-certified & CAP-accredited U.S. labs. Data is secure, encrypted, and HIPAA compliant.",
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
            <h2 className="font-['Funnel_Display'] font-bold text-[32px] md:text-[42px] leading-[40px] md:leading-[45px] text-[#010907] text-center max-w-[1100px]">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="21"
                          viewBox="0 0 13 21"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.8333 1.88417V0H11.6667V1.75H1.16667V0H1.46641e-10V1.88417C-8.37603e-06 3.42046 0.358824 4.93552 1.0479 6.30861C1.73698 7.6817 2.73725 8.87486 3.969 9.793C4.33555 9.56152 4.71537 9.35174 5.1065 9.16475C4.02488 8.45819 3.11438 7.51939 2.44125 6.41667H10.3921C9.45564 7.95051 8.06677 9.15637 6.41667 9.86825L6.40733 9.87233C6.3385 9.9015 6.26947 9.93028 6.20025 9.95867C5.80592 10.1166 5.42655 10.297 5.06217 10.5C3.68051 11.2699 2.50425 12.3607 1.63257 13.6805C0.760896 15.0003 0.219371 16.5104 0.0536667 18.0833H1.46641e-10V21H1.16667V19.25H11.6667V21H12.8333V18.0833H12.7791C12.6363 16.7292 12.2148 15.4192 11.5412 14.2358C10.8676 13.0524 9.95639 12.0212 8.86492 11.207C8.49836 11.4385 8.11854 11.6483 7.72742 11.8352C8.80861 12.5419 9.7187 13.4807 10.3915 14.5833H2.44067C3.37726 13.0494 4.76635 11.8435 6.41667 11.1318L6.426 11.1277C6.49483 11.0985 6.56386 11.0697 6.63308 11.0413C8.4632 10.3092 10.032 9.04552 11.1371 7.41334C12.2423 5.78115 12.8331 3.8553 12.8333 1.88417ZM10.9894 15.75H1.8445C1.53218 16.4956 1.32468 17.2808 1.22792 18.0833H11.6054C11.5087 17.2808 11.3012 16.4956 10.9888 15.75M1.8445 5.25H10.9894C11.2986 4.51267 11.5086 3.72867 11.6054 2.91667H1.22792C1.32449 3.71916 1.5318 4.50441 1.84392 5.25"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-['Funnel_Display'] font-bold text-[22px] leading-[24px] tracking-[-0.72px] text-[#010907]">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="21"
                          viewBox="0 0 13 21"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.8333 1.88417V0H11.6667V1.75H1.16667V0H1.46641e-10V1.88417C-8.37603e-06 3.42046 0.358824 4.93552 1.0479 6.30861C1.73698 7.6817 2.73725 8.87486 3.969 9.793C4.33555 9.56152 4.71537 9.35174 5.1065 9.16475C4.02488 8.45819 3.11438 7.51939 2.44125 6.41667H10.3921C9.45564 7.95051 8.06677 9.15637 6.41667 9.86825L6.40733 9.87233C6.3385 9.9015 6.26947 9.93028 6.20025 9.95867C5.80592 10.1166 5.42655 10.297 5.06217 10.5C3.68051 11.2699 2.50425 12.3607 1.63257 13.6805C0.760896 15.0003 0.219371 16.5104 0.0536667 18.0833H1.46641e-10V21H1.16667V19.25H11.6667V21H12.8333V18.0833H12.7791C12.6363 16.7292 12.2148 15.4192 11.5412 14.2358C10.8676 13.0524 9.95639 12.0212 8.86492 11.207C8.49836 11.4385 8.11854 11.6483 7.72742 11.8352C8.80861 12.5419 9.7187 13.4807 10.3915 14.5833H2.44067C3.37726 13.0494 4.76635 11.8435 6.41667 11.1318L6.426 11.1277C6.49483 11.0985 6.56386 11.0697 6.63308 11.0413C8.4632 10.3092 10.032 9.04552 11.1371 7.41334C12.2423 5.78115 12.8331 3.8553 12.8333 1.88417ZM10.9894 15.75H1.8445C1.53218 16.4956 1.32468 17.2808 1.22792 18.0833H11.6054C11.5087 17.2808 11.3012 16.4956 10.9888 15.75M1.8445 5.25H10.9894C11.2986 4.51267 11.5086 3.72867 11.6054 2.91667H1.22792C1.32449 3.71916 1.5318 4.50441 1.84392 5.25"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-['Funnel_Display'] font-bold text-[22px] leading-[24px] tracking-[-0.72px] text-[#010907]">
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
