import React from "react";
import { useNavigate } from "react-router-dom";
import clockIcon from "../../../assets/images/category/recovery_plan/icon_1.svg";
import listIcon from "../../../assets/images/category/recovery_plan/icon_2.svg";
import settingsIcon from "../../../assets/images/category/recovery_plan/icon_3.svg";

const QuizCTASection = ({ title, description, quizImage }) => {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="py-10 w-full bg-white md:py-16">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="bg-[rgba(13,131,96,0.1)] rounded-[16px] md:rounded-[20px] p-6 md:p-6 relative flex items-center justify-center">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[20px] items-center lg:items-center w-full">
            {/* Left Section - Title & Description */}
            <div className="w-full lg:w-[261px] flex flex-col gap-4 lg:gap-[17px] text-center lg:text-left">
              <h3 className="!leading-[32px] md:!leading-[37px] !font-[600] text-[#010907] m-0 whitespace-pre-wrap text-[24px] md:text-[28px]">
                {title}
              </h3>
              <p className="description text-[14px] md:text-base !leading-[20px] text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
                {description}
              </p>
            </div>

            {/* Center Section - Image */}
            <div className="w-full max-w-[354px] lg:w-[354px] h-[240px] md:h-[280px] lg:h-[304px] rounded-xl overflow-hidden shrink-0">
              <img
                src={quizImage}
                alt="Quiz preview"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Section - Benefits, Button, Cards */}
            <div className="w-full lg:w-[516px] flex flex-col gap-6 md:gap-8 lg:justify-between">
              {/* Bullet Points */}
              <ul className="description text-[14px] md:text-base !leading-[24px] md:!leading-[27px] text-[rgba(1,9,7,0.75)] pl-6 m-0 list-disc">
                <li className="mb-2 md:mb-0">
                  Identify key nutrients and support your body is currently
                  lacking
                </li>
                <li className="mb-2 md:mb-0">
                  Get a recovery routine tailored to your lifestyle and goals
                </li>
                <li className="mb-0">
                  Support faster muscle repair, better sleep, and overall
                  restoration
                </li>
              </ul>

              {/* CTA Button */}
              <button
                className="btn_primary w-full md:w-[281px] h-12"
                onClick={handleQuizClick}
              >
                Take the Quiz & Build Your Plan
              </button>

              {/* Icon Cards - Responsive Grid */}
              <div className="grid grid-cols-1 gap-3 w-full sm:grid-cols-3">
                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl px-2 py-4 w-full min-h-[120px] flex items-center justify-center">
                  <div className="flex flex-col gap-[5px] items-center">
                    <div className="w-8 h-8 shrink-0">
                      <img
                        src={clockIcon}
                        alt="Clock"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="font-inter font-normal text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-center text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
                      Find the right supplements in minutes
                    </p>
                  </div>
                </div>

                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl px-2 py-4 w-full min-h-[120px] flex items-center justify-center">
                  <div className="flex flex-col gap-[5px] items-center">
                    <div className="w-8 h-8 shrink-0">
                      <img
                        src={listIcon}
                        alt="List"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="font-inter font-normal text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-center text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
                      Get personalized supplement recommendations
                    </p>
                  </div>
                </div>

                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl px-2 py-4 w-full min-h-[120px] flex items-center justify-center">
                  <div className="flex flex-col gap-[5px] items-center">
                    <div className="w-8 h-8 shrink-0">
                      <img
                        src={settingsIcon}
                        alt="Settings"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="font-inter font-normal text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-center text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
                      Customize your routine in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCTASection;
