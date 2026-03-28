import React from "react";
import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import Avely from "@/components/home/Avely";
import Experience from "@/components/home/Experience";
import Approach from "@/components/home/Approach";

const Home = () => {
  return (
    <div className="container-fluid">
      <Hero />
      <Expertise />
      <Experience />
      <Approach />
    </div>
  );
};

export default Home;
