import React from "react";
import heroImage from "@/assets/images/single_test/single_hero/hero_section_img.webp";

const SingleTestHero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden rounded-bl-[30px] rounded-br-[30px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="object-cover object-center w-full h-full"
          loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[60px] flex items-center justify-start py-16 md:py-32 lg:py-[264px]">
        <div className="w-full max-w-[806px] space-y-5">
          <h1 className="text-[#ffffff]    capitalize">
            Optimize Your Health with Personalized DNA Insights
          </h1>
          <p className="!text-[#fff] description max-w-[657px]">
            Unlock actionable guidance from your genes to improve recovery,
            training, nutrition, and overall wellness, all backed by science
            HSA/FSA accepted
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleTestHero;
