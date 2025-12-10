import React from "react";
import heroImage from "@/assets/images/single_test/single_hero/hero_section_img.webp";
import { Button } from "@/components/ui/button";

const SingleTestHero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden ">
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
      <div className="relative h-[calc(100vh-6rem)] max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-start py-16 md:py-32 lg:py-[264px]">
        <div className="w-full max-w-[766px] space-y-5 md:pb-18">
          <h1 className="text-[#ffffff]    capitalize">
            Optimize Your Health & Performance with Gene Insights
          </h1>
          <p className="!text-[#fff] description max-w-[657px]">
            Unlock actionable guidance from your genes to improve recovery,
            training, nutrition, and overall wellness. Backed by science.
            HSA/FSA accepted.
          </p>
          <button
            className="btn_primary"
            onClick={() =>
              window.open(
                "https://buy.stripe.com/7sY7sM0arfBlgMW77gf3a02",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Order Your Test
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleTestHero;
