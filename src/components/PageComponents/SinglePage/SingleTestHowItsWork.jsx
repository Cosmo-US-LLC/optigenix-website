import React from "react";
import { TestTube, Microscope, FileText, User } from "lucide-react";

const steps = [
  {
    title: "Collect Your Sample",
    desc: "Use a quick saliva or cheek swab kit at home.",
    icon: TestTube,
  },
  {
    title: "Constant Lab Analysis",
    desc: "Our lab analyzes key SNPs and polygenic markers linked to your performance, nutrition, and recovery.",
    icon: Microscope,
  },
  {
    title: "Receive Your Report",
    desc: "A detailed, easy-to-understand report explaining actionable steps based on your unique genetics.",
    icon: FileText,
  },
  {
    title: "Personalized 1:1 Nutrition Review",
    desc: "Take a one-on-one session with our certified nutrition expert to review your results and get tailored guidance.",
    icon: User,
  },
];

const SingleTestHowItsWork = () => {
  return (
    <section className="py-12 bg-white md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start gap-4 md:gap-8">
        {/* Left: Heading + CTA */}
        <div className="flex flex-col gap-6 justify-between items-start h-full group">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#252525]  ">How It Works</h2>
            <p className="font-['Inter'] text-[16px] leading-[26px] md:text-[16px] md:leading-[29px] text-black max-w-[520px] ">
              Get clarity on your body's unique needs with advanced genetic and
              nutrition insights. This test empowers you to optimize your
              performance, improve your health, and prevent issues before they
              start. Follow these simple steps to get started
            </p>
          </div>
          <button className="bg-[#0d8360] text-white rounded-full px-6 py-3 font-['Funnel_Display'] font-semibold text-[16px] leading-[24px] w-fit">
            Get Started Today
          </button>
        </div>

        {/* Right: Steps Grid */}
        <div className="grid flex-1 grid-cols-1 gap-4 w-full sm:grid-cols-2 md:gap-5 max-w-[780px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group rounded-[16px] border border-[#dedede] bg-[#f7f7f7] opacity-90 p-6 md:p-7 flex flex-col gap-4 shadow-sm transition-all duration-200 hover:border-[#0d8360] hover:bg-[#0d8360] hover:opacity-100 hover:-rotate-2"
            >
              {/* <div className="relative w-6 h-6">
                <step.icon className="w-6 h-6 text-black transition-colors duration-200 group-hover:text-white" />
              </div> */}
              <div className="flex flex-col gap-2">
                <h3 className="text-black text-[20px]! leading-[24px]! transition-colors duration-200 group-hover:!text-white">
                  {step.title}
                </h3>
                <p className="text-black transition-colors duration-200 description group-hover:!text-white">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleTestHowItsWork;
