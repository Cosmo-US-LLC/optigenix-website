import React from "react";
import teamMember1Image from "../../../assets/images/about/about_team/about_team_img1.webp";
import teamMember2Image from "../../../assets/images/about/about_team/about_team_img2.webp";
import teamMember3Image from "../../../assets/images/about/about_team/about_team_img3.webp";
import teamMember4Image from "../../../assets/images/about/about_team/about_team_img4.webp";
import teamMember5Image from "../../../assets/images/about/about_team/about_team_img5.webp";
import teamMember6Image from "../../../assets/images/about/about_team/about_team_img6.webp";

const teamMembers = [
  {
    name: "Gabriel Abbes",
    title: "CEO",
    description:
      "As a former Division 1 NCAA distance runner at Cal, Gabriel brings his athletic experience and entrepreneurial vision to lead OptiGenix in revolutionizing personalized supplements and performance solutions for athletes.",
    image: teamMember1Image,
  },
  {
    name: "Jai Williams",
    title: "COO",
    description:
      "A former Division 1 NCAA high jumper at Cal and two-time podium finisher in the Pac-12 Conference of Champions, Jai brings his athletic expertise and operational excellence to drive OptiGenix's mission forward.",
    image: teamMember2Image,
  },
  {
    name: "Laura Hix Glickman, Ph.D",
    title: "Chief Strategic and Scientific Advisor",
    description:
      "Dr. Glickman brings extensive expertise in scientific strategy and research methodology as a five-time biotech founder and a top five-ranked female Series A entrepreneur in the U.S. Laura ensures that OptiGenix approaches personalized supplementation with grounded research, fueled by her passion for discovery.",
    image: teamMember3Image,
  },
  {
    name: "Cecelia Zielke, Ph.D",
    title: "Candidate, Scientific Advisor",
    description:
      "As a Ph.D. candidate and D1 athlete, Cecelia brings fresh research perspectives to OptiGenix, helping improve the effectiveness of our personalized supplementation process.",
    image: teamMember5Image,
  },
  {
    name: "Kai Samiere, BS MS",
    title: "Registered Dietitian, Sports Nutrition",
    description:
      "Kai is a Registered Dietitian specializing in sports nutrition. He ensures each personalized supplement plan is scientifically grounded, helping athletes perform at their peak.",
    image: teamMember6Image,
  },
  {
    name: "Alec Bizieff, Ph.D",
    title: "Scientific Advisor and Research Specialist",
    description:
      "Dr. Bizieff drives OptiGenix’s research in metabolic biology, biomarkers, andperformance optimization, giving athletes the knowledge and tools to tailor theirperformance journey.",
    image: teamMember4Image,
  },
];

const AboutMeetTeam = () => {
  return (
    <section className="bg-[#f7f7f7] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-[48px]">
          {/* Header */}
          <div className="flex flex-col gap-[16px] text-[#010907] text-center">
            <h2 className="">Meet the team</h2>
            <p className="description max-w-[732px] md:!text-[18px] !text-[16px]  mx-auto">
              Our team is a mix of athletes and scientists working together to
              make personalized health and performance a reality. Here are some
              of the people behind our work:
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex flex-col gap-[30px]">
            {/* First Row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[12px] overflow-hidden p-[20px] md:p-[24px] flex flex-col gap-[24px]"
                >
                  {/* Image */}
                  <div className="relative h-[221px] w-full rounded-[12px] overflow-hidden bg-[#e8e8e8]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-[32px] px-[6px] py-[8px]">
                    {/* Description */}
                    <p className="description !text-[#010907] h-[180px] md:h-[190px] ">
                      {member.description}
                    </p>

                    {/* Name and Title */}
                    <div className="flex flex-col gap-[6px]">
                      <p className="capitalize font-['Funnel_Display'] font-bold text-[22px] leading-[22px] text-[#042b24]">
                        {member.name}
                      </p>
                      <p className="font-['Inter'] font-normal text-[14px] leading-[16px] text-[#010907]">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {teamMembers.slice(3, 6).map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[12px] overflow-hidden p-[20px] md:p-[24px] flex flex-col gap-[24px]"
                >
                  {/* Image */}
                  <div className="relative h-[221px] w-full rounded-[12px] overflow-hidden bg-[#d8d8d7]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-[32px] px-[6px] py-[8px] ">
                    {/* Description */}
                    <p className="description !text-[#010907] h-[180px] md:h-[190px] ">
                      {member.description}
                    </p>

                    {/* Name and Title */}
                    <div className="flex flex-col gap-[6px]">
                      <p className="capitalize font-['Funnel_Display'] font-bold text-[22px] leading-[22px] text-[#042b24]">
                        {member.name}
                      </p>
                      <p className="font-['Inter'] font-normal text-[14px] leading-[16px] text-[#010907]">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeetTeam;
