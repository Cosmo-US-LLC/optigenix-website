import React from "react";
import WaitlistComponent from "../components/PageComponents/JoinWaitList/Waitlist";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

const Waitlist = () => {
  return (
    <>
      <MetaTags
        title="Join the Waitlist for Customized Performance Optimization Plans"
        description="Get early access to customized performance optimization plans, including Blueprint, Elite Program, and blood testing for improved health and fitness."
      />
      <WaitlistComponent />
    </>
  );
};

export default Waitlist;
