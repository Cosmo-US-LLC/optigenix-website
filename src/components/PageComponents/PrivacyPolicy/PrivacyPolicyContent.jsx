import React, { useState } from "react";

const PrivacyPolicyContent = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  // Table of Contents data
  const tableOfContents = [
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
    <section className="bg-[#f7f7f7] py-6 md:py-[40px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px]">
          {/* Left Side - Title & Table of Contents */}
          <div className="lg:w-[409px] shrink-0 lg:sticky md:top-29 lg:self-start">
            <div className="bg-[#e6f5ef] rounded-[16px] p-6 flex flex-col gap-4 shadow-sm border border-[#d1e7dd]">
              <h1 className="!text-[#0D8360] text-[18px] md:!text-[24px] font-bold font-['Funnel_Display'] text-center lg:text-left">Table of Contents</h1>
              <nav className="flex flex-col gap-[16px]">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-inter text-[15px] lg:text-[16px] leading-[22px] px-[23px] py-[12px] rounded-[8px] transition-all duration-200 font-medium cursor-pointer ${
                      activeSection === item.id
                        ? "bg-[#0d8360] text-white shadow border border-[#0d8360]"
                        : "text-[#252525] hover:bg-[#d1e7dd] border border-transparent"
                    }`}
                    style={{
                      border:"1px solid rgba(13, 131, 96, 0.40)",
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-[32px]">
            {/* Privacy Policy Heading and Intro */}
            <div className="flex flex-col gap-2 mb-2">
              <h1 className="!text-[#010907] !text-[48px] font-[600] font-['Funnel_Display'] mb-2">Privacy Policy</h1>
              <p className="!text-[#252525] !font-[400] text-[16px] font-inter leading-[24px]">
                In today’s fast-paced world, taking time for self-care is more important than ever. A visit to the spa can be a rejuvenating experience for both your skin and your mind. Regular spa visits can help alleviate the stresses of daily life, enhance your skincare routine, and even improve your overall well-being. In this blog post, we will explore the numerous benefits of regular spa visits for both your skin and your mental health.
              </p>
            </div>

            {/* Personal Information We Collect */}
            <div id="personal-information" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Personal Information We Collect</h2>
              <p className="text-[#252525] text-[16px] font-inter">We collect two main types of information: Device Information and Form Information. These include both personal and non-personal data that help us improve your experience and provide you with the best services. Device Information: Automatically collected data about your device when you visit the Site, such as browser type, IP address, device information, application usage, and referral information.</p>
              <p className="text-[#252525] text-[16px] font-inter">Form Information: Data that you provide when interacting with the Site, including: Identifiers: Name, mailing address, email address, phone number, IP address. Account Login Data: Login credentials, such as email and password. Demographic Data: Age, date of birth, geographic location (e.g., ZIP code). Transactional Data: Details of purchases or returns, including products, prices, and transaction dates. Sensitive Data: Health information (e.g., medical conditions, dietary preferences, exercise goals) if you voluntarily provide this information.</p>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div id="cookies-tracking" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Cookies and Tracking Technologies</h2>
              <p className="text-[#252525] text-[16px] font-inter">We use several technologies to collect Device Information, including: Cookies: Small data files placed on your device that may include an anonymous unique identifier. Cookies help us personalize your experience and track Site usage. You can manage or disable cookies through your browser settings, though this may affect the functionality of the Site. Log Files: Collects IP addresses, browser types, ISP data, and timestamps when you visit the Site. Web Beacons, Tags, and Pixels: Track how you interact with the Site to improve our services.</p>
              <p className="text-[#252525] text-[16px] font-inter">Google Analytics: A web analysis tool to better understand how you use our Site. Google Analytics tracks your activities across websites but does not collect personal identifiers. You can opt out of Google Analytics by using the browser plugin available at <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#0d8360] underline" target="_blank" rel="noopener noreferrer">Google Opt-Out</a>.</p>
            </div>

            {/* How We Use Your Personal Information */}
            <div id="how-we-use" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">How We Use Your Personal Information</h2>
              <p className="text-[#252525] text-[16px] font-inter">We use the Personal Information we collect to: Communicate with You: To respond to inquiries, address your concerns, and send important updates. Process Transactions: To complete your purchases and handle payments securely. Administer the Site: To operate and maintain the Site, including conducting business analyses. Personalize Recommendations: To provide personalized product recommendations based on your interactions. Marketing Communications: To send you newsletters, promotions, and special offers, if you have consented to receive them. Cart Reminders: To send notifications if you leave items in your cart.</p>
            </div>

            {/* Sharing Your Personal Information */}
            <div id="sharing-information" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Sharing Your Personal Information</h2>
              <p className="text-[#252525] text-[16px] font-inter">We do not sell your personal information. However, we share your data in the following ways: Service Providers: We may share data with third parties like payment processors (e.g., Stripe) and other services to facilitate transactions and services on our behalf. Business Transfers: If OptiGenix undergoes a merger, acquisition, or sale of assets, personal data may be transferred as part of that transaction. Legal Compliance: We may disclose your personal information to comply with legal obligations or protect our rights. For more details on how payment processors handle your data, please refer to their respective privacy policies (e.g., <a href="https://stripe.com/privacy" className="text-[#0d8360] underline" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a>).</p>
            </div>

            {/* Data Security and Retention */}
            <div id="data-security" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Data Security and Retention</h2>
              <p className="text-[#252525] text-[16px] font-inter">We take reasonable steps to protect your personal information through organizational, technical, and administrative measures. However, no method of data transmission or storage is 100% secure, and we cannot guarantee its absolute security. We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including compliance with legal and accounting obligations.</p>
            </div>

            {/* Third-Party Links & Cookies */}
            <div id="third-party-links" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Third-Party Links & Cookies</h2>
              <p className="text-[#252525] text-[16px] font-inter">Our Site may contain links to external websites or third-party services that are not operated by us. Please be aware that we are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before interacting with them.</p>
            </div>

            {/* Children Under the Age of 16 */}
            <div id="children-under-16" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Children Under the Age of 16</h2>
              <p className="text-[#252525] text-[16px] font-inter">We do not knowingly collect personal information from children under 16. If you believe we have inadvertently collected such information, please contact us at <a href="mailto:support@optigenix.co" className="text-[#0d8360] underline">support@optigenix.co</a>, and we will take steps to delete it.</p>
            </div>

            {/* Do Not Track */}
            <div id="do-not-track" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Do Not Track</h2>
              <p className="text-[#252525] text-[16px] font-inter">We do not alter our data collection and use practices in response to Do Not Track signals from your browser.</p>
            </div>

            {/* Data Access Rights */}
            <div id="data-access-rights" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Data Access Rights</h2>
              <p className="text-[#252525] text-[16px] font-inter">Under applicable law, you may have the right to access, update, or delete the personal information we hold about you. If you wish to exercise any of these rights, please contact us using the details provided below.</p>
            </div>

            {/* Right to Opt-Out of Marketing Communications */}
            <div id="opt-out" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Right to Opt-Out of Marketing Communications</h2>
              <p className="text-[#252525] text-[16px] font-inter">You can opt out of receiving marketing communications from us at any time. If you no longer wish to receive emails or text messages about our products, you can unsubscribe via the links in those communications or contact us directly at <a href="mailto:support@optigenix.co" className="text-[#0d8360] underline">support@optigenix.co</a>. To opt out of SMS marketing, simply reply "STOP" to any message.</p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div id="changes" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Changes to This Privacy Policy</h2>
              <p className="text-[#252525] text-[16px] font-inter">We may update this Privacy Policy periodically. If we make significant changes, we will notify you through email or a notice on our website. We encourage you to check this page regularly for updates.</p>
            </div>

            {/* Contact Us */}
            <div id="contact-us" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">Contact Us</h2>
              <p className="text-[#252525] text-[16px] font-inter">If you have any questions, concerns, or complaints about our Privacy Policy or data practices, please contact us:</p>
              <div className="">
                <p className="text-[#252525] text-[16px] font-inter mb-1">OptiGenix Corporation</p>
                <p className="text-[#252525] text-[16px] font-inter mb-1">Address: 2991 Sacramento St #541, Berkeley, CA 94702</p>
                <p className="text-[#252525] text-[16px] font-inter">Email: <a href="mailto:support@optigenix.co" className="text-[#0d8360] underline">support@optigenix.co</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
