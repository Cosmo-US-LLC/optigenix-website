import React from "react";
import PrivacyPolicyContent from "../components/PageComponents/PrivacyPolicy/PrivacyPolicyContent";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

const PrivacyPolicy = () => {
  return (
    <>
      <MetaTags
        title="Privacy Policy for Protecting Personal Health Information"
        description="Read our privacy policy to learn how we collect, safeguard, and share your personal health information. Understand your privacy rights and our data protection."
      />
      <div className="min-h-screen bg-white">
        <PrivacyPolicyContent />
      </div>
    </>
  );
};

export default PrivacyPolicy;
