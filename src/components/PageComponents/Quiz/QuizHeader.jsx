import React from "react";

const QuizHeader = ({ title, currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep - 1) / totalSteps) * 100;

  return (
    <div className="flex flex-col gap-4 mb-8 w-full">
      {/* Title and Step Indicator */}
      <div className="flex justify-between items-end">
        <h1 className="text-[28px] font-semibold text-[#252525] font-funnel">
          {title}
        </h1>
        <p className="text-[18px] font-semibold text-[#0d8360] font-funnel tracking-[-0.36px]">
          Step {currentStep} to {totalSteps}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-6">
        <div className="absolute bg-[#e9eaeb] opacity-60 h-2 left-0 right-0 rounded top-2" />
        <div
          className="absolute h-2 left-0 top-2 rounded bg-[#0d8360] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default QuizHeader;
