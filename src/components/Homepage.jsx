import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroSpacing from "../components/HeroSpacing";
import Catalog from "../components/Catalog";
import More from "../components/More";

const Homepage = () => {
  return (
    <>
      <div className="bg-BgColorMain">
        <Navbar />
        <Hero />
      </div>
      <HeroSpacing />
      <Catalog />
      <More />
    </>
  );
};

export default Homepage;
