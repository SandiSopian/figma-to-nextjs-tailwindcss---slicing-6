import React from "react";
import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import "../styles/globals.css";

const about = () => {
  return (
    <>
      <div>
        <div className="bg-BgColorMain">
          <Navbar />
        </div>
        <AboutPage />
        <Footer />
      </div>
    </>
  );
};

export default about;
