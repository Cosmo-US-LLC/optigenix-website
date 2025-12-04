import React from "react";
import { Button } from "@/components/ui/button";

const Hero = ({
  title = "The first biologically personalized supplement company built by athletes, for athletes",
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
            <source src={backgroundVideo} type="video/mp4" />
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
        <div className="w-full max-w-[520px] md:max-w-[640px] space-y-6">
          <div className="space-y-4">
            <h1 className="text-white">{title}</h1>

            <p className="description !text-[#D6D6D6] mt-4">{subtitle}</p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onCtaClick}
            variant="primary"
            size="lg"
            className="btn-primary"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
