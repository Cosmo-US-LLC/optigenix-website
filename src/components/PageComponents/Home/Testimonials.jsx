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
    title: "Adrian Weinberg",
    text: "This is my first time trying OptiGenix. my friend recommended it after seeing her results. The gene-based supplements gave me more energy than I’ve had in years.",
    author: "Water Polo",
    rating: 5,
  },
  {
    title: "Christopher Middleton-Pearson",
    text: "Focus at work was impossible for me. The supplements matched to my gene test have completely improved my mental clarity.",
    author: "Distance runner",
    rating: 5,
  },
  {
    title: "Sanil Sharma",
    text: "I always struggled with stress and mood swings. After following my personalized plan, I finally feel calmer and more balanced.",
    author: "Fencer",
    rating: 5,
  },
  {
    title: "Jenny Wilson",
    text: "I didn’t realize my vitamin deficiencies were holding me back in recovery. Now, after a few weeks on my tailored supplements, I feel noticeably stronger",
    author: "Fencer",
    rating: 5,
  },
  {
    title: "Jane Cooper",
    text: "Before flu season, I wanted to give my immunity a boost. The quiz recommended exactly what I needed, and I’ve been feeling stronger and more resilient.",
    author: "Water Polo",
    rating: 5,
  },
  {
    title: "Wade Warren",
    text: "I took the quiz on a boy friend’s suggestion, curious if it could help. The plan targeted my inflammation, and now I feel lighter and healthier every day",
    author: "Fencer",
    rating: 5,
  },
  {
    title: "Brooklyn Simmons",
    text: "Sleep and recovery were always my weak spots. After trying these supplements, I wake up refreshed and ready to tackle the day. it’s made a huge difference.",
    author: "Distance runner",
    rating: 5,
  },
  {
    title: "Esther Howard",
    text: "I wanted to break through my workout plateaus. These performance-focused supplements helped me hit new personal bests I didn’t think were possible.",
    author: "Fencer",
    rating: 5,
  },
];

// Reusable TestimonialCard Component
const TestimonialCard = ({ rating, title, description, author, isActive }) => {
  return (
    <div
      className={`w-full h-full rounded-[20px] px-4 py-[16px] lg:px-[16px] lg:py-[24px] flex flex-col gap-6 lg:gap-[32px] border transition-all duration-500 ${
        isActive
          ? "bg-white opacity-100 scale-100 border-white/10"
          : "border-white opacity-70 scale-90 bg-black/20 backdrop-blur-[10px]"
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
      <div className="flex flex-col gap-4 lg:gap-[20px]">
        {/* Title and Description */}
        <div className="flex flex-col gap-3 lg:gap-[8px] h-[160px]">
          <h3
            className={`font-['Funnel_Display'] font-bold !text-[18px] lg:!text-[20px] leading-[20px] lg:leading-[22px] ${
              isActive ? "!text-[#042b24]" : "!text-white"
            }`}
          >
            {title}
          </h3>
          <p
            className={` description tracking-[0.4px] ${
              isActive ? "!text-[#000]" : "!text-white"
            }`}
          >
            "{description}"
          </p>
        </div>

        {/* Divider and Author */}
        <div className="flex flex-col justify-center items-center h-[40px]   gap-3 lg:gap-[16px]">
          <div
            className={`w-full h-px ${
              isActive ? "bg-[#010907]/20" : "bg-white/20"
            }`}
          />
          <p
            className={`font-['Inter'] font-bold text-[14px] lg:text-[16px] leading-[16px] lg:leading-[18px] tracking-[0.32px] text-center ${
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
    <section className="relative md:h-[700px] h-[600px] flex justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={testimonialBg}
          alt="Background"
          className="object-cover absolute inset-0 w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex relative z-10 flex-col h-full md:max-w-[1300px] w-full mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 justify-between items-start pt-[42px] lg:pt-12 text-white lg:flex-col lg:gap-8">
          <h2 className="flex-1 max-w-[700px] !text-[#fff] !text-[30px] md:!text-[48px] !leading-[30px] md:!leading-[56px]  text-center md:text-left   capitalize">
            Thousands of performance journeys (and counting).
          </h2>
          <p className="flex-1     max-w-[600px]    max-md:text-center description !text-[#fff]">
            See how real athletes and fitness enthusiasts are transforming their
            results with OptiGenix.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex flex-1 items-end pb-8 lg:pb-0 lg:items-center">
          <div className="overflow-hidden w-full max-w-full">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
                containScroll: "trimSnaps",
              }}
              // onMouseEnter={() => plugin.current.stop()}
              // onMouseLeave={() => plugin.current.play()}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-3 lg:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 md:pl-3 lg:pl-4 basis-[78%] sm:basis-[320px] lg:basis-[368px]"
                  >
                    <div className="h-[286px] md:h-[310px]">
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
