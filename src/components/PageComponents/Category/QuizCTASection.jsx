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
    <div className="bg-white py-10 w-full ">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="bg-[rgba(13,131,96,0.1)] rounded-[20px] h-[354px] relative flex items-center justify-center">
          <div className="flex gap-[20px] items-center">
            {/* Left Section - Title & Description */}
            <div className="w-[261px] flex flex-col gap-[17px]">
              <h3 className="!leading-[37px] !font-[600] text-[#010907] m-0 whitespace-pre-wrap">
                {title}
              </h3>
              <p className="description text-base !leading-[20px] text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
                {description}
              </p>
            </div>

            {/* Center Section - Image */}
            <div className="w-[354px] h-[304px] rounded-xl overflow-hidden">
              <img
                src={quizImage}
                alt="Quiz preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Section - Benefits, Button, Cards */}
            <div className="w-[516px] h-[304px] flex flex-col justify-between">
              {/* Bullet Points */}
              <ul className="description text-base !leading-[27px] text-[rgba(1,9,7,0.75)] pl-6 m-0 list-disc">
                <li className="mb-0">
                  Identify key nutrients and support your body is currently
                  lacking
                </li>
                <li className="mb-0">
                  Get a recovery routine tailored to your lifestyle and goals
                </li>
                <li className="mb-0">
                  Support faster muscle repair, better sleep, and overall
                  restoration
                </li>
              </ul>

              {/* CTA Button */}
              <button
                className="btn_primary w-[281px] h-12 "
                onClick={handleQuizClick}
              >
                Take the Quiz & Build Your Plan
              </button>

              {/* Icon Cards */}
              <div className="flex gap-3">
                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl px-2 py-0 w-[135px] h-[128px] flex items-center justify-center">
                  <div className="flex flex-col gap-[5px] items-center">
                    <div className="w-8 h-8">
                      <img
                        src={clockIcon}
                        alt="Clock"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-inter font-normal text-[14px] leading-[20px] text-center text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
                      Find the right supplements in minutes
                    </p>
                  </div>
                </div>

                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl px-2 py-0 w-[135px] h-[128px] flex items-center justify-center">
                  <div className="flex flex-col gap-[5px] items-center">
                    <div className="w-8 h-8">
                      <img
                        src={listIcon}
                        alt="List"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-inter font-normal text-[14px] leading-[20px] text-center text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
                      Get personalized supplement recommendations
                    </p>
                  </div>
                </div>

                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl px-2 py-0 w-[135px] h-[128px] flex items-center justify-center">
                  <div className="flex flex-col gap-[5px] items-center">
                    <div className="w-8 h-8">
                      <img
                        src={settingsIcon}
                        alt="Settings"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-inter font-normal text-[14px] leading-[20px] text-center text-[rgba(1,9,7,0.75)] m-0 whitespace-pre-wrap">
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
