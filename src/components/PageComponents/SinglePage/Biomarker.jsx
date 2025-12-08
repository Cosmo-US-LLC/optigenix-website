import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import iconImage from "@/assets/images/single_test/bio/bio_icon.svg";
import bioImage1 from "@/assets/images/single_test/bio/bio_img1.webp";
import bioImage2 from "@/assets/images/single_test/bio/bio_img2.webp";
import bioImage3 from "@/assets/images/single_test/bio/bio_img3.webp";
import bioImage4 from "@/assets/images/single_test/bio/bio_img4.webp";

const Biomarker = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
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

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const biomarkers = [
    {
      id: 1,
      title: "Muscle Performance & Fiber Type",
      description:
        "Explore your natural power, endurance, and muscle potential.",
      categories: [
        "Resistance training adaptation",
        "Explosive power",
        "Strength potential",
        "Fast-twitch vs slow-twitch",
      ],
      bgColor: "rgba(255,132,132,0.16)",
      image: bioImage1,
      imageFlipped: true,
    },
    {
      id: 2,
      title: "Recovery & Injury Risk",
      description: "Understand your body's resilience and recovery needs.",
      categories: [
        "Tissue robustness",
        "Inflammation response",
        "Recovery efficiency",
        "Muscle damage susceptibility",
      ],
      bgColor: "rgba(19, 111, 203, 0.1)",
      image: bioImage2,
    },
    {
      id: 3,
      title: "Nutrition & Vitamin Absorption",
      description: "See how your body processes key nutrients and vitamins.",
      categories: [
        "Vitamin A, B12, C, D",
        "Iron",
        "Choline",
        "Omega-3 & Omega-6 Fatty Acids",
      ],
      bgColor: "rgba(254, 241, 91, 0.1)",
      image: bioImage3,
    },
    {
      id: 4,
      title: "Metabolism & Body Composition",
      description: "Insights to optimize energy use and body composition.",
      categories: [
        "Fat metabolism",
        "Energy efficiency",
        "Weight tendencies",
        "Omega-3 & Omega-6 Fatty Acids",
      ],
      bgColor: "rgba(66, 255, 76, 0.1)",
      image: bioImage4,
    },
  ];

  return (
    <section className="py-12 bg-white md:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 items-center mb-10 text-center md:mb-12">
          <h2 className="text-[#042b24] tracking-[-0.72px]">
            Precision Insights from Every Biomarker
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {biomarkers.map((biomarker) => (
              <CarouselItem
                key={biomarker.id}
                className="pl-4 md:pl-6 basis-full lg:basis-auto"
              >
                <div
                  className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center px-6 lg:px-6 py-8 lg:py-12 rounded-[16px] min-h-[364px]"
                  style={{ backgroundColor: biomarker.bgColor }}
                >
                  {/* Left: Content */}
                  <div className="flex flex-col gap-12 w-full lg:w-[580px]">
                    {/* Heading with Icon */}
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-3 items-start">
                        <img
                          src={iconImage}
                          alt=""
                          className="w-[41px] h-[41px] object-contain shrink-0"
                        />
                        <h3 className="font-['Funnel_Display'] font-light text-[22px] md:text-[26px] leading-[32px] md:leading-[40px] text-[#010907] tracking-[-0.72px]">
                          {biomarker.title}
                        </h3>
                      </div>
                      <p className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#02110e]">
                        {biomarker.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-[1.5px] w-full bg-transparent" />

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-3">
                      {biomarker.categories.map((category, idx) => (
                        <span
                          key={idx}
                          className="backdrop-blur-[15px] border border-[#d7d7d7] md:border-[#dedede] px-4 py-2 rounded-full font-['Inter'] font-light text-[12px] md:text-[14px] text-[#010907]"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div
                    className={`relative h-[250px] md:h-[300px] rounded-[16px] w-full lg:w-[400px] shrink-0 ${
                      biomarker.imageFlipped ? "scale-x-[-1]" : ""
                    }`}
                  >
                    <img
                      src={biomarker.image}
                      alt={biomarker.title}
                      className="object-cover rounded-[16px] w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Progress Bar */}
        <div className="flex justify-center mt-8">
          <div className="bg-[#f1f1f1] h-2 rounded-full w-full max-w-[590px] relative overflow-hidden">
            <div
              className="bg-[#0d8360] h-full rounded-full transition-all duration-300"
              style={{
                width: count > 0 ? `${(current / count) * 100}%` : "5%",
              }}
            />
          </div>
        </div>

        {/* Navigation Controls */}
        {/* <div className="flex gap-5 justify-center items-center mt-8">
          <button
            onClick={scrollPrev}
            className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
            aria-label="Previous"
          >
            <MoveLeft className="w-6 h-6" strokeWidth={1} />
          </button>

          
          <div className="flex gap-2 items-center">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  current - 1 === index
                    ? "w-12 bg-[#0d8360]"
                    : "w-2 bg-[#010907]/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
            aria-label="Next"
          >
            <MoveRight className="w-6 h-6" strokeWidth={1} />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Biomarker;
