import React from "react";
import { useSearchParams } from "react-router-dom";
import WaitlistComponent from "../components/PageComponents/JoinWaitList/Waitlist";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

const Waitlist = () => {
  const [searchParams] = useSearchParams();

  // Get test type from URL params (e.g., ?test=Blueprint or ?type=Elite)
  const testType = searchParams.get("test") || searchParams.get("type");

  return (
    <>
      <MetaTags
        title="Join the Waitlist for Customized Performance Optimization Plans"
        description="Get early access to customized performance optimization plans, including Blueprint, Elite Program, and blood testing for improved health and fitness."
      />
      <WaitlistComponent defaultSelected={testType} />
    </>
  );
};

export default Waitlist;
