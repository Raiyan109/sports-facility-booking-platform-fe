import Facilities from "../components/Facilities";
import FeaturedFacilities from "../components/FeaturedFacilities";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import { Search } from "./Search";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1480px] mx-auto container overflow-hidden px-10">
        <Navbar />
        <Hero />
        <FeaturedFacilities />
        {/* <Search /> */}
        <Facilities />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
