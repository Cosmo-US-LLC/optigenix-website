import React from "react";
import techCrunch from "../../../assets/images/trusted_partners/techcrunch.svg";
import launchBanner from "../../../assets/images/trusted_partners/launchbanner.svg";
import foundersHub from "../../../assets/images/trusted_partners/foundershub.svg";
import Sutarja from "../../../assets/images/trusted_partners/sutarjalogo.svg";

const partners = [
  {
    name: "TechCrunch",
    logo: techCrunch,
  },
  {
    name: "Launch Banner",
    logo: launchBanner,
  },
  {
    name: "Founders Hub",
    logo: foundersHub,
  },
  { name: "Sutarja", logo: Sutarja },
];

const TrustedPartners = () => {
  return (
    <section className="py-12 bg-[#000000]">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="flex flex-wrap gap-16 justify-center items-center lg:gap-28">
          {partners.map((partner, index) => (
            <div key={index} className="h-[57px] w-[220px]">
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
