import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight, Plus } from "lucide-react";
import ourMostTrustedFormulasP1 from "../../../assets/images/our_most_trusted/our_most_trusted_c8.webp";
import ourMostTrustedFormulasP2 from "../../../assets/images/our_most_trusted/our_most_trusted_c9.webp";
import ourMostTrustedFormulasC3 from "../../../assets/images/our_most_trusted/our_most_trusted_c10.webp";
import ourMostTrustedFormulasC4 from "../../../assets/images/our_most_trusted/our_most_trusted_c11.webp";
import ourMostTrustedFormulasC5 from "../../../assets/images/our_most_trusted/our_most_trusted_c12.webp";
import ourMostTrustedFormulasC6 from "../../../assets/images/our_most_trusted/our_most_trusted_c13.webp";
import ourMostTrustedFormulasC7 from "../../../assets/images/our_most_trusted/our_most_trusted_c14.webp";
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
  },
  {
    name: "Sleep QuickPack™",
    description: "Built for deep sleep, calm recovery, and restorative rest",
    price: "$59.99",
    image: ourMostTrustedFormulasP2,
  },
  {
    name: "Strength QuickPack™",
    description: "Built for muscle growth, power, and resilient strength",
    price: "$59.99",
    image: ourMostTrustedFormulasC3,
  },
  {
    name: "Endurance QuickPack™",
    description:
      "Built for cellular energy, stamina, and sustained performance",
    price: "$59.99",
    image: ourMostTrustedFormulasC4,
  },
  {
    name: "Focus QuickPack™",
    description: "Built for clarity, focus, and real-world stress",
    price: "$59.99",
    image: ourMostTrustedFormulasC5,
  },
  {
    name: "Joint Health QuickPack™",
    description: "Built for mobility, flexibility, and joint comfort",
    price: "$59.99",
    image: ourMostTrustedFormulasC6,
  },
  {
    name: "Immune Health QuickPack™",
    description:
      "Built for immune response, detox support, and antioxidant defense",
    price: "$59.99",
    image: ourMostTrustedFormulasC7,
  },
];

const Products = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
        {/* Header */}
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-[#010907] capitalize max-w-[660px] text-center md:text-left w-full md:w-auto">
            Our Most Trusted Formulas
          </h2>

          {/* Desktop Navigation Buttons */}
          <div className="hidden gap-6 items-center md:flex">
            <button
              onClick={() => api?.scrollPrev()}
              className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-3 w-[48px] h-[48px] flex items-center justify-center rounded-full"
              aria-label="Scroll left"
            >
              <MoveLeft className="w-8 h-8" size={24} strokeWidth={1} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-3 w-[48px] h-[48px] flex items-center justify-center rounded-full"
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
                className="pl-3 md:pl-4 basis-[140px] md:basis-[360px]"
              >
                <div className="cursor-pointer group">
                  {/* Product Image */}
                  <div className="relative h-[234px] md:h-[360px] mb-[14px] md:mb-4 rounded-[8px] md:rounded-lg overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Plus Button */}
                    {/* <button
                      className="absolute bottom-[8px] right-[8px] bg-[#0d8360] hover:bg-[#0a6b4f] rounded-full w-[24px] md:w-[44px] h-[24px] md:h-[44px] flex items-center justify-center transition-colors"
                      aria-label="Add to cart"
                    >
                      <Plus className="w-[12px] h-[12px] text-white" />
                    </button> */}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-[8px]">
                    <h6 className=" text-[#010907] h-[40px] md:h-[26px]">
                      {product.name}
                    </h6>
                    <div className="">
                      <p className="description !text-[14px] max-w-[280px] md:h-[80px] h-[120px] text-[#010907]">
                        {product.description}
                      </p>
                      <h6 className=" text-[#010907] !font-[700]">
                        {product.price}
                      </h6>
                    </div>
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
              className="border border-[#010907] hover:bg-[#010907] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#010907] transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
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
              className="border border-[#010907] hover:bg-[#010907] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#010907] transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
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
