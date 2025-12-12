import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";
import React from "react";

const QuizSecond = () => {
  return (
    <>
      <MetaTags
        title="Complete the Personalized Supplement Quiz for Custom Health Plans"
        description="Take the personalized supplement quiz to get customized health recommendations and supplement suggestions based on your age and lifestyle."
      />
      <iframe
        src="/quiz/index.html"
        style={{ width: "100%", border: "none" }}
        className="md:min-h-[calc(100vh)] min-h-[calc(100vh)]"
      />
    </>
  );
};

export default QuizSecond;
