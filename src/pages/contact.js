import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";
import "../styles/globals.css";

const contact = () => {
  return (
    <>
      <div className="bg-BgColorMain">
        <Navbar />
      </div>
      <ContactPage />
      <Footer />
    </>
  );
};

export default contact;
