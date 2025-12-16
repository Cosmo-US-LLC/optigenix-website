import React, { useState } from "react";
import { Link } from "react-router-dom";
import linkedinIcon from "../../../assets/images/footer/Linkedin.svg";
// import twitterIcon from "../../../assets/images/footer/devicon_twitter.svg";
import logoIcon from "../../../assets/images/footer/footer_logo.webp";
import visaIcon from "../../../assets/images/footer/footer_visa.webp";
import mastercardIcon from "../../../assets/images/footer/footer_mastercard.webp";
import paypalIcon from "../../../assets/images/footer/footer_paypa.webp";
import klarnaIcon from "../../../assets/images/footer/footer_klarna.webp";
import applePayIcon from "../../../assets/images/footer/footer_apple_pay.webp";
import googlePayIcon from "../../../assets/images/footer/footer_google_pay.webp";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="w-full md:max-w-[1280px] mx-auto px-4 md:px-6  py-6">
      <footer className="bg-[#042b24] rounded-[24px] md:p-8 p-4 md:px-12 md:pt-8 md:pb-0 relative overflow-hidden">
        {/* Main Content Container */}
        <div className="relative z-10 space-y-6 md:space-y-8 lg:space-y-[32px]">
          {/* Top Section: Logo and Social Icons */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px]">
            <div className="flex gap-4 justify-between items-start md:flex-row md:items-center">
              {/* Logo */}
              <Link to="/" className="flex gap-2 items-center md:gap-3">
                <img
                  src={logoIcon}
                  alt="OptiGenix Logo"
                  className="h-[32px] md:h-[35px] w-auto"
                />
                <span
                  className="font-semibold text-[22px] md:text-[26px] text-white"
                  style={{
                    fontFamily: "Gibson, sans-serif",
                    letterSpacing: "-0.52px",
                  }}
                >
                  OptiGenix
                </span>
              </Link>

              {/* Social Icons */}
              <div className="flex gap-2 md:gap-3 lg:gap-[12px] items-center">
                <a
                  href="https://www.instagram.com/optigenix/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-white rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#5CDDC6] hover:text-[#042b24] transition-all duration-200"
                    aria-label="Instagram"
                  >
                    {/* <img
                      src={twitterIcon}
                      alt="Twitter"
                      className="w-4 h-4 md:w-[16px] md:h-[16px]"
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-instagram-icon lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </button>
                </a>
                {/* <a
                  href="https://www.instagram.com/optigenix/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-white rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#5CDDC6] hover:text-[#042b24] transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <img
                      src={twitterIcon}
                      alt="Twitter"
                      className="w-4 h-4 md:w-[16px] md:h-[16px]"
                    />
                  </button>
                </a> */}
                <a
                  href="https://www.linkedin.com/company/optigenix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-white rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#5CDDC6] hover:text-[#042b24] transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-4 h-4 md:w-[16px] md:h-[16px]"
                    />
                  </button>
                </a>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-white/20" />
          </div>

          {/* Main Content: 3 Columns + Newsletter */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[100px]">
            {/* Left Side: 3 Columns + Bottom Section */}
            <div className="flex-1 flex flex-col gap-8 md:gap-10 lg:gap-[48px]">
              {/* 3 Columns */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
                {/* Column 1: Quick Links */}
                <div className="space-y-3 md:space-y-4 lg:space-y-[16px]">
                  <h3 className="quick-heading">Quick Links</h3>
                  <ul className="space-y-2 lg:space-y-[8px]">
                    <li>
                      <Link to="/" className="quick-links">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/all-category" className="quick-links">
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link to="gene-test" className="quick-links">
                        Gene Test
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#" className="quick-links">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="quick-links">
                        Blogs
                      </Link>
                    </li> */}
                  </ul>
                </div>

                {/* Column 2: About Company */}
                <div className="space-y-3 md:space-y-4 lg:space-y-[16px]">
                  <h3 className="quick-heading">About Company</h3>
                  <ul className="space-y-2 lg:space-y-[8px]">
                    {/* <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("our-story")}
                        className="text-left cursor-pointer quick-links"
                      >
                        Our Story
                      </button>
                    </li> */}
                    {/* <li>
                      <Link to="#" className="quick-links">
                        Shop
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/about-us" className="quick-links">
                        About Us
                      </Link>
                    </li>
                    {/* <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("meet-the-team")}
                        className="text-left cursor-pointer quick-links"
                      >
                        Team
                      </button>
                    </li> */}
                  </ul>
                </div>

                {/* Column 3: Support */}
                <div className="space-y-3 md:space-y-4 lg:space-y-[16px]">
                  <h3 className="quick-heading">Support</h3>
                  <ul className="space-y-2 lg:space-y-[8px]">
                    {/* <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("faqs")}
                        className="text-left cursor-pointer quick-links"
                      >
                        FAQ's
                      </button>
                    </li> */}
                    <li>
                      <Link to="/terms-and-conditions" className="quick-links">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className="quick-links">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Section: Copyright & Payment Icons */}
              <div className="space-y-4 max-md:hidden md:space-y-6">
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/20" />

                <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                  {/* Copyright */}
                  <p className="time-zone">
                    © 2025 OptiGenix. All rights reserved.
                  </p>

                  {/* Payment Icons */}
                  <div className="flex flex-wrap gap-2 justify-center items-center md:gap-3">
                    {/* Visa */}
                    <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 rounded">
                      <img
                        src={visaIcon}
                        alt="Visa"
                        className="w-full h-full"
                      />
                    </div>

                    {/* Mastercard */}
                    <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                      <img
                        src={mastercardIcon}
                        alt="Mastercard"
                        className="w-full h-full"
                      />
                    </div>
                    {/* PayPal */}
                    <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                      <img
                        src={paypalIcon}
                        alt="Paypal"
                        className="w-full h-full"
                      />
                    </div>
                    {/* Klarna */}
                    <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                      <img
                        src={klarnaIcon}
                        alt="Klarna"
                        className="w-full h-full"
                      />
                    </div>
                    {/* Apple Pay */}
                    <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                      <img
                        src={applePayIcon}
                        alt="Apple Pay"
                        className="w-full h-full"
                      />
                    </div>
                    {/* Google Pay */}
                    <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                      <img
                        src={googlePayIcon}
                        alt="Google Pay"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Newsletter Signup */}
            <div className="w-full lg:w-[386px] space-y-4 md:space-y-6 lg:space-y-[24px]">
              <h3 className="quick-heading">
                Subscribe to our newsletter and stay up to date
              </h3>

              {/* Newsletter Form */}
              <NewsLetterForm />
            </div>
            <div className="space-y-4 md:hidden md:space-y-6">
              {/* Divider Line */}
              <div className="w-full h-[1px] bg-white/20" />

              <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
                {/* Copyright */}
                <p className="font-inter text-[12px] md:text-[14px] leading-[22px] text-white text-center sm:text-left">
                  © 2025 OptiGenix. All rights reserved.
                </p>

                {/* Payment Icons */}
                <div className="flex flex-wrap gap-2 justify-center items-center md:gap-3">
                  {/* Visa */}
                  <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 rounded">
                    <img src={visaIcon} alt="Visa" className="w-full h-full" />
                  </div>

                  {/* Mastercard */}
                  <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                    <img
                      src={mastercardIcon}
                      alt="Mastercard"
                      className="w-full h-full"
                    />
                  </div>
                  {/* PayPal */}
                  <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                    <img
                      src={paypalIcon}
                      alt="Paypal"
                      className="w-full h-full"
                    />
                  </div>
                  {/* Klarna */}
                  <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                    <img
                      src={klarnaIcon}
                      alt="Klarna"
                      className="w-full h-full"
                    />
                  </div>
                  {/* Apple Pay */}
                  <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                    <img
                      src={applePayIcon}
                      alt="Apple Pay"
                      className="w-full h-full"
                    />
                  </div>
                  {/* Google Pay */}
                  <div className="w-[38px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                    <img
                      src={googlePayIcon}
                      alt="Google Pay"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Background Watermark Text */}
        <p
          className="font-semibold text-[74px] tracking-[-6.28px] md:tracking-[-10.48px] md:text-[252px] leading-none text-transparent bg-clip-text bg-linear-to-b from-white/20 to-transparent whitespace-nowrap text-center relative z-0 mt-8 md:mt-8"
          style={{
            fontFamily: "Gibson, sans-serif",
            // letterSpacing: "-10.48px",
          }}
        >
          OptiGenix
        </p>
      </footer>
    </div>
  );
};

export default Footer;
