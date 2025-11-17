import React from "react";
import { FlaskConical, ShieldCheck, Activity, Leaf } from "lucide-react";

const Quality = () => {
  const features = [
    {
      icon: FlaskConical,
      text: "Formulated and reviewed by in-house experts",
    },
    {
      icon: ShieldCheck,
      text: "Third-party tested in ISO-accredited facilities",
    },
    {
      icon: Activity,
      text: "Data-driven personalization backed by dual-testing (DNA + blood)",
    },
    {
      icon: Leaf,
      text: "Non-GMO and pharmaceutical-grade ingredients",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-[518px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200"
              alt="Quality Testing"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[56px] text-[#010907]">
                Science-Backed Quality You Can Trust
              </h2>
              <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
                Our process starts with genetic and metabolic insights and ends
                with supplements verified for purity, safety, and efficacy in
                ISO-accredited, third-party labs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-[#0d8360] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#010907]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
