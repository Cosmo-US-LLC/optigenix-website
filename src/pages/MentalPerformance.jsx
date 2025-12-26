import React from "react";
import CategoryHero from "../components/PageComponents/Category/CategoryHero";
import ProductGrid from "../components/PageComponents/Category/ProductGrid";
import QuizCTASection from "../components/PageComponents/Category/QuizCTASection";
import BackedByScience from "../components/PageComponents/Category/BackedByScience";
import Testimonials from "../components/PageComponents/Home/Testimonials";
import { categoryData } from "../data/categoryData.jsx";
import MetaTags from "../components/PageComponents/MetaTags/MetaTags";

const MentalPerformance = () => {
  const data = categoryData["mental-performance"];

  return (
    <>
      <MetaTags
        title="Mental Performance Supplements - Focus & Clarity | OptiGenix"
        description="Enhance your mental performance with supplements for clarity, focus, and stress balance. Support cognitive energy and sustained mental performance."
      />
      <div className="min-h-screen">
        <CategoryHero {...data.hero} />
        <ProductGrid products={data.products} />
        <QuizCTASection
          title={data.quizTitle}
          description={data.quizDescription}
          quizImage={data.quizImage}
        />
        <BackedByScience scienceImage={data.scienceImage} />
        <Testimonials />
      </div>
    </>
  );
};

export default MentalPerformance;
