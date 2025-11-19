import React, { useState } from "react";
import Step1PersonalInfo from "../components/PageComponents/Quiz/Step1PersonalInfo";
import StepQuestion from "../components/PageComponents/Quiz/StepQuestion";
import QuizResults from "../components/PageComponents/Quiz/QuizResults";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 7;

  // Define quiz questions
  const questions = [
    {
      question: "What is your primary goal right now?",
      options: [
        "Recover faster and reduce soreness",
        "Increase strength or endurance",
        "Improve focus, mood, or mental clarity",
        "Strengthen immunity and overall vitality",
      ],
    },
    {
      question: "How active are you on a typical week?",
      options: [
        "Light activity (1–2 easy sessions or walks)",
        "Moderate activity (3–4 structured workouts)",
        "Intense or competitive activity (5+ intense sessions)",
      ],
    },
    {
      question: "How do you typically feel after workouts or long days?",
      options: [
        "I feel refreshed and ready to go again",
        "Slightly sore or fatigued, but manageable",
        "Very sore, stiff, or drained",
        "More mentally drained than physically tired",
      ],
    },
    {
      question: "How would you describe your sleep and stress levels?",
      options: [
        "I sleep well and manage stress well",
        "Sleep is okay and stress comes and goes",
        "I struggle with sleep and frequent stress",
        "I have poor sleep and high stress most of the time",
      ],
    },
    {
      question: "How often do you experience joint pain or stiffness?",
      options: [
        "Rarely or never",
        "Occasionally, but it's not too bothersome",
        "It happens often, especially after activity",
        "It's a persistent issue that affects my daily life",
      ],
    },
    {
      question: 'How often do you feel low energy or "run down"?',
      options: [
        "Rarely – I feel energized most of the time",
        "Occasionally, but I bounce back quickly",
        "Often, I feel drained or fatigued",
        "I feel low energy and fatigued all the time",
      ],
    },
  ];

  const handleStep1Next = (data) => {
    setAnswers({ ...answers, step1: data });
    setCurrentStep(2);
  };

  const handleStepNext = (answer) => {
    setAnswers({ ...answers, [`step${currentStep}`]: answer });

    if (currentStep === totalSteps) {
      setShowResults(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setAnswers({});
    setShowResults(false);
  };

  // Show results
  if (showResults) {
    return <QuizResults onRestart={handleRestart} />;
  }

  // Render Step 1 (Personal Info)
  if (currentStep === 1) {
    return (
      <Step1PersonalInfo
        onNext={handleStep1Next}
        onBack={handleBack}
        previousData={answers.step1}
      />
    );
  }

  // Render other steps (Questions 2-7)
  const questionIndex = currentStep - 2;
  return (
    <StepQuestion
      key={currentStep}
      stepNumber={currentStep}
      totalSteps={totalSteps}
      question={questions[questionIndex].question}
      options={questions[questionIndex].options}
      onNext={handleStepNext}
      onBack={handleBack}
      previousAnswer={answers[`step${currentStep}`]}
    />
  );
};

export default Quiz;
