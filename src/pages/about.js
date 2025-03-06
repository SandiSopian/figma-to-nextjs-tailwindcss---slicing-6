import React from "react";
import AboutPage from "../components/AboutPage";
import Navbar from "@/components/Navbar";
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
