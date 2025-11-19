import React, { useState } from "react";
import QuizHeader from "./QuizHeader";
import QuizNavigation from "./QuizNavigation";

const StepQuestion = ({
  stepNumber,
  totalSteps,
  question,
  options,
  onNext,
  onBack,
  previousAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    previousAnswer !== undefined ? previousAnswer : null
  );

  const handleNext = () => {
    if (selectedOption !== null) {
      onNext(selectedOption);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] py-8">
      <div className="max-w-[929px] mx-auto px-4">
        <div className="bg-white rounded-2xl p-9 min-h-[544px] flex flex-col">
          <QuizHeader
            title="Personalized Supplement Quiz"
            currentStep={stepNumber}
            totalSteps={totalSteps}
          />

          {/* Question */}
          <div className="flex-1 flex flex-col">
            <div className="mb-6">
              <h2 className="text-[20px] font-semibold text-[#252525] font-['DM_Sans']">
                {stepNumber}. {question}
              </h2>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-4 mb-auto">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(index)}
                  className={`w-full max-w-[431px] px-4 py-[10px] rounded-full border text-left transition-all ${
                    selectedOption === index
                      ? "bg-[rgba(13,131,96,0.1)] border-[#0d8360] text-[#0d8360] font-medium"
                      : "border-[rgba(37,37,37,0.1)] text-[rgba(37,37,37,0.9)] hover:border-[rgba(13,131,96,0.3)]"
                  }`}
                >
                  <span className="text-[16px]">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <QuizNavigation
            onBack={onBack}
            onNext={handleNext}
            showBack={true}
            disabled={selectedOption === null}
          />
        </div>
      </div>
    </div>
  );
};

export default StepQuestion;

