import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "../styles/globals.css";

const disclaimer = () => {
  return (
    <>
      <div className="bg-BgColorMain">
        <Navbar />
      </div>
      <Disclaimer />
      <Footer />
    </>
  );
};

export default disclaimer;
