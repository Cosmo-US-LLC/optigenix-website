import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuizResults = ({ onRestart }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex items-center justify-center py-12 md:px-4 px-3">
      <div className="w-full max-w-2xl">
        <div className="p-6 text-center bg-white rounded-2xl shadow-xl md:p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[rgba(13,131,96,0.1)] rounded-full p-4">
              <CheckCircle className="w-12 h-12 md:w-20 md:h-20 text-[#0d8360]" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl md:text-4xl font-bold text-[#252525] mb-4 font-funnel">
            Quiz Completed Successfully!
          </h1>
          <p className="text-md md:text-xl text-[#666] md:mb-10 mb-6 font-funnel">
            Thank you for completing the quiz. Your answers have been recorded.
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Next Steps */}
          <h3 className="text-xl md:text-2xl font-bold text-[#252525] mb-4 font-funnel">
            What's Next?
          </h3>
          <p className="text-[#666] mb-8 text-md md:text-lg font-funnel">
            Explore our products or take the quiz again to update your
            preferences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Button
              onClick={() => navigate("/")}
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl font-funnel"
            >
              Explore Products
            </Button>
            <Button
              onClick={onRestart}
              variant="outline"
              size="lg"
              className="border-2 border-[#0d8360] font-funnel text-[#0d8360] hover:bg-[rgba(13,131,96,0.05)] rounded-[33px]"
            >
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
