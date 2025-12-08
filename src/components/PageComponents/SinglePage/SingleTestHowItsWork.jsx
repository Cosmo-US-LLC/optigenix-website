import React from "react";

const CustomTestTubeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
    className={className}
  >
    <path
      d="M4.5 8.91406L12 1.41406M12 1.41406L19.5 8.91406M12 1.41406V11.1641"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 13.4141V18.6641C10.5 19.0619 10.658 19.4434 10.9393 19.7247C11.2206 20.006 11.6022 20.1641 12 20.1641C12.3978 20.1641 12.7794 20.006 13.0607 19.7247C13.342 19.4434 13.5 19.0619 13.5 18.6641V13.4141H21C21.7956 13.4141 22.5587 13.7301 23.1213 14.2927C23.6839 14.8554 24 15.6184 24 16.4141V22.4141C24 23.2097 23.6839 23.9728 23.1213 24.5354C22.5587 25.098 21.7956 25.4141 21 25.4141H3C2.20435 25.4141 1.44129 25.098 0.87868 24.5354C0.31607 23.9728 0 23.2097 0 22.4141V16.4141C0 15.6184 0.31607 14.8554 0.87868 14.2927C1.44129 13.7301 2.20435 13.4141 3 13.4141H10.5Z"
      fill="currentColor"
    />
  </svg>
);

const CustomUserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="currentColor"
    className={className}
  >
    <path
      d="M11.1125 0.00464471C12.7024 -0.0620795 14.2537 0.505514 15.4251 1.58256C16.5965 2.65961 17.2921 4.15788 17.3588 5.74778C17.4255 7.33768 16.8579 8.88897 15.7809 10.0604C14.7038 11.2318 13.2056 11.9274 11.6157 11.9941C10.0258 12.0608 8.47447 11.4932 7.30306 10.4162C6.13165 9.33913 5.43608 7.84085 5.36935 6.25095C5.30263 4.66105 5.87022 3.10976 6.94727 1.93835C8.02432 0.766945 9.52259 0.0713689 11.1125 0.00464471ZM11.7415 14.9915C18.3656 14.7135 23.8435 17.1709 23.9825 20.483L24.1083 23.4804L0.129382 24.4867L0.00359051 21.4893C-0.13541 18.1773 5.11728 15.2695 11.7415 14.9915Z"
      fill="currentColor"
    />
  </svg>
);

const steps = [
  {
    title: "Collect Your Sample",
    desc: "Use a quick saliva or cheek swab kit at home.",
    icon: CustomUserIcon,
  },
  {
    title: "Constant Lab Analysis",
    desc: "Our lab analyzes key SNPs and polygenic markers linked to your performance, nutrition, and recovery.",
    icon: CustomTestTubeIcon,
  },
  {
    title: "Receive Your Report",
    desc: "A detailed, easy-to-understand report explaining actionable steps based on your unique genetics.",
    icon: CustomTestTubeIcon,
  },
  {
    title: "Personalized 1:1 Nutrition Review",
    desc: "Take a one-on-one session with our certified nutrition expert to review your results and get tailored guidance.",
    icon: CustomTestTubeIcon,
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
        <div className="grid   grid-cols-1 gap-4 w-full sm:grid-cols-2 md:gap-5 max-w-[680px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group rounded-[16px] border border-[#dedede] bg-[#f7f7f7] opacity-90 p-6 md:p-7 flex flex-col gap-4 shadow-sm transition-all duration-200 hover:border-[#0d8360] hover:bg-[#0d8360] hover:opacity-100 hover:-rotate-2"
            >
              <div className="relative w-6 h-6">
                <step.icon className="w-6 h-6 text-black transition-colors duration-200 group-hover:text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-black transition-colors duration-200 group-hover:!text-white">
                  {step.title}
                </h5>
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
