import React from "react";
import Aboutpage from "../components/Aboutpage";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        {/* Title Tag */}
        <title>Tara Trip Gallery</title>
        {/* Meta Description */}
        <meta name="description" content="Tara Trip Gallery - Jelajahi galeri perjalanan kami dengan koleksi foto dan cerita yang menginspirasi." />
        {/* Meta Keywords (opsional, meskipun tidak banyak digunakan oleh Google) */}
        <meta name="keywords" content="travel, gallery, photography, trip, vacation, Tara Trip" />
        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Canonical Link (untuk mencegah duplikasi URL) */}
        <link rel="canonical" href="https://example.com/tara-trip-gallery" />
      </Head>

      <div>
        <Aboutpage />
      </div>
    </>
  );
};

export default about;
