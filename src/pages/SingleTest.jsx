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

function SingleTest() {
  return (
    <>
      <SingleTestHero />
      <GeneTest />
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
