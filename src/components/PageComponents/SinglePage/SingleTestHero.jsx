import React from "react";
import heroImage from "@/assets/images/single_test/single_hero/hero_section_img.webp";
import { Button } from "@/components/ui/button";

const SingleTestHero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden rounded-bl-[30px] rounded-br-[30px]">
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
        <div className="w-full max-w-[766px] space-y-5">
          <h1 className="text-[#ffffff]    capitalize">
            Optimize Your Health & Performance with Gene Insights
          </h1>
          <p className="!text-[#fff] description max-w-[657px]">
            Unlock actionable guidance from your genes to improve recovery,
            training, nutrition, and overall wellness. Backed by science.
            HSA/FSA accepted.
          </p>
          <Button variant="primary" size="lg">
            Order Your Trust
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SingleTestHero;
