import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Gabriel Abbes",
    role: "Chief Executive Officer",
    image: "https://i.pravatar.cc/400?img=12",
    bio: "Former D1 athlete with a passion for personalized health. Gabriel founded OptiGenix after realizing standard supplements weren't meeting his performance needs.",
  },
  {
    name: "Jai Williams",
    role: "Chief Operating Officer",
    image: "https://i.pravatar.cc/400?img=14",
    bio: "Operations expert with 10+ years scaling health tech companies. Jai ensures every OptiGenix pack meets the highest quality standards.",
  },
  {
    name: "Laura Hix Glickman, Ph.D.",
    role: "Chief Strategic and Scientific Advisor",
    image: "https://i.pravatar.cc/400?img=16",
    bio: "Ph.D. in Nutritional Sciences from Stanford. Dr. Glickman leads our research team and ensures all formulations are backed by cutting-edge science.",
  },
];

const Team = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 816; // card width + gap
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="space-y-3 max-w-[660px]">
            <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[48px] text-[#010907]">
              Meet the team
            </h2>
            <p className="font-['Inter'] font-normal text-[18px] leading-[26px] text-[#010907]">
              Founded and formulated by a world-class team of doctors and
              performance experts.
            </p>
          </div>

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

        {/* Team Members Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] bg-[#f7f7f7] rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-[330px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-['Funnel_Display'] font-semibold text-[24px] leading-[32px] text-[#010907]">
                    {member.name}
                  </h3>
                  <p className="font-['Inter'] font-medium text-[14px] leading-[22px] text-gray-600">
                    {member.role}
                  </p>
                </div>

                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#010907]">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-2 items-center pt-2">
                  <span className="font-['Inter'] font-medium text-[14px] text-[#010907]">
                    Follow Me:
                  </span>
                  <button className="p-2 rounded-full transition-colors hover:bg-white">
                    <Linkedin className="w-5 h-5 text-[#010907]" />
                  </button>
                  <button className="p-2 rounded-full transition-colors hover:bg-white">
                    <Twitter className="w-5 h-5 text-[#010907]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
