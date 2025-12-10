import React from "react";
import { MoveLeft, MoveRight, Linkedin, Twitter } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import teamImage1 from "../../../assets/images/team/meet_team_img6.webp";
import teamImage2 from "../../../assets/images/team/meet_team_img7.webp";
import teamImage3 from "../../../assets/images/team/meet_team_img8.webp";
import teamImage4 from "../../../assets/images/team/meet_team_img9.webp";
import teamImage5 from "../../../assets/images/team/meet_team_img10.webp";
import teamImage6 from "../../../assets/images/team/meet_team_img11.webp";

const teamMembers = [
  {
    name: "Gabriel Abbes",
    role: "Chief Executive Officer",
    image: teamImage1,
    bio: "As a former Division 1 NCAA distance runner at Cal, Gabriel brings his athletic experience and entrepreneurial vision to lead OptiGenix in revolutionizing personalized supplements and performance solutions for athletes.",
    linkedin: "https://www.linkedin.com/in/gabriel-abbes",
    twitter: "https://twitter.com/GabeAbbes_2020",
  },
  {
    name: "Jai Williams",
    role: "Chief Operating Officer",
    image: teamImage2,
    bio: "A former Division 1 NCAA high jumper at Cal and two-time podium finisher in the Pac-12 Conference of Champions, Jai brings his athletic expertise and operational excellence to drive OptiGenix's mission forward.",
    linkedin: "https://www.linkedin.com/in/jai-williams",
  },
  {
    name: "Laura Hix Glickman, Ph.D.",
    role: "Chief Strategic and Scientific Advisor",
    image: teamImage3,
    bio: "Dr. Glickman brings extensive expertise in scientific strategy and research methodology as a five-time biotech founder and a top five-ranked female Series A entrepreneur in the U.S. Laura ensures that OptiGenix approaches personalized supplementation with grounded research, fueled by her passion for discovery.",
    linkedin: "https://www.linkedin.com/in/laurahix",
  },
  {
    name: "Alec Bizieff, Ph.D.",
    role: "Scientific Advisor and Research Specialist",
    image: teamImage4,
    bio: "Dr. Bizieff brings his expertise in metabolic biology to advance OptiGenix's research initiatives while also leading the development of comprehensive educational content on biomarkers, supplements, and performance optimization. Through his contributions, he plays a pivotal role in fulfilling OptiGenix's mission to empower athletes with knowledge and tools needed to personalize their athletic journey and performance.",
    linkedin: "https://www.linkedin.com/in/alec-bizieff",
  },
  {
    name: "Cecelia Zielke, Ph.D. Candidate",
    role: "Scientific Advisor",
    image: teamImage5,
    bio: "As a Ph.D. Candidate and D1 athlete, Cecelia brings cutting-edge research perspectives to OptiGenix, contributing to our understanding of personalized supplementation and athletic performance optimization. In addition, she plays a key role in reviewing pilot studies to evaluate and enhance the effectiveness of our personalized supplementation process.",
    linkedin: "https://www.linkedin.com/in/cecelia-zielke-11a4a0202/",
  },
  {
    name: "Kai Samiere, BS MS",
    role: "Registered Dietician - Sports Nutrition",
    image: teamImage6,
    bio: "Kai Samiere brings a strong foundation in sports nutrition and evidence-based dietetics as a Registered Dietitian with hands-on experience guiding athletes and active individuals. At OptiGenix, he supports the goal that every personalized supplement plan is both scientifically grounded and tailored to real-world performance needs. His passion for precision and measurable outcomes supports our mission to help athletes train smarter, recover faster, and perform at their peak.",
    linkedin: "https://www.linkedin.com/in/kai-samiere-808/",
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
    <section
      className="py-12 px-4 bg-[#f7f7f7] lg:py-[80px] lg:px-[60px]"
      id="meet-the-team"
    >
      <div className="max-w-[1280px] lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-8 mb-8 lg:flex-row lg:justify-between lg:items-start lg:mb-[48px]">
          <div className="flex flex-col gap-4 lg:gap-[24px] lg:max-w-[660px]">
            <h2 className="text-[#010907] capitalize">Meet the team</h2>
            <p className=" description text-[#010907] max-w-[590px]">
              Built by athletes, scientists, and performance experts dedicated
              to redefining personalized supplementation.
            </p>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden lg:flex gap-[24px] items-center">
            <button
              onClick={scrollPrev}
              className="border border-[#010907] cursor-pointer border-solid hover:bg-[#010907] hover:text-white transition-colors p-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center"
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
              className="border border-[#010907] cursor-pointer border-solid hover:bg-[#010907] hover:text-white transition-colors p-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center"
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
                className="pl-3 lg:pl-4 basis-[304px]  lg:basis-auto"
              >
                <div className="bg-white border min-h-[460px] border-[rgba(1,9,7,0.1)] rounded-[16px] flex flex-col lg:flex-row gap-2 lg:gap-[32px] items-start lg:items-center p-2 lg:pl-[16px] lg:pr-[32px] lg:py-[16px] w-full lg:w-[800px]">
                  {/* Image */}
                  <div className="w-full h-[260px] lg:w-[300px] md:h-[400px] rounded-[8px] overflow-hidden shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-5 lg:gap-[32px] px-2 py-4 lg:py-[16px]">
                    {/* Name and Role */}
                    <div className="flex flex-col gap-1 h-[60px] ">
                      <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-[#042b24] capitalize">
                        {member.name}
                      </h3>
                      <p className="description !text-[14px] md:!text-[14px] text-[#010907]">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="description text-[#010907] h-[280px] md:h-[220px] ">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    {member.linkedin && (
                      <div className="flex gap-2 items-center">
                        <span className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
                          Follow Me:
                        </span>
                        <div className="flex gap-3">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#010907] border-solid rounded-[16px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[#010907] hover:text-white transition-colors"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="w-[18px] h-[18px]" />
                          </a>
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border border-[#010907] border-solid rounded-[16px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[#010907] hover:text-white transition-colors"
                              aria-label={`${member.name} Twitter/X`}
                            >
                              <Twitter className="w-[18px] h-[18px]" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
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
            className="border border-[#010907] cursor-pointer hover:bg-[#010907] hover:text-white transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
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
            className="border border-[#010907] cursor-pointer hover:bg-[#010907] hover:text-white transition-colors p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center"
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
