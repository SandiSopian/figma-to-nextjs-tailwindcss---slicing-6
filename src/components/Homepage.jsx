import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HeroSpacing from "./HeroSpacing";
import Catalog from "./Catalog";
import More from "./More";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <header className="bg-BgColorMain">
        <Navbar />
      </header>

      <main>
        <div className="bg-BgColorMain">
          <Hero />
        </div>
        <HeroSpacing />
        <Catalog />
        <More />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;
