import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ShoppingCart,
  User,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isQuizPage = location.pathname === "/quiz";

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${
        isQuizPage ? "rounded-bl-[24px] rounded-br-[24px]" : ""
      }`}
    >
      {/* Desktop Navigation */}
      <nav className="max-w-[1280px] mx-auto px-4 md:px-8 py-2 hidden md:block">
        <div className="py-[12px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 h-[42px]">
            {/* Logo Icon */}
            <div className="w-[37.33px] h-[42px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="42"
                viewBox="0 0 38 42"
                fill="none"
              >
                <g clip-path="url(#clip0_669_105)">
                  <path
                    d="M22.5332 10.3786L27.368 7.96167C37.8245 14.7422 37.374 15.4438 34.0107 19.248C34.616 16.9108 26.6113 12.3613 22.5332 10.3786Z"
                    fill="black"
                  />
                  <path
                    d="M14.9225 31.4422L10.0876 33.8592C-0.128263 27.4724 0.0816251 26.377 3.44498 22.5729C2.83958 24.91 10.8444 29.4596 14.9225 31.4422Z"
                    fill="black"
                  />
                  <path
                    d="M27.9626 0L30.2596 5.64319C20.3869 10.2842 0.677061 20.74 0.639387 25.5147C0.639423 25.5256 0.639438 25.5365 0.639438 25.5473C0.639321 25.5365 0.639301 25.5256 0.639387 25.5147C0.617414 18.3698 -6.59298 17.2751 27.9626 0Z"
                    fill="black"
                  />
                  <path
                    d="M9.34191 41.9958L7.04492 36.3526C16.9176 31.7117 36.6274 21.2558 36.6651 16.4811C36.6651 16.4702 36.6651 16.4594 36.6651 16.4485C36.6652 16.4593 36.6652 16.4702 36.6651 16.4811C36.6871 23.626 43.8975 24.7208 9.34191 41.9958Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_669_105">
                    <rect width="37.3333" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* Logo Text */}
            <span className="font-semibold leading-[-0.602px] text-[30px] font-['Funnel_Display'] text-black">
              OptiGenix
            </span>
          </Link>

          {/* Right Side: Navigation + CTAs */}
          <div className="flex items-center gap-[32px]">
            {/* Navigation Links */}
            <div className="flex items-center gap-[32px]">
              {/* Products with Dropdown */}
              <div className="flex items-center gap-[5px] cursor-pointer group">
                <span className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal group-hover:text-[#0d8360] transition-colors">
                  Products
                </span>
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="currentColor"
                  className="text-black group-hover:text-[#0d8360] transition-colors"
                >
                  <path d="M4 4L0 0H8L4 4Z" />
                </svg>
              </div>

              {/* About Us */}
              <Link
                to="/about"
                className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
              >
                About Us
              </Link>

              {/* Quiz */}
              <Link
                to="/quiz"
                className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
              >
                Quiz
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
              >
                Blog
              </Link>
            </div>

            {/* CTA Group */}
            <div className="flex items-center gap-[12px]">
              {/* Shop Now Button */}
              <button className="bg-[#0d8360] hover:bg-[#0a6b4f] text-white font-['Funnel_Display'] font-semibold text-[16px] leading-[24px] px-[19px] py-[12px] rounded-full transition-colors">
                Shop Now
              </button>

              {/* Shopping Cart Icon */}
              <button className="bg-[#ededed] hover:bg-[#e0e0e0] w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors">
                <ShoppingBag className="w-[24px] h-[24px] text-black" />
              </button>

              {/* User Icon */}
              <button className="bg-[#ededed] hover:bg-[#e0e0e0] w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors">
                <User className="w-[24px] h-[24px] text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`px-4 py-3 bg-white md:hidden ${
          isQuizPage ? "rounded-bl-[24px] rounded-br-[24px]" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 h-[42px]">
            {/* Logo Icon */}
            <div className="w-[32px] h-[36px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="36"
                viewBox="0 0 38 42"
                fill="none"
              >
                <g clip-path="url(#clip0_669_105_mobile)">
                  <path
                    d="M22.5332 10.3786L27.368 7.96167C37.8245 14.7422 37.374 15.4438 34.0107 19.248C34.616 16.9108 26.6113 12.3613 22.5332 10.3786Z"
                    fill="black"
                  />
                  <path
                    d="M14.9225 31.4422L10.0876 33.8592C-0.128263 27.4724 0.0816251 26.377 3.44498 22.5729C2.83958 24.91 10.8444 29.4596 14.9225 31.4422Z"
                    fill="black"
                  />
                  <path
                    d="M27.9626 0L30.2596 5.64319C20.3869 10.2842 0.677061 20.74 0.639387 25.5147C0.639423 25.5256 0.639438 25.5365 0.639438 25.5473C0.639321 25.5365 0.639301 25.5256 0.639387 25.5147C0.617414 18.3698 -6.59298 17.2751 27.9626 0Z"
                    fill="black"
                  />
                  <path
                    d="M9.34191 41.9958L7.04492 36.3526C16.9176 31.7117 36.6274 21.2558 36.6651 16.4811C36.6651 16.4702 36.6651 16.4594 36.6651 16.4485C36.6652 16.4593 36.6652 16.4702 36.6651 16.4811C36.6871 23.626 43.8975 24.7208 9.34191 41.9958Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_669_105_mobile">
                    <rect width="37.3333" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* Logo Text */}
            <span className="font-semibold text-[22px] font-['Funnel_Display'] text-black">
              OptiGenix
            </span>
          </Link>

          {/* Mobile Menu Sheet */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="z-[9999]" aria-label="Toggle menu">
                <Menu className="w-6 h-6 text-black bg-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-['Funnel_Display'] text-[24px] text-black">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {/* Navigation Links */}
                <Link
                  to="/products"
                  className="font-['Funnel_Display'] text-[18px] text-black capitalize hover:text-[#0d8360] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="font-['Funnel_Display'] text-[18px] text-black capitalize hover:text-[#0d8360] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/quiz"
                  className="font-['Funnel_Display'] text-[18px] text-black capitalize hover:text-[#0d8360] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quiz
                </Link>
                <Link
                  to="/blog"
                  className="font-['Funnel_Display'] text-[18px] text-black capitalize hover:text-[#0d8360] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>

                <div className="pt-4 border-t border-gray-200">
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <button className="bg-[#0d8360] hover:bg-[#0a6b4f] text-white font-['Funnel_Display'] font-semibold text-[16px] px-6 py-3 rounded-full w-full transition-colors">
                      Shop Now
                    </button>
                    <div className="flex gap-3 justify-center">
                      <button className="bg-[#ededed] hover:bg-[#e0e0e0] w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors">
                        <ShoppingBag className="w-[24px] h-[24px] text-black" />
                      </button>
                      <button className="bg-[#ededed] hover:bg-[#e0e0e0] w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors">
                        <User className="w-[24px] h-[24px] text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
