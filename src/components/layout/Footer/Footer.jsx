import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", formData);
    // Handle newsletter subscription
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6">
      <footer className="bg-[#042b24] rounded-2xl py-8 md:py-10 lg:py-12 relative overflow-hidden mt-12 md:mt-20 px-6 md:px-8">
        {/* Large Background Watermark Text */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <p
            className="font-semibold text-[80px] sm:text-[120px] md:text-[200px] lg:text-[274px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent whitespace-nowrap opacity-50"
            style={{
              WebkitTextFillColor: "transparent",
              fontFamily: "Gibson, sans-serif",
              letterSpacing: "-5.48px",
            }}
          >
            OptiGenix
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-[1280px] mx-auto space-y-6 md:space-y-8">
          {/* Top Section: Logo and Social Icons */}
          <div className="flex flex-col gap-4 md:gap-6 justify-between items-start pb-4 md:pb-6 border-b md:flex-row md:items-center border-white/20">
            {/* Logo */}
            <Link to="/" className="flex gap-2 md:gap-3 items-center">
              <div className="w-[28px] h-[32px] md:w-[32px] md:h-[36px] bg-gradient-to-br from-[#0d8360] to-[#042b24] rounded-lg flex items-center justify-center">
                <span className="text-base md:text-lg font-bold text-white">O</span>
              </div>
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
            <div className="flex gap-2 md:gap-3 items-center">
              <button
                className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#042b24] transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#042b24] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Grid: 3 Columns + Newsletter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Column 1: Quick Links */}
            <div className="space-y-3 md:space-y-4">
              <h3
                className="font-funnel text-[16px] md:text-[18px] leading-[20.99px] text-white font-bold"
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: About Company */}
            <div className="space-y-3 md:space-y-4">
              <h3
                className="font-funnel text-[16px] md:text-[18px] leading-[20.99px] text-white font-bold"
              >
                About Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/story"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="space-y-3 md:space-y-4">
              <h3
                className="font-funnel text-[16px] md:text-[18px] leading-[20.99px] text-white font-bold"
              >
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/faq"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="font-inter text-[14px] md:text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter Signup */}
            <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
              <h3
                className="font-funnel text-[16px] md:text-[18px] leading-[20.99px] text-white font-bold"
              >
                Subscribe to our newsletter and stay up to date
              </h3>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubmit}
                className="p-4 md:p-6 space-y-4 md:space-y-5 rounded-2xl backdrop-blur-xl bg-white/20"
              >
                {/* First Name & Last Name Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label
                      className="font-inter text-[12px] md:text-[14px] leading-[24px] text-white block"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="font-inter w-full bg-white/10 backdrop-blur-xl border-[0.5px] border-white/20 rounded-md px-3 py-2 text-[12px] md:text-[14px] leading-[22px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="font-inter text-[12px] md:text-[14px] leading-[24px] text-white block"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="font-inter w-full bg-white/10 backdrop-blur-xl border-[0.5px] border-white/20 rounded-md px-3 py-2 text-[12px] md:text-[14px] leading-[22px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    className="font-inter text-[12px] md:text-[14px] leading-[24px] text-white block"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="font-inter w-full bg-white/10 backdrop-blur-xl border-[0.5px] border-white/20 rounded-md px-3 py-2 text-[12px] md:text-[14px] leading-[22px] text-white placeholder:text-white/80 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="font-funnel w-full bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40] transition-all duration-200 text-white text-[14px] md:text-[16px] leading-[24px] py-2 md:py-2.5 rounded-full font-semibold"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section: Copyright & Payment Icons */}
          <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-white/20">
            <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
              {/* Copyright */}
              <p
                className="font-inter text-[12px] md:text-[14px] leading-[22px] text-white text-center md:text-left"
              >
                © 2025 OptiGenix. All rights reserved.
              </p>

              {/* Payment Icons */}
              <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
                {/* Visa */}
                <div className="w-[40px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-bold text-white/60">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-[40px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-bold text-white/60">MC</span>
                </div>
                {/* PayPal */}
                <div className="w-[40px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-bold text-white/60">PP</span>
                </div>
                {/* Klarna */}
                <div className="w-[40px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-bold text-white/60">K</span>
                </div>
                {/* Apple Pay */}
                <div className="w-[40px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-bold text-white/60">AP</span>
                </div>
                {/* Google Pay */}
                <div className="w-[40px] h-[28px] md:w-[48px] md:h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-bold text-white/60">GP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
