import React from "react";
import CategoryHero from "../components/PageComponents/Category/CategoryHero";
import ProductGrid from "../components/PageComponents/Category/ProductGrid";
import QuizCTASection from "../components/PageComponents/Category/QuizCTASection";
import BackedByScience from "../components/PageComponents/Category/BackedByScience";
import Testimonials from "../components/PageComponents/Home/Testimonials";
import { categoryData } from "../data/categoryData.jsx";
import MetaTags from "../components/PageComponents/MetaTags/MetaTags";

const PhysicalPerformance = () => {
  const data = categoryData["physical-performance"];

  return (
    <>
      <MetaTags
        title="Physical Performance Supplements - Strength & Endurance | OptiGenix"
        description="Feel your best every single day with supplements designed for physical performance. Build strength, boost endurance, and enhance athletic performance."
      />
      <div className="min-h-screen">
        <CategoryHero {...data.hero} />
        <ProductGrid products={data.products} />
        <QuizCTASection
          title={data.quizTitle}
          description={data.quizDescription}
        />
        <BackedByScience />
        <Testimonials />
      </div>
    </>
  );
};

export default PhysicalPerformance;
