import React from "react";
import BackedByScience from "@/components/PageComponents/SinglePage/BackedByScience";
import IncludedTestKit from "@/components/PageComponents/SinglePage/IncludedTestKit";
import SingleTestHowItsWork from "@/components/PageComponents/SinglePage/SingleTestHowItsWork";
import SinglePageFAQs from "@/components/PageComponents/SinglePage/SinglePageFAQs";
import StartDNATest from "@/components/PageComponents/SinglePage/StartDNATest";
import GeneTest from "@/components/PageComponents/SinglePage/GeneTest";
import SingleTestHero from "@/components/PageComponents/SinglePage/SingleTestHero";
import Biomarker from "@/components/PageComponents/SinglePage/Biomarker";
import BenefitsYouGet from "@/components/PageComponents/SinglePage/BenefitsYouGet";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

function SingleTest() {
  return (
    <>
      <MetaTags
        title="Order Genetic Testing Kit for Personalized Health Insights"
        description="Unlock personalized health insights with a genetic testing kit. Discover your nutrition, vitamin absorption, and more for better fitness and wellness."
      />
      <SingleTestHero productId="prod_TiTbpgcnqcuA5d" />
      {/* <GeneTest /> */}
      <Biomarker />
      <StartDNATest />
      <SingleTestHowItsWork />
      <IncludedTestKit />
      <BenefitsYouGet />
      <BackedByScience />
      <SinglePageFAQs />
    </>
  );
}

export default SingleTest;
