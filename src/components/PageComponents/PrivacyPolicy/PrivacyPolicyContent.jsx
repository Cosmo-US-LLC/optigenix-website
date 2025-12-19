import React, { useState } from "react";

const PrivacyPolicyContent = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  // Table of Contents data
  const tableOfContents = [
    // { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use", title: "2. How We Use Your Information" },
    { id: "data-safeguards", title: "3. How We Safeguard Your Data" },
    { id: "sharing-information", title: "4. When We Share Your Information" },
    { id: "your-rights", title: "5. Your Choices and Privacy Rights" },
    { id: "children", title: "6. Children’s Privacy" },
    { id: "do-not-track", title: "7. Do Not Track Preferences" },
    { id: "updates", title: "8. Updates to This Privacy Policy" },
    { id: "contact-us", title: "9. Contacting OptiGenix" },
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
              <h1 className="!text-[#0D8360] text-[18px] md:!text-[24px] font-bold font-['Funnel_Display'] text-center lg:text-left">
                Table of Contents
              </h1>
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
                      border: "1px solid rgba(13, 131, 96, 0.40)",
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
            <div
              id="introduction"
              className="flex flex-col gap-2 mb-2 scroll-mt-24"
            >
              <h1 className="!text-[#010907] !text-[48px] font-[600] font-['Funnel_Display'] mb-2">
                Privacy Policy
              </h1>
              <p className="!text-[#252525] !font-[400] text-[16px] font-inter leading-[24px]">
                At OptiGenix Corporation (“OptiGenix,” “we,” “us,” or “our”),
                your trust matters. We are committed to handling your personal
                information with care and transparency. This Privacy Policy
                explains what we collect, why we collect it, and how we protect
                your information when you visit{" "}
                <a
                  href="https://optigenix.co"
                  className="text-[#0d8360] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OptiGenix
                </a>{" "}
                or use our services.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div
              id="information-we-collect"
              className="flex flex-col gap-2 scroll-mt-24"
            >
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                1. Information We Collect
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                We collect two types of information: details you choose to share
                with us and information gathered automatically through your
                device.
              </p>
              <p className="text-[#252525] text-[16px] font-inter font-semibold">
                Information you provide may include:
              </p>
              <ul className="list-disc list-inside text-[#252525] text-[16px] font-inter space-y-1">
                <li>Name, email address, phone number, or mailing address</li>
                <li>Account login information</li>
                <li>Payment details for purchases</li>
                <li>Your communication preferences</li>
              </ul>
              <p className="text-[#252525] text-[16px] font-inter font-semibold">
                Information collected automatically may include:
              </p>
              <ul className="list-disc list-inside text-[#252525] text-[16px] font-inter space-y-1">
                <li>IP address</li>
                <li>Browser and device type</li>
                <li>Pages viewed and time spent on the site</li>
                <li>Referring links</li>
                <li>General site usage data</li>
              </ul>
              <p className="text-[#252525] text-[16px] font-inter">
                This helps us maintain a smooth, user-friendly experience.
              </p>
            </div>

            {/* 2. How We Use Your Information */}
            <div id="how-we-use" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                2. How We Use Your Information
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                We use the information we collect to support and enhance your
                experience with OptiGenix. This may include:
              </p>
              <ul className="list-disc list-inside text-[#252525] text-[16px] font-inter space-y-1">
                <li>Providing and improving our services</li>
                <li>Processing orders and transactions</li>
                <li>Responding to questions or support requests</li>
                <li>Personalizing your experience on our website</li>
                <li>
                  Sending important updates related to your account or activity
                </li>
                <li>Meeting legal or regulatory obligations</li>
              </ul>
              <p className="text-[#252525] text-[16px] font-inter">
                We only use your information in ways that support the operation
                and improvement of our services.
              </p>
            </div>

            {/* 3. How We Safeguard Your Data */}
            <div
              id="data-safeguards"
              className="flex flex-col gap-2 scroll-mt-24"
            >
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                3. How We Safeguard Your Data
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                Protecting your information is important to us. We use
                reasonable administrative, technical, and organizational
                measures designed to help prevent unauthorized access. While no
                system is completely foolproof, we continually work to maintain
                safeguards that support the protection of your personal data.
              </p>
            </div>

            {/* 4. When We Share Your Information */}
            <div
              id="sharing-information"
              className="flex flex-col gap-2 scroll-mt-24"
            >
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                4. When We Share Your Information
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                We may share your information only when necessary and in limited
                ways, such as:
              </p>
              <ul className="list-disc list-inside text-[#252525] text-[16px] font-inter space-y-1">
                <li>
                  With trusted service providers who help operate our website or
                  process payments
                </li>
                <li>When required by law or to respond to a legal request</li>
                <li>
                  To protect the rights, safety, or security of our users or our
                  company
                </li>
                <li>When you provide your consent</li>
              </ul>
              <p className="text-[#252525] text-[16px] font-inter">
                Our service providers are only given the information they need
                to perform their work.
              </p>
            </div>

            {/* 5. Your Choices and Privacy Rights */}
            <div id="your-rights" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                5. Your Choices and Privacy Rights
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                You may have the right to access, correct, or request deletion
                of your personal information, depending on your location and
                applicable laws. To request this, you can contact us at{" "}
                <a
                  href="mailto:support@optigenix.co"
                  className="text-[#0d8360] underline"
                >
                  support@optigenix.co
                </a>
                .
              </p>
              <p className="text-[#252525] text-[16px] font-inter">
                If you no longer wish to receive marketing emails, you can
                unsubscribe at any time using the link in the message or by
                contacting us.
              </p>
            </div>

            {/* 6. Children’s Privacy */}
            <div id="children" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                6. Children’s Privacy
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                Our services are not intended for individuals under the age of
                16, and we do not knowingly collect information from them. If
                you believe we have done so, please contact us so we can take
                appropriate action.
              </p>
            </div>

            {/* 7. Do Not Track Preferences */}
            <div id="do-not-track" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                7. Do Not Track Preferences
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                Our website does not currently adjust its data practices based
                on "Do Not Track" signals.
              </p>
            </div>

            {/* 8. Updates to This Privacy Policy */}
            <div id="updates" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                8. Updates to This Privacy Policy
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                We may update this Privacy Policy occasionally to reflect
                changes to our practices or services. When we do, the “Last
                Modified” date above will be updated. We encourage you to review
                this page from time to time.
              </p>
            </div>

            {/* 9. Contacting OptiGenix */}
            <div id="contact-us" className="flex flex-col gap-2 scroll-mt-24">
              <h2 className="!text-[#252525] !text-[22px] font-[600] font-['Funnel_Display']">
                9. Contacting OptiGenix
              </h2>
              <p className="text-[#252525] text-[16px] font-inter">
                If you have any questions, concerns, or requests related to this
                Privacy Policy, please reach out to us:
              </p>
              <div className="">
                <p className="text-[#252525] text-[16px] font-inter mb-1">
                  OptiGenix Corporation
                </p>
                <p className="text-[#252525] text-[16px] font-inter mb-1">
                  2991 Sacramento St #541
                </p>
                <p className="text-[#252525] text-[16px] font-inter mb-1">
                  Berkeley, CA 94702
                </p>
                <p className="text-[#252525] text-[16px] font-inter">
                  Email:{" "}
                  <a
                    href="mailto:support@optigenix.co"
                    className="text-[#0d8360] underline"
                  >
                    support@optigenix.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
