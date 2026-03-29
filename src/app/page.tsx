import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import Experience from "@/components/home/Experience";
import Approach from "@/components/home/Approach";
import BentoGrid from "@/components/home/BentoGrid";
import Project from "@/components/home/Project";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <div className="container-fluid">
      <Hero />
      <Expertise />
      <Experience />
      <Project />
      <Approach />
      <BentoGrid />
      <Footer />
    </div>
  );
};

export default Home;
