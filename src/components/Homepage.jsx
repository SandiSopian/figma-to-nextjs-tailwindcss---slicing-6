import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Catalog from "../components/Catalog";

const Homepage = () => {
  return (
    <div className="bg-BgColorMain">
      <Navbar />
      <Hero />
      <Catalog />
    </div>
  );
};

export default Homepage;
