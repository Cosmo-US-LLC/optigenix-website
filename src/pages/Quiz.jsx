import React, { useState } from "react";
import Step1PersonalInfo from "../components/PageComponents/Quiz/Step1PersonalInfo";
import QuizResults from "../components/PageComponents/Quiz/QuizResults";

const Quiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleStep1Next = (data) => {
    setAnswers(data);
    setShowResults(true);
  };

  const handleRestart = () => {
    setShowResults(false);
    setAnswers({});
  };

  if (showResults) {
    return <QuizResults onRestart={handleRestart} answers={answers} />;
  }

  return (
    <Step1PersonalInfo
      onNext={handleStep1Next}
      previousData={answers}
    />
  );
};

export default Quiz;
