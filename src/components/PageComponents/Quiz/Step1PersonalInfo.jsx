import React, { useState } from "react";
import QuizHeader from "./QuizHeader";
import QuizNavigation from "./QuizNavigation";

const Step1PersonalInfo = ({ onNext, onBack, previousData }) => {
  const [formData, setFormData] = useState(
    previousData || {
      ageRange: "",
      gender: "",
      height: "",
      weight: "",
    }
  );

  const ageRanges = ["18-24", "25-34", "35-44", "45-54", "55+"];
  const genders = ["Male", "Female", "Other", "Prefer not to say"];

  const handleNext = () => {
    if (
      formData.ageRange &&
      formData.gender &&
      formData.height &&
      formData.weight
    ) {
      onNext(formData);
    }
  };

  const isValid =
    formData.ageRange && formData.gender && formData.height && formData.weight;

  return (
    <div className="min-h-screen bg-[#f1f1f1] py-8">
      <div className="max-w-[929px] mx-auto px-4">
        <div className="bg-white rounded-2xl p-9 min-h-[544px] flex flex-col">
          <QuizHeader
            title="Tell us about yourself"
            currentStep={1}
            totalSteps={7}
          />

          {/* Form Content */}
          <div className="flex-1 flex flex-col gap-[17px]">
            {/* Age Range */}
            <div className="flex flex-col gap-4 py-1">
              <p className="text-[18px] font-semibold text-[#252525] font-funnel">
                What is your age range?
              </p>
              <div className="flex gap-[15px] flex-wrap">
                {ageRanges.map((age) => (
                  <button
                    key={age}
                    onClick={() => setFormData({ ...formData, ageRange: age })}
                    className={`px-4 py-[10px] font-funnel rounded-full border transition-all ${
                      formData.ageRange === age
                        ? "bg-[rgba(13,131,96,0.1)] border-[#0d8360] text-[#0d8360] font-medium"
                        : "border-[rgba(37,37,37,0.1)] text-[rgba(37,37,37,0.9)]"
                    }`}
                  >
                    <span className="text-[16px]">{age}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-4 py-1">
              <p className="text-[18px] font-semibold text-[#252525] font-funnel">
                What is your gender?
              </p>
              <div className="flex gap-[15px] flex-wrap">
                {genders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setFormData({ ...formData, gender })}
                    className={`px-4 py-[10px] rounded-full font-funnel border transition-all ${
                      formData.gender === gender
                        ? "bg-[rgba(13,131,96,0.1)] border-[#0d8360] text-[#0d8360] font-medium"
                        : "border-[rgba(37,37,37,0.1)] text-[rgba(37,37,37,0.9)]"
                    }`}
                  >
                    <span className="text-[16px]">{gender}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Height */}
            <div className="flex flex-col gap-4 py-1">
              <p className="text-[18px] font-semibold text-[#252525] font-funnel">
                What is your height (cm)?
              </p>
              <input
                type="number"
                placeholder="Enter here"
                value={formData.height}
                onChange={(e) =>
                  setFormData({ ...formData, height: e.target.value })
                }
                className="border border-[rgba(37,37,37,0.1)] font-funnel rounded-full px-4 py-[10px] w-full max-w-[486px] text-[16px] placeholder:text-[rgba(37,37,37,0.3)] focus:border-[#0d8360] focus:outline-none"
              />
            </div>

            {/* Weight */}
            <div className="flex flex-col gap-4 py-1">
              <p className="text-[18px] font-semibold text-[#252525] font-funnel">
                What is your weight (kg)?
              </p>
              <input
                type="number"
                placeholder="Enter here"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({ ...formData, weight: e.target.value })
                }
                className="border border-[rgba(37,37,37,0.1)] rounded-full px-4 py-[10px]  w-full max-w-[486px] text-[16px] placeholder:text-[rgba(37,37,37,0.3)] focus:border-[#0d8360] focus:outline-none"
              />
            </div>
          </div>

          {/* Navigation */}
          <QuizNavigation
            onBack={onBack}
            onNext={handleNext}
            showBack={false}
            disabled={!isValid}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1PersonalInfo;
