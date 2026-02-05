
import HeroSection from "../components/home/HeroSection";

import About from "../components/home/About";

const Home = () => {

  return (
    <div>
      <div className="space-y-4 md:space-y-8 mb-4 md:mb-8">
        <HeroSection id="hero" />
        <About id="about" />
        {/* <Portfolio id="portfolio" /> */}
        {/* <Services id="services" /> */}
        {/* <Feedback id="feedback" /> */}
        {/* <ContactUs id="contact" /> */}
      </div>
    </div>
  );
};

export default Home;