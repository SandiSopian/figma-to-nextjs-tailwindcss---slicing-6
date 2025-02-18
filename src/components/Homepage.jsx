import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <div className="bg-BgColorMain flex flex-col items-center justify-center h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Homepage;
