import React from "react";
import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";

const Home = () => {
  return (
    <div className="container-fluid">
      <Hero />
      <Expertise />
    </div>
  );
};

export default Home;