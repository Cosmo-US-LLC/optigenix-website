import React from "react";
import Marquee from "react-fast-marquee";
import {
  Microscope,
  Dna,
  ShieldCheck,
  Leaf,
  TestTube,
  Flag,
  Gauge,
  PersonStanding,
  FlaskConical,
} from "lucide-react";

const uspItems = [
  { icon: Microscope, text: "Science Backed" },
  { icon: Dna, text: "DNA Personalized" },
  { icon: ShieldCheck, text: "Pharmaceutical Grade" },
  { icon: Leaf, text: "All Natural" },
  { icon: TestTube, text: "Third-Party Tested" },
  { icon: Flag, text: "Made in the USA" },
  { icon: Gauge, text: "Performance Guaranteed" },
  { icon: PersonStanding, text: "Used & Founded by athletes" },
  { icon: FlaskConical, text: "Dual-Data Precision" },
];

const USPBanner = () => {
  return (
    <div className="bg-[#ADEDDA] py-6 overflow-hidden">
      {/* Marquee: Continuous Scrolling */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="flex gap-12 items-center"
      >
        {uspItems.map((item, index) => (
          <div key={index} className="flex gap-3 items-center mx-6">
            <item.icon className="w-8 h-8 text-[#010907] flex-shrink-0" />
            <span
              className="font-semibold text-[16px] leading-[24px] text-[#010907] whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default USPBanner;
