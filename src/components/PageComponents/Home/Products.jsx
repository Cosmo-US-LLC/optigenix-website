import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight, Plus, ExternalLink } from "lucide-react";
import ourMostTrustedFormulasP1 from "../../../assets/images/our_most_trusted/our_most_trusted_c8.webp";
import ourMostTrustedFormulasP2 from "../../../assets/images/our_most_trusted/our_most_trusted_c9.webp";
import ourMostTrustedFormulasC3 from "../../../assets/images/our_most_trusted/our_most_trusted_c10.webp";
import ourMostTrustedFormulasC4 from "../../../assets/images/our_most_trusted/our_most_trusted_c11.webp";
import ourMostTrustedFormulasC5 from "../../../assets/images/our_most_trusted/our_most_trusted_c12.webp";
import ourMostTrustedFormulasC6 from "../../../assets/images/our_most_trusted/our_most_trusted_c13.webp";
import ourMostTrustedFormulasC7 from "../../../assets/images/our_most_trusted/our_most_trusted_c14.webp";

import quickPackIcon1 from "../../../assets/images/our_most_trusted/quick_pack_1.svg";
import quickPackIcon2 from "../../../assets/images/our_most_trusted/quick_pack_2.svg";
import quickPackIcon3 from "../../../assets/images/our_most_trusted/quick_pack_3.svg";
import quickPackIcon4 from "../../../assets/images/our_most_trusted/quick_pack_4.svg";
import quickPackIcon5 from "../../../assets/images/our_most_trusted/quick_pack_5.svg";
import quickPackIcon6 from "../../../assets/images/our_most_trusted/quick_pack_6.svg";
import quickPackIcon7 from "../../../assets/images/our_most_trusted/quick_pack_7.svg";

import quickPackHover1 from "../../../assets/images/our_most_trusted/quick_packs_hover_8.webp";
import quickPackHover2 from "../../../assets/images/our_most_trusted/quick_packs_hover_9.webp";
import quickPackHover3 from "../../../assets/images/our_most_trusted/quick_packs_hover_10.webp";
import quickPackHover4 from "../../../assets/images/our_most_trusted/quick_packs_hover_11.webp";
import quickPackHover5 from "../../../assets/images/our_most_trusted/quick_packs_hover_12.webp";
import quickPackHover6 from "../../../assets/images/our_most_trusted/quick_packs_hover_13.webp";
import quickPackHover7 from "../../../assets/images/our_most_trusted/quick_packs_hover_14.webp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const products = [
  {
    name: "Physical Recovery QuickPack™",
    description:
      "Built for faster recovery, muscle repair, and performance resilience",
    price: "$59.99",
    image: ourMostTrustedFormulasP1,
    icon: quickPackIcon1,
    iconBgColor: "rgba(246, 241, 233, 0.50)",
    iconBorderColor: "rgba(173, 138, 48, 0.30)",
    hoverImage: quickPackHover1,
    hoverText: "Repair,\nRecharge,\nRecover",
    link: "https://tryoptigenix.com/products/physical-recovery-quickpack",
  },
  {
    name: "Sleep QuickPack™",
    description: "Built for deep sleep, calm recovery, and restorative rest",
    price: "$59.99",
    image: ourMostTrustedFormulasP2,
    icon: quickPackIcon2,
    iconBgColor: "rgba(159, 79, 139, 0.10)",
    iconBorderColor: "rgba(95, 21, 74, 0.20)",
    hoverImage: quickPackHover2,
    hoverText: "Rest Deeply,\n Recover Fully",
    link: "https://tryoptigenix.com/products/sleep-quickpack",
  },
  {
    name: "Strength QuickPack™",
    description: "Built for muscle growth, power, and resilient strength",
    price: "$59.99",
    image: ourMostTrustedFormulasC3,
    icon: quickPackIcon3,
    iconBgColor: "rgba(42, 114, 139, 0.20)",
    iconBorderColor: "rgba(90, 181, 199, 0.10)",
    hoverImage: quickPackHover3,
    hoverText: "Build Strength & Recover Stronger",
    link: "https://tryoptigenix.com/products/strength-quickpack",
  },
  {
    name: "Endurance QuickPack™",
    description:
      "Built for cellular energy, stamina, and sustained performance",
    price: "$59.99",
    image: ourMostTrustedFormulasC4,
    icon: quickPackIcon4,
    iconBgColor: "rgba(32, 112, 29, 0.20)",
    iconBorderColor: "rgba(41, 147, 41, 0.10)",
    hoverImage: quickPackHover4,
    hoverText: "Push Your Limits & Go the Distance",
    link: "https://tryoptigenix.com/products/endurance-quickpack",
  },
  {
    name: "Focus QuickPack™",
    description: "Built for clarity, focus, and real-world stress",
    price: "$59.99",
    image: ourMostTrustedFormulasC5,
    icon: quickPackIcon5,
    iconBgColor: "rgba(51, 107, 141, 0.20)",
    iconBorderColor: "rgba(30, 123, 180, 0.10)",
    hoverImage: quickPackHover5,
    hoverText: "Sharpen Your Focus & Boost Mental Stamina",
    link: "https://tryoptigenix.com/products/focus-quickpack",
  },
  {
    name: "Joint Health QuickPack™",
    description: "Built for mobility, flexibility, and joint comfort",
    price: "$59.99",
    image: ourMostTrustedFormulasC6,
    icon: quickPackIcon6,
    iconBgColor: "rgba(205, 68, 61, 0.20)",
    iconBorderColor: "rgba(186, 32, 14, 0.10)",
    hoverImage: quickPackHover6,
    hoverText: "Keep Your Joints in Motion",
    link: "https://tryoptigenix.com/products/joint-health-quickpack",
  },
  {
    name: "Immune Health QuickPack™",
    description:
      "Built for immune response, detox support, and antioxidant defense",
    price: "$59.99",
    image: ourMostTrustedFormulasC7,
    icon: quickPackIcon7,
    iconBgColor: "rgba(176, 87, 35, 0.20)",
    iconBorderColor: "rgba(233, 96, 0, 0.10)",
    hoverImage: quickPackHover7,
    hoverText: "Strengthen Your Defenses",
    link: "https://tryoptigenix.com/products/immunne-health",
  },
];

