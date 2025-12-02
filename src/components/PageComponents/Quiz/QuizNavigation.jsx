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
    <div className="flex justify-center items-center pt-8 mt-auto w-full">
      {/* Back Button */}
      {/* {showBack ? (
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
      )} */}

      {/* Next Button */}
      <Button
        onClick={onNext}
        disabled={disabled}
        variant="primary"
        className={`rounded-[33px] ${
          disabled ? "opacity-50 !h-[48px] !min-w-[190px]" : "!min-w-[190px] !h-[48px]"
        }`}
      >
        <span className="text-[16px] font-funnel font-medium text-white">
          See My Results
        </span>
      </Button>
    </div>
  );
};

export default QuizNavigation;
