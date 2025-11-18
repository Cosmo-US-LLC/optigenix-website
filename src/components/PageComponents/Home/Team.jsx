import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="py-[80px] px-[60px] bg-[#f7f7f7]">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-[48px]">
          <div className="flex flex-col gap-[24px] max-w-[660px]">
            <h2 className="font-funnel font-semibold text-[48px] leading-[48px] text-[#010907] capitalize">
              Meet the team
            </h2>
            <p className="font-inter text-[18px] leading-[26px] text-[#010907]">
              Founded and formulated by a world-class team of doctors and
              performance experts.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-[24px] items-center">
            <button
              onClick={scrollPrev}
              className="border border-[#010907] border-solid hover:bg-[#010907] hover:text-white transition-colors p-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-[24px] h-[24px]" />
            </button>
            <button
              onClick={scrollNext}
              className="border border-[#010907] border-solid hover:bg-[#010907] hover:text-white transition-colors p-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-[24px] h-[24px]" />
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
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-4 basis-auto">
                <div className="bg-white border border-[rgba(1,9,7,0.1)] rounded-[16px] flex gap-[32px] items-center pl-[16px] pr-[32px] py-[16px] w-[800px]">
                  {/* Image */}
                  <div className="w-[300px] h-full rounded-[8px] overflow-hidden shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-[32px] py-[16px]">
                    {/* Name and Role */}
                    <div className="flex flex-col gap-[4px]">
                      <h3 className="font-funnel font-bold text-[24px] leading-[32px] text-[#042b24] capitalize">
                        {member.name}
                      </h3>
                      <p className="font-inter text-[14px] leading-[22px] text-[#010907]">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="font-inter text-[16px] leading-[24px] text-[#010907]">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-[8px] items-center">
                      <span className="font-inter text-[16px] leading-[24px] text-[#010907]">
                        Follow Me:
                      </span>
                      <div className="flex gap-[12px]">
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
      </div>
    </section>
  );
};

export default Team;
