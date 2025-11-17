import React from "react";

const CaseStudy = () => {
  const stats = [
    { value: "+15%", label: "FTP Increase" },
    { value: "+7", label: "VO₂ Max Points" },
    { value: "2x", label: "Ferritin Doubled" },
  ];

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-[646px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200"
              alt="Athletes using OptiGenix"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60" />
            <div className="absolute right-8 bottom-8 left-8 space-y-4 text-white">
              <h3 className="font-['Funnel_Display'] font-semibold text-[32px] leading-[40px]">
                How Athletes Use OptiGenix and Transformed Their Game
              </h3>
              <p className="font-['Inter'] text-[16px] leading-[24px]">
                30 collegiate endurance athletes participated in a 30-day pilot
                study on personalized supplementation
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-[#0d8360] text-white px-4 py-1 rounded-full">
                <p className="font-['Funnel_Display'] font-medium text-[14px]">
                  Case Study
                </p>
              </div>

              <h2 className="font-['Funnel_Display'] font-semibold text-[40px] leading-[48px] text-[#010907]">
                OptiGenix × UC Berkeley Triathlon Team
              </h2>

              <div className="space-y-3">
                <h3 className="font-['Funnel_Display'] font-semibold text-[28px] leading-[36px] text-[#010907]">
                  Results
                </h3>
                <p className="font-['Funnel_Display'] font-medium text-[18px] leading-[24px] text-[#010907]">
                  Performance & Recovery
                </p>
                <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
                  A 30-day pilot with collegiate endurance athletes showed that
                  biomarker-based, personalized supplements improved
                  performance, recovery, and nutrient status versus standard
                  supplements.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 space-y-2 text-center bg-white rounded-lg shadow-sm"
                >
                  <p className="font-['Funnel_Display'] font-bold text-[36px] leading-[40px] text-[#0d8360]">
                    {stat.value}
                  </p>
                  <p className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#010907]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="bg-[rgba(16,185,129,0.1)] border-l-[3px] border-emerald-500 rounded p-4">
              <p className="font-['Inter'] font-normal text-[14px] leading-[20px] text-[#010907]">
                Top responder: Athlete OG0027 → +15% FTP, +7 VO₂ Max points,
                ferritin doubled.
              </p>
            </div>

            <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
              These findings demonstrate that personalized, biology-driven
              supplementation is practical, scalable, and more effective than
              standard protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
