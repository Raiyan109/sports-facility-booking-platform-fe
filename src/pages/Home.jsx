import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import { Search } from "./Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
