import React, { useState } from "react";

const PrivacyPolicyContent = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  // Table of Contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "personal-information", title: "Personal Information We Collect" },
    { id: "cookies-tracking", title: "Cookies and Tracking Technologies" },
    { id: "how-we-use", title: "How We Use Your Personal Information" },
    { id: "sharing-information", title: "Sharing Your Personal Information" },
    { id: "data-security", title: "Data Security and Retention" },
    { id: "third-party-links", title: "Third-Party Links & Cookies" },
    { id: "children-under-16", title: "Children Under the Age of 16" },
    { id: "do-not-track", title: "Do Not Track" },
    { id: "data-access-rights", title: "Data Access Rights" },
    { id: "opt-out", title: "Right to Opt-Out of Marketing Communications" },
    { id: "changes", title: "Changes" },
    { id: "contact-us", title: "Contact Us" },
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
          <div className="lg:w-[500px] shrink-0 lg:sticky md:top-29 lg:self-start">
            <h1 className="!text-[#010907] text-center md:text-left mb-0 md:mb-4">
              Privacy Policy
            </h1>

            {/* Table of Contents */}
            <div className="hidden md:block lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto lg:pr-4 ">
              <nav className="flex flex-col pl-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] px-1 py-1 transition-all duration-200 ${
                      activeSection === item.id
                        ? " text-[#0d8360] font-medium border-l-3 border-[#0d8360] pl-3"
                        : "text-[#010907] hover:text-[#0d8360] border-l-3 border-transparent pl-3"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-[32px]">
            {/* Introduction */}
            <div
              id="introduction"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Introduction
              </h2>
              <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  This Privacy Policy ("Policy") describes how OptiGenix
                  Corporation ("OptiGenix," "we," "us," "our") collects, uses,
                  and shares your personal information when you visit, contact
                  us through, or complete a financial transaction on our
                  website, https://www.optigenix.co (the "Site").
                </p>
                <p>
                  Please read this Policy carefully to understand our practices
                  regarding your information. By accessing or using the Site,
                  you are indicating your consent to this Policy. If you do not
                  agree to this Policy, you may not use or access our Site.
                </p>
              </div>
            </div>

            {/* Personal Information We Collect */}
            <div
              id="personal-information"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Personal Information We Collect
              </h2>
              <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  When you visit the Site, we automatically collect certain
                  information about your device, including information about
                  your web browser, device information, application usage data,
                  information and IP addresses. We refer to this
                  automatically-collected information as "Device Information."
                </p>
                <p className="mb-4">
                  Additionally, when you submit a form on the Site, we collect
                  certain information provided by you, including:
                </p>
                <ul className="pl-6 space-y-3 list-disc">
                  <li>
                    <span className="font-bold">Identifiers:</span> This
                    includes your name, mailing address, email address, mobile
                    and telephone phone number, IP address
                  </li>
                  <li>
                    <span className="font-bold">Account Login Data:</span> Any
                    data that is required to give you access to your specific
                    account profile. Examples include your login ID/email
                    address, screen name, password in unrecoverable form, and/or
                    security question and answer
                  </li>
                  <li>
                    <span className="font-bold">Demographic Data:</span> Any
                    data that describes your demographic or behavioral
                    characteristics. Examples include your date of birth, age
                    range, geographic location (e.g., ZIP code)
                  </li>
                  <li>
                    <span className="font-bold">
                      Transactional Information:
                    </span>{" "}
                    When you make a purchase or return, we collect information
                    about the transaction, such as product details, purchase
                    price, and date and location of the transaction
                  </li>
                  <li>
                    <span className="font-bold">
                      Characteristics of Protected Classifications under
                      California or Federal Law:
                    </span>{" "}
                    This includes your age and gender
                  </li>
                  <li>
                    <span className="font-bold">
                      Sensitive Personal Information:
                    </span>{" "}
                    This includes health information, medical conditions,
                    nutrition, supplement intake, dietary preferences, weight
                    and fitness-related goals/activities, and exercise habits
                    and goals
                  </li>
                </ul>
                <p className="mt-4">
                  We refer to the aforementioned forms of information as "Form
                  Information."
                </p>
              </div>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div
              id="cookies-tracking"
              className="flex flex-col gap-5 lg:gap-[25px] scroll-mt-24"
            >
              <div className="flex flex-col gap-3 lg:gap-[16px]">
                <div className="flex flex-col gap-3 lg:gap-[14px]">
                  <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                    We collect Device Information using the following
                    technologies:
                  </p>
                </div>
                <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                  <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                    <p className="mb-1 font-bold">Cookies:</p>
                    <p className="mb-4">
                      "Cookies" are data files that are placed on your device or
                      computer and often include an anonymous unique identifier.
                      For more information about cookies, and how to disable
                      cookies, visit http://www.allaboutcookies.org.
                    </p>
                    <p className="mb-1 font-bold">Log Files:</p>
                    <p className="mb-4">
                      "Log files" track actions occurring on the Site, and
                      collect data including your IP address, browser type,
                      Internet service provider, referring/exit pages, and
                      date/time stamps.
                    </p>
                    <p className="mb-1 font-bold">
                      Web Beacons, Tags, and Pixels:
                    </p>
                    <p>
                      "Web beacons," "tags," and "pixels" are electronic files
                      used to record information about how you browse the Site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Analytics */}
              <div className="flex flex-col gap-2 lg:gap-[12px]">
                <h3 className="font-['Funnel_Display'] font-medium text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] text-[#010907]">
                  Google Analytics
                </h3>
                <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  We use Google Analytics, a web analysis service provided by
                  Google, together with other analytics services, in order to
                  better understand your use of the Site and how we can improve
                  them. Google Analytics collects information such as how often
                  users visit a website, what pages you visit when you do so,
                  and what other websites you used prior to coming to such
                  website. Google Analytics collects only the IP address
                  assigned to you on the date you visit a website, rather than
                  your name or other directly identifying information. We do not
                  combine the information collected through the use of Google
                  Analytics with your Personal Information. Although Google
                  Analytics plants a persistent cookie on your web browser to
                  identify you as a unique user the next time you visit a
                  website, the cookie cannot be used by anyone but Google.
                  Google Analytics uses its cookie(s) and the information Google
                  Analytics collects to track your online activities over time
                  and across different websites when you use our Services, and
                  other websites. Google's ability to use and share information
                  collected by Google Analytics about your visits to the
                  Services are governed by the Google Analytics Terms of Service
                  and the Google Privacy Policy. Google may utilize the data
                  collected to track and examine the use of the Site, to prepare
                  reports on its activities, and share them with other Google
                  services. To more fully understand how Google may use the data
                  it collects through the Site, please review "How Google Uses
                  Information From Sites or Apps That Use Our Services."
                </p>
              </div>

              {/* Managing Cookies */}
              <div className="flex flex-col gap-2 lg:gap-[12px]">
                <h3 className="font-['Funnel_Display'] font-medium text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] text-[#010907]">
                  Managing Cookies
                </h3>
                <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                  You can control and/or delete cookies as you wish. You can
                  delete all cookies that are already on your computer and you
                  can set most browsers to prevent them from being placed.
                  However, if you do this, you may have to manually adjust some
                  preferences every time you visit our site and some services
                  and functionalities may not work.
                </p>
              </div>
            </div>

            {/* How We Use Your Personal Information */}
            <div
              id="how-we-use"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                How We Use Your Personal Information
              </h2>
              <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  We use the Form Information that we collect generally to:
                </p>
                <ul className="pl-6 space-y-2 list-disc">
                  <li>
                    <span className="font-bold">Communicating with You:</span>{" "}
                    We use Personal Information (e.g., your contact information)
                    to respond to your questions and comments when you
                    communicate with us through links or pages on the Site, such
                    as the "Contact Us" feature, and to send you administrative
                    information.
                  </li>
                  <li>
                    <span className="font-bold">
                      Processing Your Transactions:
                    </span>{" "}
                    When you make a payment on our Site, we may collect payment
                    and billing information to process your transaction. We
                    utilize third party payment providers to assist us in
                    processing transactions.
                  </li>
                  <li>
                    <span className="font-bold">Administering the Site:</span>{" "}
                    We use your Personal Information to administer the Site and
                    carry out any other business activities.
                  </li>
                  <li>
                    <span className="font-bold">Abandoned Cart:</span> We use
                    technologies to help keep track of the items you put into
                    your cart, including when you have abandoned your cart, and
                    use this information to determine when to send a cart
                    reminder via SMS or other channels.
                  </li>
                  <li>
                    <span className="font-bold">
                      Providing You with Personalized Recommendations:
                    </span>{" "}
                    If you choose to complete assessments/quizzes on the Site,
                    we will use information that you provide to send you
                    personalized product recommendations and other information
                    that we believe may be of interest to you.
                  </li>
                  <li>
                    <span className="font-bold">Performing Analyses:</span> We
                    use your Personal Information to perform business analyses
                    or for other purposes designed to improve the quality of our
                    business and the Site.
                  </li>
                  <li>
                    <span className="font-bold">
                      Email Newsletters, Text Campaigns, and Promotions:
                    </span>{" "}
                    If you've requested marketing communications, we will use
                    your Personal Information, including your contact
                    information, to send you our newsletters, exclusive offers,
                    promotions, and loyalty rewards program updates if
                    applicable, and product news through email and text
                    messages.
                  </li>
                </ul>
                <p className="mt-4">
                  We use the Device Information that we collect to help us to
                  improve and optimize our Site.
                </p>
              </div>
            </div>

            {/* Sharing Your Personal Information */}
            <div
              id="sharing-information"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Sharing Your Personal Information
              </h2>
              <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  We disclose your Personal Information to third parties to
                  facilitate the use of your Personal Information, as outlined
                  above. For instance, we utilize Stripe to process payments
                  made through our platform—this includes handling payment
                  transactions and related financial information in a secure
                  manner. You can find more details regarding Stripe's handling
                  of your Personal Information here:{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0d8360] font-bold underline hover:text-[#0a5c40] transition-colors"
                  >
                    Stripe Privacy Policy
                  </a>
                  .
                </p>
                <p className="mb-4">
                  We may disclose Personal Information that we collect (or you
                  provide) to a buyer or other successor in the event of a
                  merger, divestiture, restructuring, reorganization,
                  dissolution, or other sale or transfer of some or all of
                  OptiGenix's assets, whether as a going concern or as part of
                  bankruptcy, liquidation, or similar proceeding, in which
                  Personal Information held by OptiGenix about our Site users is
                  among the assets transferred.
                </p>
                <p>
                  Furthermore, we share your Personal Information with
                  employees, contractors, service providers, and other parties
                  essential for supporting the Site and our business operations.
                </p>
              </div>
            </div>

            {/* Data Security and Retention */}
            <div
              id="data-security"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Data Security and Retention
              </h2>
              <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  We seek to use commercially reasonable organizational,
                  technical and administrative measures to protect Personal
                  Information within our organization. Unfortunately, no data
                  transmission or storage system can be guaranteed to be 100%
                  secure. If you have reason to believe that your interaction
                  with us is no longer secure, please immediately notify us in
                  accordance with the "Contact Us" section below.
                </p>
                <p>
                  We will only retain your information for as long as necessary
                  to fulfill the purposes we collected it for, including for the
                  purposes of satisfying any legal, accounting, or reporting
                  requirements. To determine the appropriate retention period
                  for your information, we consider the amount, nature, and
                  sensitivity of the information, the potential risk of harm
                  from unauthorized use or disclosure of your information, the
                  purposes for which we process your information and whether we
                  can achieve those purposes through other means, and the
                  applicable legal requirements.
                </p>
              </div>
            </div>

            {/* Third-Party Links & Cookies */}
            <div
              id="third-party-links"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Third-Party Links & Cookies
              </h2>
              <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                Our Site may contain links to other websites or may be linked
                from other websites or social media platforms. We may also
                partner with third parties that may use technologies such as
                cookies, widgets, and links to gather information about users on
                our Site. We do not have control over third party websites or
                social media platforms, and any third party website's privacy
                practices are not governed by this Policy. Any time you leave
                our Site to a third party website or social media platform or
                interact with a third party link or other technology, you should
                exercise caution and review the privacy statement applicable to
                such websites to learn more.
              </p>
            </div>

            {/* Children Under the Age of 16 */}
            <div
              id="children-under-16"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Children Under the Age of 16
              </h2>
              <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                We do not knowingly collect Personal Information from children
                under the age of sixteen (16) without authorization by a holder
                of parental responsibility. If you believe we might have any
                information from or about a child under 16, please contact us at{" "}
                <a
                  href="mailto:support@optigenix.co"
                  className="text-[#0d8360] font-bold underline hover:text-[#0a5c40] transition-colors"
                >
                  support@optigenix.co
                </a>
                .
              </p>
            </div>

            {/* Do Not Track */}
            <div
              id="do-not-track"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Do Not Track
              </h2>
              <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                Please note that we do not alter our Site's data collection and
                use practices when we see a Do Not Track signal from your
                browser.
              </p>
            </div>

            {/* Data Access Rights */}
            <div
              id="data-access-rights"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Data Access Rights
              </h2>
              <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                To the extent applicable law provides you with the right to
                review, correct, update, or delete Personal Information that you
                previously have provided to us, please contact us using our
                contact information below should you wish to do so. We will
                respond to your request consistent with applicable law.
              </p>
            </div>

            {/* Right to Opt-Out of Marketing Communications */}
            <div
              id="opt-out"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Right to Opt-Out of Marketing Communications
              </h2>
              <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                <p className="mb-4">
                  Your provision of personal information through any of our
                  forms on the Site constitutes your affirmative consent that we
                  may contact you by email and/or text communication to provide
                  you with information and notices relating to our products or
                  services. If you do not wish to have your email
                  address/contact information used by us to promote our own or
                  third parties' products or services, you can opt-out by
                  sending us an email stating your request to{" "}
                  <a
                    href="mailto:support@optigenix.co"
                    className="text-[#0d8360] font-bold underline hover:text-[#0a5c40] transition-colors"
                  >
                    support@optigenix.co
                  </a>
                </p>
                <p>
                  You may opt out from receiving text communications, like SMS.
                  If you no longer want to receive marketing related texts, you
                  may opt out by replying "STOP" to any message you may receive
                  from OptiGenix.
                </p>
              </div>
            </div>

            {/* Changes */}
            <div
              id="changes"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Changes
              </h2>
              <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                We reserve the right to make any changes, modifications,
                additions, or deletions to this Policy at any time. If we make
                material changes to privacy practices, we will notify you by
                email or through a notice on this page. We encourage you to
                check this page regularly for updates.
              </p>
            </div>

            {/* Contact Us */}
            <div
              id="contact-us"
              className="flex flex-col gap-3 lg:gap-[14px] scroll-mt-24"
            >
              <h2 className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-[#010907]">
                Contact Us
              </h2>
              <p className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
                For more information about our privacy practices, if you have
                questions, or if you would like to make a complaint, please
                contact us by e-mail at{" "}
                <a
                  href="mailto:support@optigenix.co"
                  className="text-[#0d8360] font-bold underline hover:text-[#0a5c40] transition-colors"
                >
                  support@optigenix.co
                </a>{" "}
                or by mail using the details provided below:
              </p>
              <div className="bg-[#f7f7f7] rounded-[8px] p-4 lg:p-[16px]">
                <div className="font-inter text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#010907] tracking-[0.32px]">
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

export default PrivacyPolicyContent;
