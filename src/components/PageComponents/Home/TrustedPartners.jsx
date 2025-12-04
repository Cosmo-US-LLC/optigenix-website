import React from "react";
import Marquee from "react-fast-marquee";
import techCrunch from "../../../assets/images/trusted_partners/brand (4).webp";
import launchBanner from "../../../assets/images/trusted_partners/brand (3).webp";
import foundersHub from "../../../assets/images/trusted_partners/brand (2).webp";
import Sutarja from "../../../assets/images/trusted_partners/brand (1).webp";

const partners = [
  {
    name: "TechCrunch",
    logo: techCrunch,
  },
  {
    name: "Launch Banner",
    logo: launchBanner,
  },
  { name: "Sutarja", logo: Sutarja },
  {
    name: "Founders Hub",
    logo: foundersHub,
  },
];

const TrustedPartners = () => {
  // Duplicate partners for seamless scrolling on mobile
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-8 bg-[#042b24]">
      <div className="px-4">
        {/* Desktop: Static Grid */}
        <div className="hidden md:flex gap-6 justify-center items-center lg:gap-12 max-w-[1280px] mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-[52px] w-[222.386px] flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Marquee */}
        <div className="md:hidden">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="flex items-center"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="h-[32px] w-[122.386px] flex items-center justify-center mx-3"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
