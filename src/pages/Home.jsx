import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import { Search } from "./Search";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* <Search /> */}
      <Facilities />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
