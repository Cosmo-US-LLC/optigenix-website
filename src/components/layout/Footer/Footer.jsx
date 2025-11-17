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
      <footer className="bg-[#042b24] rounded-2xl py-10 md:py-12 relative overflow-hidden mt-20 px-4 md:px-8">
        {/* Large Background Watermark Text */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <p
            className="font-semibold text-[150px] md:text-[200px] lg:text-[274px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent whitespace-nowrap opacity-50"
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
        <div className="relative z-10 max-w-[1280px] mx-auto space-y-8">
          {/* Top Section: Logo and Social Icons */}
          <div className="flex flex-col gap-6 justify-between items-start pb-6 border-b md:flex-row md:items-center border-white/20">
            {/* Logo */}
            <Link to="/" className="flex gap-3 items-center">
              <div className="w-[32px] h-[36px] bg-gradient-to-br from-[#0d8360] to-[#042b24] rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">O</span>
              </div>
              <span
                className="font-semibold text-[26px] text-white"
                style={{
                  fontFamily: "Gibson, sans-serif",
                  letterSpacing: "-0.52px",
                }}
              >
                OptiGenix
              </span>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-3 items-center">
              <button
                className="w-[48px] h-[48px] border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#042b24] transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                className="w-[48px] h-[48px] border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#042b24] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Grid: 3 Columns + Newsletter */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Column 1: Quick Links */}
            <div className="space-y-4">
              <h3
                className="text-[18px] leading-[20.99px] text-white font-bold"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: About Company */}
            <div className="space-y-4">
              <h3
                className="text-[18px] leading-[20.99px] text-white font-bold"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                About Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/story"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="space-y-4">
              <h3
                className="text-[18px] leading-[20.99px] text-white font-bold"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/faq"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-[16px] leading-[22px] text-white hover:text-white/80 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter Signup */}
            <div className="space-y-6">
              <h3
                className="text-[18px] leading-[20.99px] text-white font-bold"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                Subscribe to our newsletter and stay up to date
              </h3>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-5 rounded-2xl backdrop-blur-xl bg-white/20"
              >
                {/* First Name & Last Name Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label
                      className="text-[14px] leading-[24px] text-white block font-normal"
                      style={{ fontFamily: "Inter, sans-serif" }}
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
                      className="w-full bg-white/10 backdrop-blur-xl border-[0.5px] border-white/20 rounded-md px-3 py-2 text-[14px] leading-[22px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors font-normal"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-[14px] leading-[24px] text-white block font-normal"
                      style={{ fontFamily: "Inter, sans-serif" }}
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
                      className="w-full bg-white/10 backdrop-blur-xl border-[0.5px] border-white/20 rounded-md px-3 py-2 text-[14px] leading-[22px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors font-normal"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    className="text-[14px] leading-[24px] text-white block font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
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
                    className="w-full bg-white/10 backdrop-blur-xl border-[0.5px] border-white/20 rounded-md px-3 py-2 text-[14px] leading-[22px] text-white placeholder:text-white/80 focus:outline-none focus:border-white/30 transition-colors font-normal"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40] transition-all duration-200 text-white text-[16px] leading-[24px] py-2 rounded-full font-semibold"
                  style={{ fontFamily: "Funnel Display, sans-serif" }}
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section: Copyright & Payment Icons */}
          <div className="pt-6 mt-6 border-t border-white/20">
            <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
              {/* Copyright */}
              <p
                className="text-[14px] leading-[22px] text-white font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                © 2025 OptiGenix. All rights reserved.
              </p>

              {/* Payment Icons */}
              <div className="flex gap-4 items-center">
                {/* Visa */}
                <div className="w-[48px] h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white/60">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-[48px] h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white/60">MC</span>
                </div>
                {/* PayPal */}
                <div className="w-[48px] h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white/60">PP</span>
                </div>
                {/* Klarna */}
                <div className="w-[48px] h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white/60">K</span>
                </div>
                {/* Apple Pay */}
                <div className="w-[48px] h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white/60">AP</span>
                </div>
                {/* Google Pay */}
                <div className="w-[48px] h-[32px] bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white/60">GP</span>
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
