import React from "react";
import CategoryHero from "../components/PageComponents/Category/CategoryHero";
import ProductGrid from "../components/PageComponents/Category/ProductGrid";
import QuizCTASection from "../components/PageComponents/Category/QuizCTASection";
import BackedByScience from "../components/PageComponents/Category/BackedByScience";
import Testimonials from "../components/PageComponents/Category/Testimonials";
import { categoryData, testimonialsData } from "../data/categoryData.jsx";
import MetaTags from "../components/PageComponents/MetaTags/MetaTags";

const Recovery = () => {
  const data = categoryData.recovery;

  return (
    <>
      <MetaTags
        title="Recovery Supplements - Daily Whole-Body Wellness | OptiGenix"
        description="Clinically formulated recovery blends to restore energy and speed up recovery. Science-backed supplements for joint health, immune support, and better sleep."
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
        <Testimonials testimonials={testimonialsData} />
      </div>
    </>
  );
};

export default Recovery;
