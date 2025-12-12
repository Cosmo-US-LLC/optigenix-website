import React from "react";
import CategoryHero from "../components/PageComponents/AllCategory/CategoryHero";
import PersonalizedSolutions from "../components/PageComponents/AllCategory/PersonalizedSolutions";
import ShopYourFocus from "../components/PageComponents/AllCategory/ShopYourFocus";
import WhatMakesDifferent from "../components/PageComponents/AllCategory/WhatMakesDifferent";
import MeetOurExpert from "../components/PageComponents/AllCategory/MeetOurExpert";
import QualitySection from "../components/PageComponents/AllCategory/QualitySection";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

const AllCategory = () => {
  return (
    <>
      <MetaTags
        title="Explore Custom Health Solutions with DNA Insights"
        description="Discover custom health solutions that combine DNA testing and expert supplements to enhance mental, physical, and recovery performance."
      />
      <div className="min-h-screen">
        <CategoryHero />
        <PersonalizedSolutions />
        <ShopYourFocus />
        <WhatMakesDifferent />
        <MeetOurExpert />
        <QualitySection />
        {/* Additional sections will be added here as you provide more Figma links */}
      </div>
    </>
  );
};

export default AllCategory;
