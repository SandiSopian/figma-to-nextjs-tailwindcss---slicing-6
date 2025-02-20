"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container flex items-center justify-between mx-auto py-4 px-8 text-FontColor1 bg-BgColorMain">
      <Link href="/">
        <h1 className="text-xl font-bold hover:text-white">Bardiner</h1>
      </Link>

      <Link href="https://bardi.co.id/products/" target="_blank" className="flex items-center hover:text-white hover:underline">
        <FontAwesomeIcon icon={faCartShopping} className="border-red-400 size-4 mr-2" />
        <span>Shop</span>
      </Link>

      <ul className="hidden md:flex justify-center items-center ">
        <li className="py-2 px-4 hover:text-white hover:underline ">
          <Link href="/review" onClick={() => setMenuOpen(false)}>
            Reviews
          </Link>
        </li>
        <li className="py-2 px-4 hover:text-white hover:underline">
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li className="py-2 px-4 hover:text-white hover:underline">
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Navbar for mobile only */}
      <button className="md:hidden text-xl focus:outline-none hover:text-white" onClick={toggleMenu}>
        {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <ul
        className={`absolute left-0 w-full backdrop-sepia-0 bg-white/30 shadow-md md:static md:space-x-4 md:shadow-none md:bg-transparent transition-transform duration-300 ${
          menuOpen ? "translate-x-0 top-16" : "-translate-x-full top-16"
        } md:translate-x-0 md:hidden`}
      >
        <li className="border-b md:border-none py-2 px-4 md:py-0 hover:text-white hover:underline">
          <Link href="/review" onClick={() => setMenuOpen(false)}>
            Reviews
          </Link>
        </li>
        <li className="border-b md:border-none py-2 px-4 md:py-0 hover:text-white hover:underline">
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li className="border-b md:border-none py-2 px-4 md:py-0 hover:text-white hover:underline">
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
