import React from "react";

const partners = [
  {
    name: "TechCrunch",
    logo: "https://via.placeholder.com/220x57?text=TechCrunch",
  },
  {
    name: "Launch Banner",
    logo: "https://via.placeholder.com/220x57?text=LaunchBanner",
  },
  {
    name: "Founders Hub",
    logo: "https://via.placeholder.com/220x57?text=FoundersHub",
  },
  { name: "Sutarja", logo: "https://via.placeholder.com/220x57?text=Sutarja" },
];

const TrustedPartners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="flex flex-wrap gap-16 justify-center items-center opacity-60 grayscale transition-all duration-300 lg:gap-24 hover:grayscale-0 hover:opacity-100">
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
