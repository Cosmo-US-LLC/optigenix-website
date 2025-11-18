import React from "react";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import testimonialBg from "../../../assets/images/testimonial/testimonial_bg.webp";

const testimonials = [
  {
    title: "Grace's Personalized Stack",
    text: "It's pretty awesome that it's all customizable to your body using science",
    author: "Grace Cobb",
    rating: 5,
  },
  {
    title: "Grace's Personalized Stack",
    text: "It's pretty awesome that it's all customizable to your body using science",
    author: "Grace Cobb",
    rating: 5,
  },
  {
    title: "Grace's Personalized Stack",
    text: "It's pretty awesome that it's all customizable to your body using science",
    author: "Grace Cobb",
    rating: 5,
  },
  {
    title: "Grace's Personalized Stack",
    text: "It's pretty awesome that it's all customizable to your body using science",
    author: "Grace Cobb",
    rating: 5,
  },
  {
    title: "Grace's Personalized Stack",
    text: "It's pretty awesome that it's all customizable to your body using science",
    author: "Grace Cobb",
    rating: 5,
  },
];

// Reusable TestimonialCard Component
const TestimonialCard = ({ rating, title, description, author, isActive }) => {
  return (
    <div
      className={`w-full h-full rounded-[20px] p-4 md:px-[16px] md:py-[24px] flex flex-col gap-6 md:gap-[32px] border transition-all duration-300 ${
        isActive
          ? "bg-white border-white/10"
          : "border-white bg-black/20 backdrop-blur-[10px]"
      }`}
    >
      {/* Rating */}
      <div className="flex gap-0 items-center">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              isActive
                ? "text-[#0d8360] fill-[#0d8360]"
                : "text-white fill-white"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 md:gap-[20px]">
        {/* Title and Description */}
        <div className="flex flex-col gap-3 md:gap-[16px]">
          <h3
            className={`font-funnel font-bold text-[18px] md:text-[20px] leading-[1.1] ${
              isActive ? "text-[#042b24]" : "text-white"
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-inter text-[18px] md:text-[20px] leading-[1.4] md:leading-[28px] tracking-[0.4px] ${
              isActive ? "text-[#010907]" : "text-white"
            }`}
          >
            "{description}"
          </p>
        </div>

        {/* Divider and Author */}
        <div className="flex flex-col gap-3 md:gap-[16px]">
          <div
            className={`w-full h-px ${
              isActive ? "bg-[#010907]/20" : "bg-white/20"
            }`}
          />
          <p
            className={`font-inter font-bold text-[14px] md:text-[16px] leading-[1.1] tracking-[0.32px] text-center ${
              isActive ? "text-[#010907]" : "text-white"
            }`}
          >
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-[600px] md:h-[700px] flex justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={testimonialBg}
          alt="Background"
          className="object-cover absolute inset-0 w-full h-full"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>

      {/* Content */}
      <div className="flex relative z-10 flex-col h-full max-w-[1300px] mx-auto px-4 md:px-8">
        {/* Header Section */}

        <div className="flex flex-col gap-6 justify-between items-start px-4 pt-12 text-white md:flex-row md:gap-8">
          <h2 className="flex-1 font-funnel font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] md:leading-[48px] capitalize">
            Thousands of performance journeys (and counting).
          </h2>
          <p className="flex-1 font-inter text-[16px] md:text-[18px] leading-[1.4] md:leading-[26px]">
            See how real athletes and fitness enthusiasts are transforming their
            results with OptiGenix.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex flex-1 items-end pb-8 md:pb-0 md:items-center">
          <div className="px-4 w-full md:px-8">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              opts={{
                align: "center",
                loop: true,
              }}
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-4 lg:-ml-6">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className=" basis-[280px] sm:basis-[320px] md:basis-[368px]"
                  >
                    <div className="h-[280px]">
                      <TestimonialCard
                        rating={testimonial.rating}
                        title={testimonial.title}
                        description={testimonial.text}
                        author={testimonial.author}
                        isActive={current === index}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
