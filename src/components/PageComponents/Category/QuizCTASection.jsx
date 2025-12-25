import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCTASection = ({ title, description }) => {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="bg-white py-10 w-full">
      <div className="max-w-[1440px] mx-auto px-[60px]">
        <div className="bg-[rgba(13,131,96,0.1)] rounded-[20px] h-[354px] relative flex items-center justify-center">
          <div className="flex gap-[59px] items-center max-w-full px-10">
            <div className="w-[261px] flex flex-col gap-[17px]">
              <h2 className="font-funnel font-semibold text-[32px] leading-[37px] text-[#010907] m-0">
                {title}
              </h2>
              <p className="font-inter font-normal text-base leading-5 text-[rgba(1,9,7,0.75)] m-0">
                {description}
              </p>
            </div>

            <div className="w-[354px] h-[304px] rounded-xl overflow-hidden">
              {/* Placeholder for Complete_picture.webp */}
              <div className="w-full h-full bg-gradient-to-br from-[#0d8360] to-[#042b24] flex items-center justify-center text-5xl text-white font-bold font-funnel">
                <span>Quiz</span>
              </div>
            </div>

            <div className="w-[516px] h-[304px] flex flex-col justify-between">
              <ul className="font-inter font-normal text-base leading-[27px] text-[rgba(1,9,7,0.75)] pl-6 m-0">
                <li className="mb-2">
                  Identify key nutrients and support your body is currently lacking
                </li>
                <li className="mb-2">
                  Get a recovery routine tailored to your lifestyle and goals
                </li>
                <li className="mb-2">
                  Support faster muscle repair, better sleep, and overall restoration
                </li>
              </ul>

              <button
                className="bg-[#0d8360] text-white font-funnel font-semibold text-base leading-5 capitalize py-[14px] px-4 rounded-full border-none cursor-pointer w-[281px] transition-colors duration-300 hover:bg-[#0a6b50]"
                onClick={handleQuizClick}
              >
                Take the Quiz & Build Your Plan
              </button>

              <div className="flex gap-3">
                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl p-2 w-[135px] h-[128px] flex flex-col gap-[5px] items-center justify-center">
                  <div className="text-[32px]">⏱️</div>
                  <p className="font-inter font-normal text-sm leading-5 text-center text-[rgba(1,9,7,0.75)] m-0">
                    Find the right supplements in minutes
                  </p>
                </div>
                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl p-2 w-[135px] h-[128px] flex flex-col gap-[5px] items-center justify-center">
                  <div className="text-[32px]">📋</div>
                  <p className="font-inter font-normal text-sm leading-5 text-center text-[rgba(1,9,7,0.75)] m-0">
                    Get personalized supplement recommendations
                  </p>
                </div>
                <div className="bg-[#f8fffd] backdrop-blur-[7px] border border-[rgba(255,255,255,0.1)] rounded-2xl p-2 w-[135px] h-[128px] flex flex-col gap-[5px] items-center justify-center">
                  <div className="text-[32px]">⚙️</div>
                  <p className="font-inter font-normal text-sm leading-5 text-center text-[rgba(1,9,7,0.75)] m-0">
                    Customize your routine in seconds.
                  </p>
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
