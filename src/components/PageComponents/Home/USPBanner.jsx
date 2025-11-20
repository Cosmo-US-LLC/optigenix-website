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

import science from "../../../assets/images/usp_banner/science.svg";
import dna from "../../../assets/images/usp_banner/dna_logo.svg";
import pharma from "../../../assets/images/usp_banner/pharma_logo.svg";
import allNaturalIcon from "../../../assets/images/usp_banner/natural_logo.svg";
import thirdPartyTestedIcon from "../../../assets/images/usp_banner/thrid-party_logo.svg";
import usa from "../../../assets/images/usp_banner/usa_logo.svg";
import performance from "../../../assets/images/usp_banner/performance_logo.svg";
import atheletes from "../../../assets/images/usp_banner/atheletes_logo.svg";
import tubeTest from "../../../assets/images/usp_banner/tube_logo.svg";
import inHouse from "../../../assets/images/usp_banner/in_house_logo.svg";

const uspItems = [
  { icon: science, text: "Science Backed" },
  { icon: dna, text: "DNA Personalized" },
  { icon: pharma, text: "Pharmaceutical Grade" },
  { icon: allNaturalIcon, text: "All Natural" },
  { icon: thirdPartyTestedIcon, text: "Third-Party Tested" },
  { icon: usa, text: "Made in the USA" },
  { icon: performance, text: "Performance Guaranteed" },
  { icon: atheletes, text: "Used & Founded by athletes" },
  { icon: tubeTest, text: "Dual-Data Precision" },
  { icon: inHouse, text: "In-House PhD researchers & registered dietitians" },
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
            <img
              src={item.icon}
              alt={item.text}
              className="flex-shrink-0 w-8 h-8"
            />
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
