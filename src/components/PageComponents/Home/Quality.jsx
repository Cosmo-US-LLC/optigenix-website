import React from "react";
import { FlaskConical } from "lucide-react";

const Quality = () => {
  const features = [
    {
      text: "Formulated and reviewed by in-house experts",
    },
    {
      text: "Third-party tested in ISO-accredited facilities",
    },
    {
      text: "Data-driven personalization backed by dual-testing (DNA + blood)",
    },
    {
      text: "Non-GMO and pharmaceutical-grade ingredients",
    },
  ];

  return (
    <section className="py-[40px] px-[32px] bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-[24px] items-start">
          {/* Left: Athlete Action Image */}
          <div className="flex-1 h-[518px] rounded-[24px] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200"
              alt="Athlete in action"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>

          {/* Right: Two Stacked Cards */}
          <div className="w-full lg:w-[676px] flex flex-col gap-0">
            {/* Card 1: Title & Description */}
            <div className="bg-[#042b24] border border-dashed border-white rounded-[24px] p-[32px] h-[208px] flex flex-col justify-start">
              <div className="space-y-[16px] text-white">
                <h2 className="font-funnel font-medium text-[48px] leading-[56px]">
                  Backed By Science
                </h2>
                <p className="font-inter text-[16px] leading-[24px]">
                  Our process starts with genetic and metabolic insights and
                  ends with supplements verified for purity, safety, and
                  efficacy in ISO-accredited, third-party labs.
                </p>
              </div>
            </div>

            {/* Card 2: Features Grid */}
            <div className="bg-[#042b24] border border-dashed border-white rounded-[24px] p-[32px] h-[312px]">
              <div className="flex flex-col gap-[20px]">
                {/* Row 1 */}
                <div className="flex gap-[20px] h-[90px]">
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <FlaskConical
                      className="w-[32px] h-[32px] text-white"
                      strokeWidth={1.5}
                    />
                    <p className="font-inter font-light text-[16px] leading-[24px] text-white">
                      {features[0].text}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <FlaskConical
                      className="w-[32px] h-[32px] text-white"
                      strokeWidth={1.5}
                    />
                    <p className="font-inter font-light text-[16px] leading-[24px] text-white">
                      {features[1].text}
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[20px] h-[90px]">
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <FlaskConical
                      className="w-[32px] h-[32px] text-white"
                      strokeWidth={1.5}
                    />
                    <p className="font-inter font-light text-[16px] leading-[24px] text-white">
                      {features[2].text}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-[10px]">
                    <FlaskConical
                      className="w-[32px] h-[32px] text-white"
                      strokeWidth={1.5}
                    />
                    <p className="font-inter font-light text-[16px] leading-[24px] text-white">
                      {features[3].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
