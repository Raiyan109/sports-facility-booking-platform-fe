import Facilities from "../components/Facilities";
import FeaturedFacilities from "../components/FeaturedFacilities";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import WhatWeDo from "../components/WhatWeDo";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
        <Navbar />
        <Hero />
        <FeaturedFacilities />
        {/* <Search /> */}
        <Facilities />
        <HowItWorks />
        <WhatWeDo />
        <Testimonials />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
