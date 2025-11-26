import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Moon icon component
const MoonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
  </svg>
);

const MicroInsights = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const cards = [
    {
      id: 1,
      category: "Walk and Run",
      title: "Unlock Personalized Power Control",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", // Running shoes
    },
    {
      id: 2,
      category: "Walk and Run",
      title: "Unlock Personalized Power Control",
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80", // Swimming
    },
    {
      id: 3,
      category: "Walk and Run",
      title: "Unlock Personalized Power Control",
      image:
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80", // Cycling
    },
    {
      id: 4,
      category: "Walk and Run",
      title: "Unlock Personalized Power Control",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80", // Track running
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 lg:mb-[48px]">
          <h2 className="font-['Funnel_Display'] font-bold text-[32px] lg:text-[44px] leading-[40px] lg:leading-[56px] text-[#010907] capitalize">
            Micro Insights. Major Results.
          </h2>
          <Link to="/quiz">
            <button className="bg-[#0d8360] hover:bg-[#0c704d] text-white font-['Funnel_Display'] font-semibold text-[14px] lg:text-[16px] leading-[24px] px-[20px] lg:px-[24px] py-[12px] lg:py-[14px] rounded-full transition-all duration-200 whitespace-nowrap">
              Unsure which one fits you? Take the quiz.
            </button>
          </Link>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
            {cards.map((card) => (
              <CarouselItem
                key={card.id}
                className="pl-2 md:pl-3 lg:pl-4 basis-[340px] md:basis-[380px]"
              >
                <div className="relative w-full h-[400px] lg:h-[507px] rounded-[16px] overflow-hidden group cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-[rgba(0,0,0,0.4)]" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-[20px] lg:p-[24px]">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center">
                      {/* Category Badge */}
                      <div className="backdrop-blur-[15px] bg-[rgba(246,241,233,0.1)] rounded-full px-[16px] py-[12px] lg:py-[16px] flex items-center gap-[8px]">
                        <MoonIcon />
                        <span className="font-inter text-[12px] lg:text-[14px] text-[#f8fffd]">
                          {card.category}
                        </span>
                      </div>

                      {/* Add Button */}
                      <button className="bg-[#f8fffd] hover:bg-white w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105">
                        <Plus className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-[#010907]" />
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Funnel_Display'] font-medium text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default MicroInsights;
