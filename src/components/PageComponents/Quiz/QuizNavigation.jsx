import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuizNavigation = ({
  onBack,
  onNext,
  showBack = true,
  disabled = false,
}) => {
  return (
    <div className="flex justify-between items-center pt-4 mt-auto w-full">
      {/* Back Button */}
      {showBack ? (
        <Button
          onClick={onBack}
          variant="outline"
          className="border-[#dedede] rounded-[33px]"
        >
          <ArrowLeft className="w-5 h-5 text-[#252525] opacity-50" />
          <span className="text-[16px] font-funnel font-medium text-[#252525] opacity-50">
            Back
          </span>
        </Button>
      ) : (
        <div />
      )}

      {/* Next Button */}
      <Button
        onClick={onNext}
        disabled={disabled}
        variant="primary"
        className={`rounded-[33px] min-w-[122px] ${
          disabled ? "opacity-50" : ""
        }`}
      >
        <span className="text-[16px] font-funnel font-medium text-white">
          Next
        </span>
        <ArrowRight className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
};

export default QuizNavigation;
