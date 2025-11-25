import React from "react";
import { Button } from "@/components/ui/button";

const Hero = ({
  title = "The first personalized supplement company\nfor athletes",
  subtitle = "Personalized supplements engineered for your performance.",
  ctaText = "Shop Now",
  backgroundImage = null,
  backgroundVideo = null,
  onCtaClick = () => {},
}) => {
  return (
    <section className="relative w-full min-h-[90vh] md:h-[700px] h-[500px] overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            className="object-cover w-full h-full"
          >
            <source src={backgroundVideo} type="video/webm" />
          </video>
        ) : (
          <img
            src={backgroundImage}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        )}

        {/* Gradient Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center">
        {/* Left-Aligned Content Block */}
        <div className="w-full max-w-[520px] md:max-w-[600px] space-y-6">
          {/* Title with Description */}
          <div className="space-y-4">
            {/* Main Heading */}
            <h1 className="font-['Funnel_Display'] font-medium text-[40px] md:text-[48px] lg:text-[48px] leading-[40px] md:leading-tight lg:leading-[58px] text-white whitespace-pre-wrap">
              {title}
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-['Inter'] font-normal text-base md:text-lg leading-[24px] text-[#D6D6D6] mt-4">
              {subtitle}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onCtaClick}
            variant="primary"
            size="lg"
            className="mt-6"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
