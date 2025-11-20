import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import gabrielAbbes from "../../../assets/images/team/meet_team_img1.webp";
import jaiWilliams from "../../../assets/images/team/meet_team_img2.webp";
import lauraHixGlickman from "../../../assets/images/team/meet_team_img3.webp";
const teamMembers = [
  {
    name: "Gabriel Abbes",
    role: "Chief Executive Officer",
    image: gabrielAbbes,
    bio: "Lorem ipsum dolor sit amet consectetur. In amet pharetra blandit pellentesque at magna augue nibh ultrices. Eleifend diam morbi urna netus id. Vel nec nibh nam vulputate. Mi integer enim adipiscing in. Risus nunc sed in sed risus id. Scelerisque diam egestas sit tortor vel consequat.",
  },
  {
    name: "Jai Williams",
    role: "Chief Operating Officer",
    image: jaiWilliams,
    bio: "Lorem ipsum dolor sit amet consectetur. In amet pharetra blandit pellentesque at magna augue nibh ultrices. Eleifend diam morbi urna netus id. Vel nec nibh nam vulputate. Mi integer enim adipiscing in. Risus nunc sed in sed risus id. Scelerisque diam egestas sit tortor vel consequat.",
  },
  {
    name: "Laura Hix Glickman, Ph.D.",
    role: "Chief Strategic and Scientific Advisor",
    image: lauraHixGlickman,
    bio: "Lorem ipsum dolor sit amet consectetur. In amet pharetra blandit pellentesque at magna augue nibh ultrices. Eleifend diam morbi urna netus id. Vel nec nibh nam vulputate. Mi integer enim adipiscing in. Risus nunc sed in sed risus id. Scelerisque diam egestas sit tortor vel consequat.",
  },
];

const Team = () => {
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

  return (
    <section className="py-12 px-4 bg-[#f7f7f7] lg:py-[80px] lg:px-[60px]">
      <div className="max-w-[1280px] lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-8 mb-8 lg:flex-row lg:justify-between lg:items-start lg:mb-[48px]">
          <div className="flex flex-col gap-4 lg:gap-[24px] lg:max-w-[660px]">
            <h2 className="font-['Funnel_Display'] font-semibold text-[32px] leading-[40px] lg:text-[48px] lg:leading-[48px] text-[#010907] capitalize">
              Meet the team
            </h2>
            <p className="font-['Inter'] font-normal text-[14px] leading-[22px] lg:text-[18px] lg:leading-[26px] text-[#010907]">
              Founded and formulated by a world-class team of doctors and
              performance experts.
            </p>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden lg:flex gap-[24px] items-center">
            <button
              onClick={scrollPrev}
              className="border border-[#010907] border-solid hover:bg-[#010907] hover:text-white transition-colors p-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center"
              aria-label="Previous slide"
            >
              <MoveLeft
                className="w-[24px] h-[24px]"
                size={24}
                strokeWidth={1}
              />
            </button>
            <button
              onClick={scrollNext}
              className="border border-[#010907] border-solid hover:bg-[#010907] hover:text-white transition-colors p-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center"
              aria-label="Next slide"
            >
              <MoveRight
                className="w-[24px] h-[24px]"
                size={24}
                strokeWidth={1}
              />
            </button>
          </div>
        </div>

        {/* Team Members Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 lg:-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-3 lg:pl-4 basis-[304px] lg:basis-auto"
              >
                <div className="bg-white border border-[rgba(1,9,7,0.1)] rounded-[16px] flex flex-col lg:flex-row gap-2 lg:gap-[32px] items-start lg:items-center p-2 lg:pl-[16px] lg:pr-[32px] lg:py-[16px] w-full lg:w-[800px]">
                  {/* Image */}
                  <div className="w-full h-[280px] lg:w-[300px] lg:h-full rounded-[8px] overflow-hidden shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-5 lg:gap-[32px] px-2 py-4 lg:py-[16px]">
                    {/* Name and Role */}
                    <div className="flex flex-col gap-1">
                      <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-[#042b24] capitalize">
                        {member.name}
                      </h3>
                      <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#010907]">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="font-['Inter'] font-normal text-[14px] leading-[22px] lg:text-[16px] lg:leading-[24px] text-[#010907]">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2 items-center">
                      <span className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
                        Follow Me:
                      </span>
                      <div className="flex gap-3">
                        <button
                          className="border border-[#010907] border-solid rounded-[16px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[#010907] hover:text-white transition-colors"
                          aria-label="LinkedIn"
                        >
                          <span className="text-[16px]">in</span>
                        </button>
                        <button
                          className="border border-[#010907] border-solid rounded-[16px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[#010907] hover:text-white transition-colors"
                          aria-label="Twitter/X"
                        >
                          <span className="text-[16px]">𝕏</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Mobile Navigation Controls */}
        <div className="flex gap-5 justify-center items-center mt-8 lg:hidden">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
            aria-label="Previous"
          >
            <MoveLeft className="w-12 h-12" size={24} strokeWidth={1} />
          </button>

          {/* Progress Dots */}
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

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="border border-[#010907] hover:bg-[#010907] hover:text-white transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
            aria-label="Next"
          >
            <MoveRight className="w-12 h-12" size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
