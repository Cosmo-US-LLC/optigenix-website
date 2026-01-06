import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { Button } from "@/components/ui/button";
import DiscoverMenu from "./DiscoverMenu";
import { ArrowRight } from "lucide-react";

import Image1 from "@/assets/images/header/menu_img1.webp";
import Image2 from "@/assets/images/header/menu_img2.webp";
import Image3 from "@/assets/images/header/menu_img3.webp";
import Image4 from "@/assets/images/header/menu_img4.webp";
import Image5 from "@/assets/images/header/menu_img5.webp";
import Image6 from "@/assets/images/header/menu_img9.webp";
import Image7 from "@/assets/images/header/menu_img10.webp";
import Image8 from "@/assets/images/header/menu_img11.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoverMenuOpen, setDiscoverMenuOpen] = useState(false);
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isQuizPage = location.pathname === "/quiz";
  const discoverItems = [
    {
      title: (
        <p>
          At-Home Gene <br /> Test
        </p>
      ),
      image: Image1,
      href: "/gene-test",
    },
    {
      title: "Performance Blood Test",
      image: Image2,
      href: "/join-wait-list",
    },
    // { title: "Mental Performance", image: Image4 },
    // { title: "Physical Performance", image: Image3 },
    // { title: "Recovery", image: Image5 },
  ];

  const discoverItems2 = [
    // { title: "Your Body's User Manual", image: Image1 },
    // { title: "Unlock Vital Health Markers", image: Image2 },
    {
      title: "Mental Performance",
      image: Image4,
      links: "https://tryoptigenix.com/collections/mental-performance",
    },
    {
      title: "Physical Performance",
      image: Image3,
      links: "https://tryoptigenix.com/collections/physical-performance",
    },
    {
      title: "Recovery",
      image: Image5,
      links: "https://tryoptigenix.com/collections/recovery",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${
        isQuizPage ? "rounded-bl-[24px] rounded-br-[24px]" : ""}`}
    >
      {/* Discover Menu */}
      <DiscoverMenu
        isOpen={discoverMenuOpen}
        onClose={() => setDiscoverMenuOpen(false)}
      />
      {/* Desktop Navigation */}
      <nav className="max-w-[1280px] mx-auto px-4 md:px-8 py-[14px] hidden md:block">
        <div className="flex justify-between items-center">
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
            <span
              className="font-[600] font-Gibson leading-[-0.602px] text-[30px] font-funnel text-black
            "
              style={{
                fontFamily: "Gibson, sans-serif",
                letterSpacing: "-0.52px",
              }}
            >
              OptiGenix
            </span>
          </Link>

          {/* Right Side: Navigation + CTAs */}
          <div className="flex items-center gap-[32px]">
            {/* Navigation Links */}
            <div className="flex items-center gap-[32px]">
              <Link
                to="/about-us"
                className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
              >
                About us
              </Link>
              {/* Products with Dropdown */}
              {/* <div className="flex items-center gap-[5px] cursor-pointer group">
                <span className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal group-hover:text-[#0d8360] transition-colors">
                  Science
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
              </div> */}

              {/* About Us */}
              <Link
                to="/athletes"
                className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
              >
                Athletes
              </Link>

              {/* Quiz */}
              {/* <a
                href="/quiz"
                className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
              >
                Quiz
              </a> */}

              {/* Blog */}
              {/* <Link
                to="/blog"
                className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
              >
                Blog
              </Link> */}
            </div>

            {/* CTA Group */}
            <div className="flex items-center gap-[20px]">
              {/* Discover Button */}
              <Button
                variant="primary"
                size="md"
                onClick={() => setDiscoverMenuOpen(!discoverMenuOpen)}
              >
                Discover
              </Button>

              {/* Shopping Cart Icon */}
              <button
                onClick={() => {
                  window.location.href = "https://tryoptigenix.com/cart";
                }}
                className="bg-[#ededed] hover:bg-[#e0e0e0] hover:cursor-pointer w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors"
              >
                <ShoppingBag className="w-[24px] h-[24px] text-black" />
              </button>

              {/* User Icon */}
              <button
                onClick={() => {
                  window.location.href =
                    "https://shopify.com/authentication/63409160303/login?client_id=579732a1-531b-4c2b-9afe-f37ffa9e68b1&locale=en&redirect_uri=%2Fauthentication%2F63409160303%2Foauth%2Fauthorize%3Fclient_id%3D579732a1-531b-4c2b-9afe-f37ffa9e68b1%26locale%3Den%26nonce%3D4d764ffb-8bfc-4c55-9207-b76c477fd293%26redirect_uri%3Dhttps%253A%252F%252Fshopify.com%252F63409160303%252Faccount%252Fcallback%253Fsource%253Dcore%26region_country%3DUS%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3DhWN73dGcDa2WsjnpUn5D7Oh0&region_country=US";
                }}
                className="bg-[#ededed] hover:bg-[#e0e0e0] hover:cursor-pointer w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors"
              >
                <User className="w-[24px] h-[24px] text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`px-4 py-3 bg-white md:hidden ${
          isQuizPage ? "rounded-bl-[24px] rounded-br-[24px]" : ""}`}
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
            <span
              className="font-[600] text-[22px] font-['Funnel_Display'] text-black"
              style={{
                fontFamily: "Gibson, sans-serif",
                letterSpacing: "-0.52px",
              }}
            >
              OptiGenix
            </span>
          </Link>

          {/* Mobile Menu Sheet */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="z-9999" aria-label="Toggle menu">
                <Menu className="w-6 h-6 text-black bg-white" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[330px] sm:w-[400px] bg-white h-[100vh] flex flex-col"
            >
              <SheetHeader>
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
                  <span
                    className="font-[600] leading-[-0.602px] text-[30px] font-funnel text-black"
                    style={{
                      fontFamily: "Gibson, sans-serif",
                      letterSpacing: "-0.52px",
                    }}
                  >
                    OptiGenix
                  </span>
                </Link>
              </SheetHeader>
              <div
                className="overflow-y-auto flex-1 pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
                style={{ scrollbarWidth: "none" }}
              >
                <div className="flex flex-col gap-6 pb-6 mt-8">
                  <Link
                    to="/about-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-['Funnel_Display'] text-[16px] text-black capitalize leading-normal hover:text-[#0d8360] transition-colors"
                  >
                    About us
                  </Link>
                  {/* Navigation Links */}
                  {/* <div
                  className="font-['Funnel_Display'] text-[18px] text-black capitalize hover:text-[#0d8360] transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Science
                </div> */}
                  <Link
                    to="/athletes"
                    className="font-['Funnel_Display'] text-[18px] text-black capitalize hover:text-[#0d8360] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Athletes
                  </Link>

                  {/* Mobile Discover dropdown */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setMobileDiscoverOpen((prev) => !prev)}
                      className="flex items-center justify-between font-['Funnel_Display'] text-[18px] text-black capitalize hover:text-[#0d8360] transition-colors"
                    >
                      <span>Discover</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDiscoverOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileDiscoverOpen && (
                      <div className="flex flex-col gap-3 items-end">
                        <div className="grid grid-cols-2 gap-3">
                          {discoverItems.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDiscoverOpen(false);
                              }}
                              className="bg-[#f6f6f6] flex mt-2 flex-col items-center overflow-hidden rounded-[12px] w-full hover:bg-white transition-colors"
                            >
                              <div className="h-[70px] w-full overflow-hidden bg-[#dce3e4]">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="px-2 py-2 text-center">
                                <p className="font-['Funnel_Display'] font-medium text-[#010907] text-[11px] leading-[14px] whitespace-pre-wrap">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/join-wait-list"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileDiscoverOpen(false);
                          }}
                          className="font-['Inter'] text-[#3fa290] text-[13px] pr-6 font-semibold text-center hover:underline"
                        >
                          Join Waitlist!
                        </Link>
                        <div className="grid grid-cols-1 gap-3">
                          {discoverItems2.map((item, idx) => (
                            <div key={idx}>
                              <a
                                href={item?.links}
                                target="_blank"
                                className="bg-[#f6f6f6] flex mt-2 flex-row items-center overflow-hidden rounded-[12px] w-full"
                              >
                                <div className="h-[100px] w-1/2 overflow-hidden  bg-[#dce3e4]">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <div className="px-2 py-2 w-1/2 text-center">
                                  <p className="font-['Funnel_Display'] font-medium text-[#010907] md:text-[11px] text-[14px] leading-[16px] whitespace-pre-wrap">
                                    {item.title}
                                  </p>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Section - Quiz */}
                  <div className="flex flex-col gap-[16px] md:gap-[20px] shrink-0 w-full md:w-auto">
                    <div className="flex gap-[16px] md:gap-[32px] items-center">
                      <p className="capitalize font-['Funnel_Display'] font-semibold text-[#3fa290] text-[14px] md:text-[16px] leading-normal">
                        Still Confused?
                      </p>
                    </div>

                    <div className="flex flex-col gap-[12px] md:gap-[16px] min-h-[120px] md:h-[137px] justify-center px-[12px] md:px-[16px] py-[16px] md:py-[20px] rounded-[12px] w-full md:w-[360px] bg-linear-to-br from-[#2b7a6c] to-[#0a694d]">
                      <div className="flex flex-row md:flex-row gap-[16px] md:gap-[24px] items-center w-full">
                        {/* Customer Images */}
                        <div className="flex flex-col gap-[12px] md:gap-[15px] items-center md:items-start leading-0 w-[100px] md:w-[116px] shrink-0">
                          <div className="grid relative grid-cols-1 grid-rows-1 scale-90 md:scale-100">
                            <div className="col-1 row-1 flex items-center justify-center ml-[45px] md:ml-[55px] mt-0 relative w-[50px] md:w-[61.237px] h-[50px] md:h-[61.237px]">
                              <div className="rotate-195 -scale-y-100">
                                <div className="border-2 border-solid border-white rounded-[6px] md:rounded-[8px] w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative overflow-hidden">
                                  <img
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                                    src={Image8}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-1 row-1 flex items-center justify-center ml-0 mt-0 relative w-[50px] md:w-[61.237px] h-[50px] md:h-[61.237px]">
                              <div className="rotate-345">
                                <div className="border-2 border-solid border-white rounded-[6px] md:rounded-[8px] w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative overflow-hidden">
                                  <img
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                                    src={Image6}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="border-2 border-solid border-white col-1 row-1 ml-[32px] md:ml-[39px] mt-[3px] rounded-[6px] md:rounded-[8px] w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative overflow-hidden">
                              <img
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                                src={Image7}
                              />
                            </div>
                          </div>
                          <div className="font-['Inter'] font-normal text-[#f8fffd] text-center w-full">
                            <p className="leading-[15px] md:leading-[17px] mb-0">
                              <span className="font-bold text-[12px] md:text-[14px]">
                                1400+
                              </span>
                              <span className="text-[11px] md:text-[12px]">
                                {" "}
                                Satisfied
                              </span>
                            </p>
                            <p className="leading-[15px] md:leading-[17px] text-[11px] md:text-[12px]">
                              Customers
                            </p>
                          </div>
                        </div>

                        {/* Quiz CTA */}
                        <div className="flex flex-col gap-[12px] md:gap-[16px] items-center md:items-start justify-center flex-1 w-full">
                          <p className="font-['Inter'] font-normal leading-[16px] md:leading-[17px] text-[#f8fffd] text-[13px] md:text-[14px] text-center md:text-left">
                            Find your perfect supplement in under 2 mins.
                          </p>
                          <button
                            onClick={() => {
                              navigate("/quiz");
                              setMobileMenuOpen(false);
                              setMobileDiscoverOpen(false);
                            }}
                            className="bg-[#f8fffd] flex gap-[6px] md:gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[100px] hover:bg-white transition-colors group"
                          >
                            <span className="font-['Inter'] font-bold leading-[16px] md:leading-[19px] text-[#2b7a6c] text-[11px] md:text-[12px]">
                              Take our Quiz
                            </span>
                            <ArrowRight className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-[#2b7a6c] group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="pt-4 border-t border-gray-200">
                   
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full"
                      onClick={() => {
                        setDiscoverMenuOpen(!discoverMenuOpen);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Discover
                    </Button>
                    <div className="flex gap-3 justify-center">
                      <button className="bg-[#ededed] hover:bg-[#e0e0e0] w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors">
                        <ShoppingBag className="w-[24px] h-[24px] text-black" />
                      </button>
                      <button className="bg-[#ededed] hover:bg-[#e0e0e0] w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-colors">
                        <User className="w-[24px] h-[24px] text-black" />
                      </button>
                    </div>
                  </div>
                </div> */}
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
