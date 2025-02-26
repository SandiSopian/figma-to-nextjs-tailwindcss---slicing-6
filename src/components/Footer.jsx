"use client";

import React from "react";
import { footerSection } from "@/service/database";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { footerImg, footerEmail, footerFb, footerIg, footerWebsite } = footerSection;
  const menuItems = [
    { name: "About Us", link: "/about" },
    { name: "Products", link: footerWebsite },
    { name: "Official Website", link: footerWebsite },
    { name: "Disclaimer", link: "/disclaimer" },
  ];

  return (
    <div className="container mx-auto text-FontColor2 mt-24">
      <div>
        <Image src={footerImg} alt="footer" className="mx-auto" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly mb-24">
        <div className="flex flex-col justify-center md:justify-between items-center md:items-start py-10 gap-6 md:w-1/2">
          <p className="font-bold text-4xl md:text-7xl">Bardiner</p>
          {/* Social Media */}
          <div className="flex gap-4">
            <Link href={footerIg}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href={footerFb}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href={footerWebsite}>
              <FontAwesomeIcon icon={faGlobe} />
            </Link>
          </div>

          <p className="w-80 md:w-full md:max-w-md text-center md:text-justify text-pretty">Stay updated with the lastest trends and exclutsive offers from Bardi. Follow our newsletter</p>

          <div className="flex justify-between border border-gray-300 rounded-md max-w-sm">
            <input type="text" placeholder="Your email address" className=" px-2 py-1 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="ml-2 px-3 py-1 bg-ButtonColor border">
              <span className="text-black">⇒</span>
            </button>
          </div>
        </div>

        <div className="w-80 md:w-1/4">
          {menuItems.map((item, index) => (
            <div key={index}>
              {index > 0 && <hr className="border-gray-300" />}
              <Link href={item.link} className="flex items-center justify-between py-4 px-4 hover:text-cyan-800">
                {item.name}
                <span className="text-gray-400">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
