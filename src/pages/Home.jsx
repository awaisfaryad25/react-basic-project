// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import HeroSection from "../components/hero/HeroSection";
// import About from "../components/about/About";
// import Portfolio from "../components/portfolio/Portfolio";
// import Services from "../components/services/Services";
// import Feedback from "../components/feedback/Feedback";
// import ContactUs from "../components/contact/ContactUs";

const Home = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const sectionId = location.hash.replace("#", "");
  //     const element = document.getElementById(sectionId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // }, [location.hash]);

  return (
    <div>
      <div className="space-y-4 md:space-y-8 mb-4 md:mb-8">
        {/* <HeroSection id="hero" /> */}
        {/* <About id="about" /> */}
        {/* <Portfolio id="portfolio" /> */}
        {/* <Services id="services" /> */}
        {/* <Feedback id="feedback" /> */}
        {/* <ContactUs id="contact" /> */}
      </div>
    </div>
  );
};

export default Home;