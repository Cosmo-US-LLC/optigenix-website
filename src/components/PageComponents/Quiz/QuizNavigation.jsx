import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const QuizNavigation = ({ onBack, onNext, showBack = true, disabled = false }) => {
  return (
    <div className="flex items-center justify-between w-full mt-auto pt-4">
      {/* Back Button */}
      {showBack ? (
        <button
          onClick={onBack}
          className="border border-[#dedede] px-4 py-3 rounded-[33px] flex items-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-[#252525] opacity-50" />
          <span className="text-[16px] font-medium text-[#252525] opacity-50">
            Back
          </span>
        </button>
      ) : (
        <div />
      )}

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={disabled}
        className={`px-4 py-3 rounded-[33px] flex items-center gap-2 min-w-[122px] justify-center transition-colors ${
          disabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#0d8360] hover:bg-[#0a6b4f]"
        }`}
      >
        <span className="text-[16px] font-medium text-white">Next</span>
        <ArrowRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default QuizNavigation;

