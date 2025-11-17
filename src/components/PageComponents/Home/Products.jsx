import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Physical Recovery QuickPack™",
    description:
      "Built for faster recovery, muscle repair, and performance resilience",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600",
  },
  {
    name: "Sleep QuickPack™",
    description: "Built for deep sleep, calm recovery, and restorative rest",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600",
  },
  {
    name: "Strength QuickPack™",
    description: "Built for muscle growth, power, and resilient strength",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=600",
  },
  {
    name: "Endurance QuickPack™",
    description:
      "Built for cellular energy, stamina, and sustained performance",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=600",
  },
  {
    name: "Focus QuickPack™",
    description: "Built for clarity, focus, and real-world stress",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600",
  },
  {
    name: "Joint Health QuickPack™",
    description: "Built for mobility, flexibility, and joint comfort",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1556817411-58c45dd94e8c?q=80&w=600",
  },
  {
    name: "Immune Health QuickPack™",
    description:
      "Built for immune response, detox support, and antioxidant defense",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1550534791-2677533605ab?q=80&w=600",
  },
];

const Products = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 342; // card width + gap
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-['Funnel_Display'] font-semibold text-[48px] leading-[48px] text-[#010907] capitalize max-w-[660px]">
            Our Most Trusted Formulas
          </h2>

          {/* Navigation Buttons */}
          <div className="hidden gap-6 items-center md:flex">
            <button
              onClick={() => scroll("left")}
              className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-3 rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-3 rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide scroll-smooth"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] group cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative h-[360px] mb-4 rounded-lg overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-['Funnel_Display'] font-medium text-[16px] leading-[24px] text-[#010907]">
                    {product.name}
                  </h3>
                  <p className="font-['Inter'] font-normal text-[12px] leading-[20px] text-[#010907]">
                    {product.description}
                  </p>
                  <p className="font-['Funnel_Display'] font-bold text-[16px] leading-[24px] text-[#010907]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#0d8360] hover:bg-[#0a6b4f] transition-colors text-white font-['Funnel_Display'] font-semibold text-[16px] leading-[24px] px-6 py-3.5 rounded-full">
            Explore all products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