const Products = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-[#f7f7f7] md:py-20 py-12">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#010907] capitalize w-full md:max-w-[760px] text-center md:text-left w-full md:w-auto">
              Our Most Trusted QuickPacks
            </h2>

            <p className="description text-[#010907]">
              Ready-to-go formulas trusted by athletes.
            </p>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden gap-6 items-center md:flex">
            <button
              onClick={() => api?.scrollPrev()}
              className="border border-[#010907] cursor-pointer hover:bg-[#010907] hover:text-white transition-colors p-3 w-[48px] h-[48px] flex items-center justify-center rounded-full"
              aria-label="Scroll left"
            >
              <MoveLeft className="w-8 h-8" size={24} strokeWidth={1} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="border border-[#010907] cursor-pointer hover:bg-[#010907] hover:text-white transition-colors p-3 w-[48px] h-[48px] flex items-center justify-center rounded-full"
              aria-label="Scroll right"
            >
              <MoveLeft
                className="w-8 h-8 rotate-180"
                size={24}
                strokeWidth={1}
              />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-3 md:pl-4 basis-[300px] md:basis-[360px]"
              >
                <div
                  className="cursor-pointer group"
                  onClick={() => {
                    // Only allow click-to-toggle on mobile
                    if (isMobile) {
                      setActiveCard((prev) => (prev === index ? null : index));
                    } else {
                      window.open(product.link, "_blank");
                    }
                  }}
                >
                  {/* Product Image */}
                  <div className="relative h-[234px] md:h-[360px] mb-[14px] md:mb-4 rounded-[8px] md:rounded-lg overflow-hidden bg-white">
                    {/* Default image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover w-full h-full transition-opacity duration-300 ${
                        isMobile && activeCard === index
                          ? "opacity-0"
                          : "opacity-100 md:group-hover:opacity-0"
                      }`}
                    />
                    {/* Hover image - simple fade in */}
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} details`}
                      className={`object-cover absolute z-10 inset-0 w-full h-full transition-opacity duration-300 ${
                        isMobile && activeCard === index
                          ? "opacity-100"
                          : "opacity-0 md:group-hover:opacity-100"
                      }`}
                      loading="lazy"
                    />
                    {/* Hover overlay with text (top) */}
                    <div
                      className={`flex absolute inset-0 z-20 items-start p-4 to-transparent transition-opacity md:p-5 duration-300 bg-linear-to-b ${
                        isMobile && activeCard === index
                          ? "opacity-100"
                          : "opacity-0 md:group-hover:opacity-100"
                      }`}
                    >
                      <p className="text-white text-[14px] font-[500] md:text-[30px] leading-[20px] md:leading-[27px] font-['Funnel_Display'] max-w-[260px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] whitespace-pre-line">
                        {product.hoverText || product.description}
                      </p>
                    </div>
                    {/* Icon in top-left corner */}
                    <div
                      className="absolute top-[10px] left-[10px] backdrop-blur-[22.5px] border border-solid flex items-center justify-center p-2 rounded-full"
                      style={{
                        backgroundColor: product.iconBgColor,
                        borderColor: product.iconBorderColor,
                      }}
                    >
                      <img src={product.icon} alt="" className="w-6 h-6" />
                    </div>
                    {/* Plus Button */}
                    {/* <button
                      className="absolute bottom-[8px] right-[8px] bg-[#0d8360] hover:bg-[#0a6b4f] rounded-full w-[24px] md:w-[44px] h-[24px] md:h-[44px] flex items-center justify-center transition-colors"
                      aria-label="Add to cart"
                    >
                      <Plus className="w-[12px] h-[12px] text-white" />
                    </button> */}
                  </div>

                  {/* Product Info */}
                  <div>
                    <a href={product.link} target="_blank">
                      <div className="space-y-[8px]">
                        <h6 className="flex items-center gap-2 text-[#010907] h-[40px] md:h-[26px]">
                          {product.name}
                          <ExternalLink
                            className="w-4 h-4 md:w-3.5 md:h-3.5 shrink-0 text-[#0D8360]"
                            strokeWidth={1.5}
                          />
                        </h6>
                        <div className="">
                          <p className="description !text-[14px] max-w-[280px] md:h-[80px] h-[90px] text-[#010907]">
                            {product.description}
                          </p>
                          {/* <h6 className=" text-[#010907] !font-[700]">
                            {product.price}
                          </h6> */}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center justify-center gap-[20px] mt-[32px]">
            {/* Previous Button */}
            <button
              onClick={() => api?.scrollPrev()}
              disabled={current === 1}
              className="border border-[#010907] cursor-pointer hover:bg-[#010907] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#010907] transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
              aria-label="Previous"
            >
              <MoveLeft className="w-8 h-8" size={24} strokeWidth={1} />
            </button>

            {/* Progress Dots */}
            <div className="flex gap-[8px] items-center">
              {Array.from({ length: Math.ceil(count / 2) }).map((_, index) => (
                <div
                  key={index}
                  className={`h-[8px] rounded-full transition-all ${
                    Math.floor((current - 1) / 2) === index
                      ? "w-[32px] bg-[#0d8360]"
                      : "w-[8px] bg-[#010907]/20"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => api?.scrollNext()}
              disabled={current === count}
              className="border border-[#010907] cursor-pointer hover:bg-[#010907] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#010907] transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
              aria-label="Next"
            >
              <MoveRight className="w-8 h-8" size={24} strokeWidth={1} />
            </button>
          </div>
        </Carousel>

        {/* CTA Button */}
        {/* <div className="flex justify-center mt-[32px] md:mt-12">
          <button className="bg-[#0d8360] hover:bg-[#0a6b4f] transition-colors text-white font-['Funnel_Display'] font-semibold text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] px-6 py-[14px] md:py-3.5 rounded-full">
            Explore all products
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Products;
