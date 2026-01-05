import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Image1 from "@/assets/images/header/menu_img1.webp";
import Image2 from "@/assets/images/header/menu_img2.webp";
import Image3 from "@/assets/images/header/menu_img3.webp";
// import Image4 from "@/assets/images/header/menu_img4.webp";
import Image4 from "@/assets/images/header/menu_img4.webp";
import Image5 from "@/assets/images/header/menu_img5.webp";
import Image6 from "@/assets/images/header/menu_img9.webp";
import Image7 from "@/assets/images/header/menu_img10.webp";
import Image8 from "@/assets/images/header/menu_img11.webp";

const DiscoverMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleQuizClick = () => {
    navigate("/quiz");
    onClose();
  };

  const handleWaitlistClick = () => {
    navigate("/join-wait-list?test=Blood Test");
    onClose();
  };

  const handleCard1Click = () => {
    navigate("/gene-test");
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />

      {/* Menu Content */}
      <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] md:w-[calc(100%-32px)] max-w-[1280px] px-4 md:px-8">
        <div className="bg-white rounded-[16px] md:rounded-[24px] p-[16px] md:p-[32px] lg:p-[40px] shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-[24px] md:gap-[40px]">
            {/* Left Section - Health Paths */}
            <div className="flex flex-col gap-[16px] md:gap-[20px] w-full md:w-auto">
              <div className="flex gap-[16px] md:gap-[32px] items-center">
                <p className="capitalize font-['Funnel_Display'] font-semibold text-[#3fa290] text-[14px] md:text-[16px] leading-normal">
                  Find The Right Path To Better Health
                </p>
              </div>

              <div className="flex flex-wrap gap-[8px] md:gap-[12px] items-center justify-center md:justify-start">
                {/* Card 1: Your Body's User Manual */}
                <div
                  onClick={handleCard1Click}
                  className="bg-[#f6f6f6] hover:bg-[#e6e6e640] cursor-pointer flex flex-col items-center overflow-hidden rounded-[12px] md:rounded-[16px] w-[100px] h-[100px] md:w-[128px] md:h-[128px]"
                >
                  <div className="flex relative justify-center items-center">
                    <div className="rotate-180">
                      <div className="h-[85px] w-[152px] relative">
                        <div className="absolute inset-0">
                          <div className="absolute bg-[#dce3e4] hover:bg-[#e6e6e640] inset-0" />
                          <div className="overflow-hidden absolute inset-0">
                            <img alt="" src={Image1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] h-[40px] md:h-[43px] items-center justify-center w-full px-1 md:px-2">
                    <p className="capitalize font-['Funnel_Display'] font-medium text-[#010907] text-[11px] md:text-[12px] lg:[16px] text-center leading-[14px] md:leading-[16px] whitespace-pre-wrap">
                      At-Home Gene <br /> Test
                    </p>
                  </div>
                </div>

                {/* Card 2: Unlock Vital Health Markers */}
                <div
                  onClick={handleWaitlistClick}
                  className="bg-[#f6f6f6] hover:bg-[#e6e6e640] cursor-pointer flex flex-col items-center overflow-hidden rounded-[12px] md:rounded-[16px] w-[100px] h-[100px] md:w-[128px] md:h-[128px]"
                >
                  <div className="bg-[#dce3e4] h-[60px] md:h-[85px] overflow-hidden rounded-tl-[12px] rounded-tr-[12px] w-full relative">
                    <img
                      src={Image2}
                      alt="Image 2"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] h-[40px] md:h-[43px] items-center justify-center px-2 md:px-[20px]">
                    <p className="capitalize font-['Funnel_Display'] font-medium text-[#010907] text-[11px] md:text-[12px] lg:[16px] text-center leading-[14px] md:leading-[16px] whitespace-pre-wrap">
                      Performance Blood Test
                    </p>
                  </div>
                </div>

                {/* Card 3: Mental Performance */}
                <div>
                  <a
                    href="https://tryoptigenix.com/collections/mental-performance"
                    target="_blank"
                  >
                    <div className="bg-[#f6f6f6] flex flex-col gap-[4px] md:gap-[6px] items-center overflow-hidden rounded-[12px] md:rounded-[16px] w-[100px] h-[100px] md:w-[128px] md:h-[128px]">
                      <div className="h-[60px] md:h-[85px] rounded-tl-[12px] rounded-tr-[12px] w-full relative overflow-hidden">
                        <img
                          alt="Mental Performance"
                          src={Image4}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="font-['Funnel_Display'] font-medium text-[#010907] text-[11px] md:text-[12px] lg:[16px] text-center leading-[14px] md:leading-[16px] w-full px-1 whitespace-pre-wrap">
                        Mental <br></br> Performance
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card 4: Physical Performance */}
                <div>
                  <a
                    href="https://tryoptigenix.com/collections/physical-performance"
                    target="_blank"
                  >
                    <div className="bg-[#f6f6f6] flex flex-col gap-[4px] md:gap-[6px] items-center overflow-hidden rounded-[12px] md:rounded-[16px] w-[100px] h-[100px] md:w-[128px] md:h-[128px]">
                      <div className="h-[60px] md:h-[85px] rounded-tl-[12px] rounded-tr-[12px] w-full relative overflow-hidden">
                        <img
                          alt="Physical Performance"
                          className="object-cover w-full h-full"
                          src={Image3}
                        />
                      </div>
                      <div className="font-['Funnel_Display'] font-medium text-[#010907] text-[11px] md:text-[12px] lg:[16px] text-center leading-[14px] md:leading-[16px] w-full px-1 whitespace-pre-wrap">
                        Physical Performance
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card 5: Recovery */}
                <div>
                  <a
                    href="https://tryoptigenix.com/collections/recovery"
                    target="_blank"
                  >
                    <div className="bg-[#f6f6f6] flex flex-col gap-[8px] md:gap-[12px] items-center overflow-hidden rounded-[12px] md:rounded-[16px] w-[100px] h-[100px] md:w-[128px] md:h-[128px]">
                      <div className="h-[60px] md:h-[85px] rounded-tl-[12px] rounded-tr-[12px] w-full relative overflow-hidden">
                        <img
                          alt="Recovery"
                          src={Image5}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="font-['Funnel_Display'] font-medium text-[#010907] text-[11px] md:text-[12px] text-center leading-[14px] md:leading-[16px] w-full px-1 whitespace-pre-wrap">
                        Recovery
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Join Waitlist link under cards */}
              <div className="flex justify-center w-[60%]">
                <button
                  onClick={handleWaitlistClick}
                  className="font-['Inter'] cursor-pointer text-[#3fa290] text-[13px] md:text-[14px] font-semibold hover:underline"
                >
                  Join Waitlist!
                </button>
              </div>
            </div>

            {/* Right Section - Quiz */}
            <div className="flex flex-col gap-[16px] md:gap-[20px] shrink-0 w-full md:w-auto">
              <div className="flex gap-[16px] md:gap-[32px] items-center">
                <p className="capitalize font-['Funnel_Display'] font-semibold text-[#3fa290] text-[14px] md:text-[16px] leading-normal">
                  Still Confused?
                </p>
              </div>

              <div className="flex flex-col gap-[12px] md:gap-[16px] min-h-[120px] md:h-[137px] justify-center px-[12px] md:px-[16px] py-[16px] md:py-[20px] rounded-[12px] w-full md:w-[360px] bg-linear-to-br from-[#2b7a6c] to-[#0a694d]">
                <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-center w-full">
                  {/* Customer Images */}
                  <div className="flex flex-col gap-[12px] md:gap-[15px] items-center md:items-start leading-0 w-[100px] md:w-[116px] shrink-0">
                    <div className="grid relative grid-cols-1 grid-rows-1 scale-90 md:scale-100">
                      <div className="col-1 row-1 flex items-center justify-center ml-[45px] md:ml-[55px] mt-0 relative w-[50px] md:w-[61.237px] h-[50px] md:h-[61.237px]">
                        <div className="rotate-195 -scale-y-100">
                          <div className="border-2 border-solid border-white rounded-[6px] md:rounded-[8px] w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative overflow-hidden">
                            <img
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                              src={Image8}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-1 row-1 flex items-center justify-center ml-0 mt-0 relative w-[50px] md:w-[61.237px] h-[50px] md:h-[61.237px]">
                        <div className="rotate-345">
                          <div className="border-2 border-solid border-white rounded-[6px] md:rounded-[8px] w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative overflow-hidden">
                            <img
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                              src={Image6}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-solid border-white col-1 row-1 ml-[32px] md:ml-[39px] mt-[3px] rounded-[6px] md:rounded-[8px] w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative overflow-hidden">
                        <img
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                          src={Image7}
                        />
                      </div>
                    </div>
                    <div className="font-['Inter'] font-normal text-[#f8fffd] text-center w-full">
                      <p className="leading-[15px] md:leading-[17px] mb-0">
                        <span className="font-bold text-[12px] md:text-[14px]">
                          1400+
                        </span>
                        <span className="text-[11px] md:text-[12px]">
                          {" "}
                          Satisfied
                        </span>
                      </p>
                      <p className="leading-[15px] md:leading-[17px] text-[11px] md:text-[12px]">
                        Customers
                      </p>
                    </div>
                  </div>

                  {/* Quiz CTA */}
                  <div className="flex flex-col gap-[12px] md:gap-[16px] items-center md:items-start justify-center flex-1 w-full">
                    <p className="font-['Inter'] font-normal leading-[16px] md:leading-[17px] text-[#f8fffd] text-[13px] md:text-[14px] text-center md:text-left">
                      Find your perfect supplement in under 2 mins.
                    </p>
                    <button
                      onClick={handleQuizClick}
                      className="bg-[#f8fffd] flex cursor-pointer gap-[6px] md:gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[100px] hover:bg-white transition-colors group"
                    >
                      <span className="font-['Inter'] font-bold leading-[16px] md:leading-[19px] text-[#2b7a6c] text-[11px] md:text-[12px]">
                        Take our Quiz
                      </span>
                      <ArrowRight className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-[#2b7a6c] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverMenu;
