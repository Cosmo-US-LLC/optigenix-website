import AboutHero from "@/components/PageComponents/AboutUs/AboutHero";
import backgroundVideo from "../assets/images/hero/Hero V3-compressed.mp4";
import backgroundImage from "../assets/images/hero/hero_background.webp";
import OurStory from "@/components/PageComponents/Home/OurStory";
import Team from "@/components/PageComponents/Home/Team";
import MicroInsights from "@/components/PageComponents/AboutUs/MicroInsights";
import FAQs from "@/components/PageComponents/Home/FAQs";

const About = () => {
  return (
    <>
      <AboutHero
        backgroundVideo={backgroundVideo}
        backgroundImage={backgroundImage}
      />
      <OurStory />
      <Team />
      <MicroInsights />
      <FAQs />
    </>
  );
};

export default About;
