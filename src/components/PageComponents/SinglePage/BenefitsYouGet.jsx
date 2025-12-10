import React, { useRef } from "react";
import frame1 from "../../../assets/images/single_test/benefits/benefits_img1.webp";
import frame2 from "../../../assets/images/single_test/benefits/benefits_img2.webp";
import frame3 from "../../../assets/images/single_test/benefits/benefits_img3.webp";
import frame4 from "../../../assets/images/single_test/benefits/benefits_img4.webp";
import frame5 from "../../../assets/images/single_test/benefits/benefits_img5.webp";
import frame6 from "../../../assets/images/single_test/benefits/benefits_img6.webp";
import frame7 from "../../../assets/images/single_test/benefits/benefits_img7.webp";
import frame8 from "../../../assets/images/single_test/benefits/benefits_img8.webp";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const cards = [
  {
    title: "Get Active",
    description: "Enhance strength, speed, endurance, and explosiveness",
    image: frame1,
  },
  {
    title: "Recover Faster",
    description: "Reduced risk of overtraining or injury",
    image: frame2,
  },
  {
    title: "Optimization",
    description: "Identify deficiencies and optimize diet for performance",
    image: frame3,
  },
  {
    title: "Cognitive Recharge",
    description: "Optimize cognitive performance, focus, and stress management",
    image: frame4,
  },
  {
    title: "Calculated Pathway",
    description:
      "Make data-driven decisions for supplements and training loads",
    image: frame5,
  },
  {
    title: "Resonate",
    description: "Plan training around circadian rhythms and natural peaks",
    image: frame6,
  },
  {
    title: "Achieve Health",
    description: "Support long-term health, resilience, and longevity",
    image: frame7,
  },
  {
    title: "Train Smarter",
    description: "Optimize workouts according to genetic potential",
    image: frame8,
  },
];

const BenefitsYouGet = () => {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#ffffff]">
      <div className="max-w-[1340px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-8">
        <h2 className="text-center text-[#010907]">Benefits You’ll Get</h2>

        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="py-2">
              {cards.map((card) => (
                <CarouselItem
                  key={card.title}
                  className="sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="relative cursor-pointer overflow-hidden rounded-[20px] bg-[#0f2c27]  h-[520px] sm:h-[360px] lg:h-[430px] flex items-end">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.85)]" />
                    <div className="flex relative flex-col gap-2 p-4 text-white">
                      <h3 className="!text-[#ffffff] !text-[24px] capitalize">
                        {card.title}
                      </h3>
                      <p className=" description !text-[#ffffff] !text-[14px] !font-[400] h-[50px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BenefitsYouGet;
