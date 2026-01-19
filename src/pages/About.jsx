import AboutOurStory from "@/components/PageComponents/About/AboutOurStory";
import AboutMissionVision from "@/components/PageComponents/About/AboutMissionVision";
import AboutMeetTeam from "@/components/PageComponents/About/AboutMeetTeam";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

const About = () => {
  return (
    <>
      <MetaTags
        title="Our Journey to Provide Customized Health and Performance Solutions"
        description="Learn about our journey and mission to deliver customized health and performance solutions, helping you optimize fitness and overall well-being."
      />
      <AboutOurStory />
      <AboutMissionVision />
      <AboutMeetTeam />
    </>
  );
};

export default About;
