import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const QuizResults = ({ onRestart }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <div className="p-8 text-center bg-white rounded-2xl shadow-xl md:p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[rgba(13,131,96,0.1)] rounded-full p-4">
              <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-[#0d8360]" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#252525] mb-4 font-['DM_Sans']">
            Quiz Completed Successfully!
          </h1>
          <p className="text-lg md:text-xl text-[#666] mb-10">
            Thank you for completing the quiz. Your answers have been recorded.
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Next Steps */}
          <h3 className="text-2xl font-bold text-[#252525] mb-4 font-['DM_Sans']">
            What's Next?
          </h3>
          <p className="text-[#666] mb-8 text-lg">
            Explore our products or take the quiz again to update your
            preferences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <button
              onClick={() => navigate("/")}
              className="bg-[#0d8360] hover:bg-[#0a6b4f] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Explore Products
            </button>
            <button
              onClick={onRestart}
              className="border-2 border-[#0d8360] text-[#0d8360] px-8 py-4 rounded-full hover:bg-[rgba(13,131,96,0.05)] transition-all duration-300 font-semibold text-lg"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
