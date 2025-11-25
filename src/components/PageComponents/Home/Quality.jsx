import React from "react";
import { FlaskConical } from "lucide-react";
import backedByScienceBg from "../../../assets/images/backed_by/backed_by_science_bg.webp";

const Quality = () => {
  // Custom dashed border style with longer dashes
  const dashedBorderStyle = {
    backgroundImage: `
      repeating-linear-gradient(0deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(90deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(180deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(270deg, white 0, white 15px, transparent 15px, transparent 30px)
    `,
    backgroundSize: "2px 100%, 100% 2px, 2px 100%, 100% 2px",
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };
  const dashedBorderStyle2 = {
    backgroundImage: `
      repeating-linear-gradient(0deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(90deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(180deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(270deg, white 0, white 15px, transparent 15px, transparent 30px)
    `,
    backgroundSize: "2px 100%, 0% 2px, 2px 100%, 100% 2px",
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };
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
    <section className="py-12 lg:py-[40px] bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[24px] items-start">
          {/* Mobile: Content First, Desktop: Image First */}
          {/* <div className="flex flex-col order-1 gap-0 w-full lg:order-2 lg:hidden">
            <div
              className="bg-[#042b24] rounded-[24px] px-4 py-5 lg:p-[32px] flex flex-col gap-6"
              style={dashedBorderStyle}
            >
              <div className="flex flex-col gap-4 text-white">
                <h2 className="font-['Funnel_Display'] font-medium text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px]">
                  Backed By Science
                </h2>
                <p className="font-['Inter'] font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px]">
                  Our process starts with genetic and metabolic insights and
                  ends with supplements verified for purity, safety, and
                  efficacy in ISO-accredited, third-party labs.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-[10px] items-center">
                    <FlaskConical
                      className="w-6 h-6 text-white shrink-0"
                      strokeWidth={1.5}
                    />
                    <p className="font-['Inter'] font-light text-[14px] leading-[22px] text-white">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Desktop: Two Stacked Cards */}
          <div className=" lg:flex w-full lg:w-[600px] lg:order-2 flex-col gap-0">
            {/* Card 1: Title & Description */}
            <div
              className="bg-[#042b24] rounded-[24px] p-[28px] h-[208px] flex flex-col justify-start"
              style={dashedBorderStyle}
            >
              <div className="space-y-[16px] text-white">
                <h2 className="font-['Funnel_Display'] font-medium md:text-[48px] text-[32px] md:leading-[56px] leading-[40px]">
                  Backed By Science
                </h2>
                <p className="font-inter font-normal md:text-[16px] text-[14px] md:leading-[24px] leading-[22px]">
                  Our process starts with genetic and metabolic insights and
                  ends with supplements verified for purity, safety, and
                  efficacy in ISO-accredited, third-party labs.
                </p>
              </div>
            </div>

            {/* Card 2: Features Grid */}
            <div
              className="bg-[#042b24] py-[20px] md:py-[40px] rounded-[24px] px-[28px] md:h-[332px] max-md:min-h-[320px] flex flex-col justify-center"
              style={dashedBorderStyle2}
            >
              <div className="flex flex-col gap-[15px] md:gap-[40px]">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-[15px] md:gap-[20px] md:h-[90px] h-[auto]">
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="max-md:pt-2"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M18.6693 8V13.5627C18.6693 14.2693 18.9506 14.948 19.4506 15.448L25.8879 21.8853C26.3879 22.3853 26.6693 23.064 26.6693 23.7707V25.3333C26.6693 26.8067 25.4759 28 24.0026 28H8.0026C6.52927 28 5.33594 26.8067 5.33594 25.3333V23.7707C5.33594 23.064 5.61727 22.3853 6.11727 21.8853L12.5546 15.448C13.0546 14.948 13.3359 14.2693 13.3359 13.5627V8"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.3333 4H18.6667C19.4027 4 20 4.59733 20 5.33333V6.66667C20 7.40267 19.4027 8 18.6667 8H13.3333C12.5973 8 12 7.40267 12 6.66667V5.33333C12 4.59733 12.5973 4 13.3333 4Z"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57422 22.6665H26.4276"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.0938 14.6667H18.9071"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[0].text}
                    </p>
                  </div>
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      className="max-md:pt-2"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M18.6693 8V13.5627C18.6693 14.2693 18.9506 14.948 19.4506 15.448L25.8879 21.8853C26.3879 22.3853 26.6693 23.064 26.6693 23.7707V25.3333C26.6693 26.8067 25.4759 28 24.0026 28H8.0026C6.52927 28 5.33594 26.8067 5.33594 25.3333V23.7707C5.33594 23.064 5.61727 22.3853 6.11727 21.8853L12.5546 15.448C13.0546 14.948 13.3359 14.2693 13.3359 13.5627V8"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.3333 4H18.6667C19.4027 4 20 4.59733 20 5.33333V6.66667C20 7.40267 19.4027 8 18.6667 8H13.3333C12.5973 8 12 7.40267 12 6.66667V5.33333C12 4.59733 12.5973 4 13.3333 4Z"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57422 22.6665H26.4276"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.0938 14.6667H18.9071"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[1].text}
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div
                  className="flex flex-col md:flex-row gap-[15px] md:gap-[20px] md:h-are you ready to work
                md:h-[90px] h-[auto]"
                >
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                  <div>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      className="!w-[32px] h-[32px] max-md:pt-2"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M18.6693 8V13.5627C18.6693 14.2693 18.9506 14.948 19.4506 15.448L25.8879 21.8853C26.3879 22.3853 26.6693 23.064 26.6693 23.7707V25.3333C26.6693 26.8067 25.4759 28 24.0026 28H8.0026C6.52927 28 5.33594 26.8067 5.33594 25.3333V23.7707C5.33594 23.064 5.61727 22.3853 6.11727 21.8853L12.5546 15.448C13.0546 14.948 13.3359 14.2693 13.3359 13.5627V8"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.3333 4H18.6667C19.4027 4 20 4.59733 20 5.33333V6.66667C20 7.40267 19.4027 8 18.6667 8H13.3333C12.5973 8 12 7.40267 12 6.66667V5.33333C12 4.59733 12.5973 4 13.3333 4Z"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57422 22.6665H26.4276"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.0938 14.6667H18.9071"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[2].text}
                    </p>
                  </div>
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      className="max-md:pt-2"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M18.6693 8V13.5627C18.6693 14.2693 18.9506 14.948 19.4506 15.448L25.8879 21.8853C26.3879 22.3853 26.6693 23.064 26.6693 23.7707V25.3333C26.6693 26.8067 25.4759 28 24.0026 28H8.0026C6.52927 28 5.33594 26.8067 5.33594 25.3333V23.7707C5.33594 23.064 5.61727 22.3853 6.11727 21.8853L12.5546 15.448C13.0546 14.948 13.3359 14.2693 13.3359 13.5627V8"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.3333 4H18.6667C19.4027 4 20 4.59733 20 5.33333V6.66667C20 7.40267 19.4027 8 18.6667 8H13.3333C12.5973 8 12 7.40267 12 6.66667V5.33333C12 4.59733 12.5973 4 13.3333 4Z"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57422 22.6665H26.4276"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.0938 14.6667H18.9071"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[3].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Shows below content on mobile, left on desktop */}
          {/* <div className="flex-1 order-2 lg:order-1 h-[400px] lg:h-[538px] w-full rounded-[24px] overflow-hidden relative">
            <img
              src={backedByScienceBg}
              alt="Athlete in action"
              className="object-cover absolute inset-0 w-full h-full rounded-[24px]"
            />
          </div> */}
          <div className="order-2 lg:order-1 flex-1 w-full min-h-[380px] lg:h-[538px] rounded-[24px] overflow-hidden relative">
            <img
              src={backedByScienceBg}
              alt="Athlete in action"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
