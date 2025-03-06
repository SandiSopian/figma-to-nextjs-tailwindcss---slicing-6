import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HeroSpacing from "./HeroSpacing";
import Catalog from "./Catalog";
import MoreSection from "./MoreSection";
import Footer from "./Footer";

const HomePage = () => {
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
        <MoreSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
