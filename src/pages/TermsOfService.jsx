import React from "react";
import TermsOfServiceContent from "../components/PageComponents/TermsOfService/TermsOfServiceContent";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

const TermsOfService = () => {
  return (
    <>
      <MetaTags
        title="Terms for Subscription, Health Product Use, and Performance Services"
        description="Read the terms for subscription, health product usage, cancellations, and performance services. Understand your rights and obligations for health solutions."
      />
      <div className="min-h-screen bg-white">
        <TermsOfServiceContent />
      </div>
    </>
  );
};

export default TermsOfService;
