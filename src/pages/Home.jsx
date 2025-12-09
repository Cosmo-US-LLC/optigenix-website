import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/PageComponents/Home/Hero";
import USPBanner from "../components/PageComponents/Home/USPBanner";
import Categories from "../components/PageComponents/Home/Categories";
import Products from "../components/PageComponents/Home/Products";
import OurStory from "../components/PageComponents/Home/OurStory";
// import DNABloodTest from "../components/PageComponents/Home/DNABloodTest";
import PersonalizedTests from "../components/PageComponents/Home/PersonalizedTests";
import TrustedPartners from "../components/PageComponents/Home/TrustedPartners";
import HowItWorks from "../components/PageComponents/Home/HowItWorks";
import CaseStudy from "../components/PageComponents/Home/CaseStudy";
import Quality from "../components/PageComponents/Home/Quality";
import Team from "../components/PageComponents/Home/Team";
import Comparison from "../components/PageComponents/Home/Comparison";
import Testimonials from "../components/PageComponents/Home/Testimonials";
import FAQs from "../components/PageComponents/Home/FAQs";
import Instagram from "../components/PageComponents/Home/Instagram";
import WhatsNext from "../components/PageComponents/Home/WhatsNext";
import backgroundVideo from "../assets/images/hero/Hero V3-compressed.mp4";
import backgroundImage from "../assets/images/hero/hero_background.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleHeroClick = () => {
    navigate("/all-category");
  };

  return (
    <div className="min-h-screen">
      <Hero
        backgroundVideo={backgroundVideo}
        backgroundImage={backgroundImage}
        ctaText="Discover Your Personalized Plan"
        onCtaClick={handleHeroClick}
      />
      <USPBanner />
      <Categories />
      <Products />
      {/* <OurStory /> */}
      {/* <DNABloodTest /> */}
      <PersonalizedTests />
      {/* <TrustedPartners /> */}
      {/* <HowItWorks /> */}
      <CaseStudy />
      <Quality />
      <Team />
      <Comparison />
      <Testimonials />
      <WhatsNext />
      <FAQs />
      <Instagram />
    </div>
  );
};

export default Home;
