import React from "react";
import whyImage from "../../../assets/images/about/about_mission/about_mission_img1.webp";
import missionImage from "../../../assets/images/about/about_mission/about_mission_img2.webp";
import visionImage from "../../../assets/images/about/about_mission/about_mission_img3.webp";

const sections = [
  {
    title: "Our Why",
    description: [
      "We created OptiGenix with one goal in mind: to help athletes and active individuals perform at their highest level with personalized, science-driven solutions. Understanding your body is not just about performance; it is about living your best life. By taking a data-driven approach, we optimize every aspect of your health, from energy and sleep to recovery and focus.",
      "We are passionate about helping you understand your body better so you can train smarter, recover faster, and feel your best.",
    ],
    image: whyImage,
    imageClass: "object-cover",
  },
  {
    title: "Mission Statement",
    description: [
      "Our mission is to transform the way athletes and active individuals approach supplementation and performance. Using personalized, data-driven insights, we create high-quality, scientifically-backed supplements designed to meet your unique needs and help you reach your peak potential.",
    ],
    image: missionImage,
    imageClass: "absolute top-[-33.82%] left-0 w-full h-[190.98%]",
  },
  {
    title: "Vision Statement",
    description: [
      "At OptiGenix, our vision is to create a world where everyone has the tools and knowledge to perform at their best. We aim to make personalized health and performance optimization accessible to all, powered by data and grounded in science.",
    ],
    image: visionImage,
    imageClass: "absolute top-[-37.01%] left-[-26.89%] w-[141.48%] h-[151.99%]",
  },
];

const AboutMissionVision = () => {
  return (
    <section className="bg-[#010907] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-[48px]">
          {/* Main Heading */}
          <div className="max-w-[800px]">
            <h2 className="capitalize font-['Funnel_Display'] font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[48px] text-white">
              How Physical Performance works and help you to booster your
              perfoformance
            </h2>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-[24px]">
            {sections.map((section, index) => (
              <div key={index} className="bg-[#010907] w-full">
                <div className="flex flex-col lg:flex-row gap-[48px] items-center w-full">
                  {/* Left - Image */}
                  <div className="w-full lg:w-[600px] py-[16px] md:py-[48px]">
                    <div className="relative h-[300px] md:h-[377px] w-full rounded-[8px] overflow-hidden">
                      <img src={section.image} alt={section.title} />
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-[16px] text-white">
                      <h3 className="capitalize font-['Funnel_Display'] font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[56px]">
                        {section.title}
                      </h3>
                      <div className="font-['Inter'] font-normal text-[16px] leading-[24px] space-y-[16px]">
                        {section.description.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
