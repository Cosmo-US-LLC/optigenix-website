import React, { useState } from "react";

const TermsOfServiceContent = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  // Table of Contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "acceptance", title: "Acceptance and Modification of the Terms" },
    {
      id: "fitness-nutrition",
      title: "Fitness, Nutrition, and Health Information",
    },
    { id: "eligibility", title: "Eligibility" },
    { id: "arbitration", title: "Arbitration and Dispute Resolution" },
    { id: "terms-of-sale", title: "Terms of Sale" },
    { id: "disclaimers", title: "Disclaimers" },
    { id: "contact-information", title: "Contact Information" },
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <section className="bg-white py-6 md:py-[40px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px]">
          {/* Left Side - Title & Table of Contents */}
          <div className="lg:w-[400px] shrink-0 lg:sticky md:top-29 lg:self-start">
            <h2 className=" !text-[#010907] md:text-center md:text-left mb-0 md:mb-4 md:max-w-[280px]">
              Terms and Conditions
            </h2>

            {/* Table of Contents */}
            {/* <div className="lg:max-h-[calc(100vh-200px)] hidden md:block lg:overflow-y-auto lg:pr-4">
              <nav className="flex flex-col pl-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] px-1 py-1  transition-all duration-200 ${
                      activeSection === item.id
                        ? " text-[#0d8360] font-medium border-l-3 border-[#0d8360] pl-3"
                        : "text-[#010907] hover:text-[#0d8360] border-l-3 border-transparent pl-3"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div> */}
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex max-w-[772px] !w-[100%] flex-col gap-6 lg:gap-[32px]">
            {/* Introduction */}
            <div
              id="introduction"
              className="flex flex-col gap-3 lg:gap-[16px] scroll-mt-24"
            >
              <div className="flex flex-col gap-3 lg:gap-[14px]">
                <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                  Introduction
                </h2>
                <p className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  These Terms & Conditions ("Terms") govern your access and use
                  of the websites, and electronic services maintained by
                  OptiGenix, Inc., and/or its subsidiaries or affiliated
                  companies (collectively, "OptiGenix," "we," "us," or "our")
                  that incorporate or link to these Terms (collectively, the
                  "Site") and apply to any purchases on or through the Site.
                </p>
              </div>
              <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                <p className="font-inter font-bold text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  IMPORTANT: PLEASE NOTE THAT SECTION 4 OF THESE TERMS CONTAINS A
                  MANDATORY ARBITRATION PROVISION THAT REQUIRES THE USE OF
                  ARBITRATION ON AN INDIVIDUAL BASIS AND LIMITS THE REMEDIES
                  AVAILABLE TO YOU IN THE EVENT OF CERTAIN DISPUTES.
                </p>
              </div>
            </div>

            {/* Additional Introduction Text */}
            <div className="flex flex-col gap-3 lg:gap-[14px]">
              <p className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                Other terms also apply to your use of the Site, and they are
                incorporated herein by this reference. These include terms that
                will apply to sales promotions and other features which may be
                available on the Site from time to time and our Privacy Policy,
                which applies to any personal data shared on the Site.
              </p>
            </div>

            {/* 1. Acceptance and Modification of the Terms */}
            <div
              id="acceptance"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                1. Acceptance and Modification of the Terms
              </h2>
              <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  By accessing or using the Site, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms and all
                  of the terms incorporated herein by reference. By accessing or
                  using the Site, you expressly provide your affirmative consent
                  to these Terms. If you do not agree to these Terms, you must
                  not access or use the Site.
                </p>
                <p className="mb-4">
                  The Site is based and operated in the United States of
                  America. We make no claims concerning whether the content may
                  be downloaded, viewed, or appropriate for use outside of the
                  United States. If you access or use the Site from outside of
                  the United States, you do so on your own initiative and at
                  your own risk. Whether within or outside of the United States,
                  you are solely responsible for ensuring compliance with the
                  laws of your specific jurisdiction.
                </p>
                <p>
                  We may modify these Terms from time to time at our sole
                  discretion. If we decide to modify these Terms, we will notify
                  you by making the revised version available on the Site and
                  will indicate at the top of this page the date that revisions
                  were last made. Any such changes will be effective upon our
                  posting. You are responsible for staying informed of any
                  changes and are expected to revisit this page from time to
                  time, as revised versions will be binding on you. You
                  understand and agree that your continued access or use of the
                  Site following the posting of revised Terms indicates your
                  acceptance of and agreement to the changes. If you do not
                  agree with the modified Terms, you must stop accessing or
                  using the Site.
                </p>
              </div>
            </div>

            {/* 2. Fitness, Nutrition, and Health Information */}
            <div
              id="fitness-nutrition"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                2. Fitness, Nutrition, and Health Information
              </h2>
              <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  OptiGenix provides personalized supplement sachets and
                  pre-formulated QuickPacks and other related services
                  (collectively, "Products"). Through our Site, we offer
                  quiz-based wellness recommendations and an option for both
                  one-time purchases and automatically recurring subscription
                  services (collectively, "Service") for the supplement sachets
                  and pre-formulated QuickPacks purchased through our Site.
                </p>
                <p>
                  Information presented on the Site is intended to impart
                  general fitness, nutrition, and health information. OptiGenix
                  is not engaged in rendering medical advice or services, and
                  submission of information to the Site and use of any services
                  available on the Site does not create a doctor-patient
                  relationship.
                </p>
              </div>
              <div className="bg-[#fff3f3] rounded-[8px] p-4 lg:p-[16px]">
                <p className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  THE INFORMATION PRESENTED ON THE SITE IS NOT INTENDED FOR
                  TREATMENT OR DIAGNOSTIC PURPOSES. Always consult your doctor
                  for medical advice or treatment, especially if you're dealing
                  with a health condition, illness, or are considering a new
                  diet or wellness program. This includes any Service or content
                  found on the Site. It's particularly important to speak with
                  your doctor if you're under 18, pregnant, breastfeeding, or
                  have any existing health concerns. Never ignore or delay
                  seeking professional medical advice because of something
                  you've read on the Site. OptiGenix supplement sachets and
                  pre-formulated QuickPacks are not intended to diagnose, treat,
                  cure, or prevent any disease.
                </p>
              </div>
            </div>

            {/* 3. Eligibility */}
            <div
              id="eligibility"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                3. Eligibility
              </h2>
              <p className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                The Site is not targeted toward or intended for use by anyone
                under the age of eighteen (18). By using the Site, you represent
                and warrant that you: (a) are (i) eighteen (18+) years of age or
                older or (ii) legal age to form a binding contract with
                OptiGenix, (b) have not been previously suspended or removed
                from the Site, and (c) have full power and authority to enter
                into these Terms and in so doing will not violate any other
                agreement to which you are a party.
              </p>
            </div>

            {/* 4. Arbitration and Dispute Resolution */}
            <div
              id="arbitration"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                4. Arbitration and Dispute Resolution
              </h2>
              <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                <p className="font-inter font-bold text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS.
                </p>
              </div>
              <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  If you are located in, are based in, have offices in, or do
                  business in a jurisdiction in which this Section 4 is
                  enforceable, the following mandatory arbitration provisions
                  apply to you.
                </p>
                <p className="mb-4">
                  Most customer concerns can be quickly resolved and to the
                  customer's satisfaction by emailing us at:
                  "support@optigenix.co".
                </p>
                <p className="mb-4">
                  In the event that we are not able to resolve a dispute, you
                  and OptiGenix each agree that any and all disputes,
                  controversies, or claims (whether in contract, tort, or under
                  any statute, regulation, ordinance, or any other source of
                  law) arising under or relating in any way to this agreement,
                  or to the Products or the Site shall be resolved on an
                  individual basis through binding arbitration administered by
                  the American Arbitration Association, in accordance with the
                  American Arbitration Association's then-existing rules for
                  arbitration of consumer-related disputes (accessible at
                  https://www.adr.org/Rules), except that you may assert
                  individual claims in small claims court, if your claims
                  qualify.
                </p>
                <p className="mb-4">
                  You and OptiGenix each expressly waive any right to trial by
                  jury and the right to participate in a class action lawsuit or
                  class-wide arbitration. Neither you nor OptiGenix shall be
                  permitted or entitled to join or consolidate claims by or
                  against others or arbitrate or otherwise participate in any
                  claims as a class member or class representative.
                </p>
                <p className="mb-4">
                  The arbitration will be conducted by a single, neutral
                  arbitrator and will take place in a mutually agreeable
                  location, in the English language. All issues are for the
                  arbitrator to decide, including (but not limited to) issues
                  relating to the scope and enforceability of this agreement to
                  arbitrate and the arbitrability of any dispute between you and
                  OptiGenix. The arbitrator may award any relief that a court of
                  competent jurisdiction could award, including attorneys' fees
                  when authorized by law. Judgment on the award rendered by the
                  arbitrator may be entered in any court having jurisdiction
                  thereof. At your request, hearings may be conducted in person
                  or by telephone, and the arbitrator may provide for submitting
                  and determining motions on briefs, with or without oral
                  hearings. OptiGenix agrees that, upon request, it will pay a
                  consumer's filing fee for the arbitration.
                </p>
                <p className="mb-4">
                  For the benefit of the parties, all aspects of the arbitration
                  proceeding, including (but not limited to) the transcripts of
                  the hearing, the transcript of any deposition, and all
                  documents produced or used during the arbitration proceeding,
                  will be strictly confidential.
                </p>
                <p className="mb-4">
                  The Federal Arbitration Act governs the interpretation and
                  enforcement of this agreement to arbitrate. If a court decides
                  that any provision of this Section is invalid or
                  unenforceable, that provision will be severed and the other
                  parts of this paragraph (and the remainder of these terms)
                  will continue to apply, but in no case shall either you or
                  OptiGenix be permitted to participate in a class action
                  lawsuit or class-wide arbitration.
                </p>
                <p>
                  Notwithstanding the foregoing, you may decline or opt out of
                  this agreement to arbitrate by sending written and signed
                  notice to "support@optigenix.co" within thirty (30) calendar
                  days of signing up for the Services for the vitamins and
                  nutritional supplements purchased through the Site.
                </p>
              </div>
            </div>

            {/* 5. Terms of Sale */}
            <div
              id="terms-of-sale"
              className="flex flex-col gap-5 lg:gap-[24px] scroll-mt-24"
            >
              <div className="flex flex-col gap-3 lg:gap-[14px]">
                <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                  5. Terms of Sale
                </h2>
                <div className="flex flex-col gap-2 lg:gap-[12px]">
                  <h3 className="font-['Funnel_Display'] font-medium !text-[18px] lg:!text-[20px] leading-[26px] lg:leading-[28px] text-[#010907]">
                    Subscriptions and Auto Renewal
                  </h3>
                  <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                    <p className="mb-4">
                      <span className="font-bold">Subscriptions:</span>{" "}
                      OptiGenix provides an automatically recurring subscription
                      service for the personalized supplement sachets and
                      pre-formulated QuickPacks purchased through our Site. If
                      you enroll in the subscription service, approximately
                      every four (4) weeks you will receive a package from
                      OptiGenix containing a thirty (30)-day supply of the
                      supplement sachets and pre-formulated QuickPacks in your
                      subscription, and your subscription will automatically
                      renew, and you will continue to be charged on a recurring
                      basis until you cancel. You can find specific details
                      regarding your order and the OptiGenix subscription
                      service by accessing the Site and your Account details.
                    </p>
                    <p>
                      <span className="font-bold">Auto Renewal:</span> Payments
                      must be made using a credit card, debit card or other
                      available online payment method (e.g., PayPal) ("Payment
                      Method"). The charge for each shipment will be billed to
                      the Payment Method used to create your Account and enroll
                      in the subscription service or as otherwise provided by
                      you. You authorize OptiGenix or its third-party payment
                      processor to store your Payment Method and to
                      automatically charge your Payment Method on a recurring
                      basis without notice until you cancel. If the primary
                      Payment Method associated with your Account fails, you
                      authorize OptiGenix or its third-party payment processor
                      to charge any other Payment Method provided with your
                      Account or to contact you to update your Payment Method.
                      If you have not provided an alternative Payment Method and
                      fail to update your Payment Method to provide payment, or
                      if all Payment Methods associated with your Account fail,
                      we will cancel your subscription.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  <p className="mb-2 font-bold">
                    IMPORTANT SUBSCRIPTION NOTICE:
                  </p>
                  <p className="mb-2">&nbsp;</p>
                  <p>
                    WHEN YOU ENROLL IN THE SUBSCRIPTION SERVICE, YOU EXPRESSLY
                    ACKNOWLEDGE AND AGREE THAT (A) YOU ARE STARTING A
                    SUBSCRIPTION SERVICE WITH AN INITIAL AND RECURRING PAYMENT
                    FEATURE WHICH WILL AUTOMATICALLY RENEW ON A MONTHLY BASIS
                    UNTIL YOU CANCEL IT OR WE SUSPEND OR STOP PROVIDING ACCESS
                    TO THE SITE OR PRODUCTS IN ACCORDANCE WITH THESE TERMS, AND
                    (B) YOU AUTHORIZE OPTIGENIX (OR OUR THIRD-PARTY PAYMENT
                    PROCESSOR) TO AUTOMATICALLY CHARGE YOUR PAYMENT METHOD THE
                    TOTAL PRICE FOR THE ITEMS IN YOUR SUBSCRIPTION ON THE DATE
                    THAT ORDER INVOICED (IN ADDITION TO ANY APPLICABLE TAXES AND
                    OTHER CHARGES) UNLESS AND UNTIL YOU CANCEL.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:gap-[12px]">
                <div className="flex flex-col gap-3 lg:gap-[14px]">
                  <h3 className="font-['Funnel_Display'] font-medium !text-[18px] lg:!text-[20px] leading-[26px] lg:leading-[28px] text-[#010907]">
                    Cancellation Policy
                  </h3>
                </div>
                <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                  <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                    <p className="mb-2 font-bold">CANCELLATION POLICY:</p>
                    <p className="mb-2">&nbsp;</p>
                    <p>
                      YOUR SUBSCRIPTION WILL AUTOMATICALLY RENEW UNTIL YOU
                      CANCEL. YOU MAY CANCEL AT ANY TIME BY E-MAIL AT
                      "SUPPORT@OPTIGENIX.CO", OR VIA THE 'ORDER TIMELINE' TAB IN
                      YOUR ONLINE ACCOUNT. YOU MUST CANCEL YOUR SUBSCRIPTION
                      WITHIN FORTY-EIGHT (48) HOURS AFTER RECEIVING NOTICE OF
                      UPCOMING CHARGES FOR YOUR SUBSCRIPTION ORDER. SHOULD YOU
                      CANCEL AFTER THAT TIME FRAME, YOU WILL BE CHARGED ON THE
                      INVOICE DATE AND RESPONSIBLE FOR ALL CHARGES (INCLUDING
                      ANY APPLICABLE TAXES AND OTHER CHARGES) INCURRED WITH
                      RESPECT TO ANY ORDER IDENTIFIED AS OUTSTANDING PRIOR TO
                      THE CANCELLATION OF YOUR SUBSCRIPTION.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:gap-[16px]">
                <div className="flex flex-col gap-3 lg:gap-[14px]">
                  <h3 className="font-['Funnel_Display'] font-medium !text-[18px] lg:!text-[20px] leading-[26px] lg:leading-[28px] text-[#010907]">
                    Returns, Refunds, or Exchanges
                  </h3>
                </div>
                <p className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  If you are dissatisfied with a Product or ingredient for any
                  reason, you must contact us at "support@optigenix.co" within
                  fourteen (14) days of the date your order was received and we
                  will either replace the Product at our expense or, depending
                  on the circumstances, provide you a full or partial credit or
                  refund of the purchase price for that order. We may require
                  the return or photographic documentation of any Product with
                  which you are dissatisfied before we provide you with a
                  replacement, credit, or refund. If you do not contact us
                  within fourteen (14) days of your first order, we will not
                  refund, credit or replace your product. Unauthorized returns
                  will not be credited or replaced under any circumstances.
                </p>
              </div>
            </div>

            {/* 9. Disclaimers */}
            <div
              id="disclaimers"
              className="flex flex-col gap-5 lg:gap-[25px] scroll-mt-24"
            >
              <div className="flex flex-col gap-3 lg:gap-[16px]">
                <div className="flex flex-col gap-3 lg:gap-[14px]">
                  <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                    9. Disclaimers
                  </h2>
                </div>
                <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                  <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                    <p className="mb-2 font-bold">PRODUCT SAFETY NOTICE:</p>
                    <p className="mb-2">&nbsp;</p>
                    <p>
                      UPON DELIVERY, YOU ARE SOLELY RESPONSIBLE FOR THE PROPER
                      AND SAFE, HANDLING, STORAGE, USE, AND CONSUMPTION OF THE
                      PRODUCTS YOU RECEIVE FROM US. YOU ARE ALSO SOLELY
                      RESPONSIBLE FOR KNOWING ABOUT ANY FOOD ALLERGIES YOU MAY
                      HAVE AND VERIFYING THE PRODUCTS BEFORE CONSUMING SUCH
                      PRODUCTS, INCLUDING READING ANY WARNINGS OR INFORMATION
                      PROVIDED ON THE PACKAGE RELATED TO ALLERGENS AND INGREDIENTS.
                    </p>
                  </div>
                </div>
                <p className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  EXCEPT AS MAY BE PROVIDED IN A WARRANTY BY THE MANUFACTURER OF
                  A PRODUCT, ALL PRODUCTS AND THE SITE AND CONTENT ARE PROVIDED
                  ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
                  EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY
                  APPLICABLE LAW, OPTIGENIX DISCLAIMS ALL OTHER WARRANTIES,
                  EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, TITLE AND NON-INFRINGEMENT AS TO THE SITE, CONTENT
                  AND PRODUCTS.
                </p>
              </div>
            </div>

            {/* 14. Contact Information */}
            <div
              id="contact-information"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] !font-medium !text-[18px] lg:!text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                14. Contact Information
              </h2>
              <p className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                For questions or concerns about these Terms, please contact:
              </p>
              <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                <div className="font-inter text-[14px] lg:!text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  <p className="mb-2">
                    <span className="font-bold">Address:</span> 2991 Sacramento
                    St #541, Berkeley, CA 94702
                  </p>
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    <a
                      href="mailto:support@optigenix.co"
                      className="underline hover:text-[#0d8360] transition-colors"
                    >
                      support@optigenix.co
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceContent;
