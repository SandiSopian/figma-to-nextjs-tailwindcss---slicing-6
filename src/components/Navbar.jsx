import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 shadow-md text-white">
      <h1>Bardiner</h1>

      <Link href="https://bardi.co.id/products/" target="_blank">
        Shop
      </Link>

      <ul className="list-none">
        <li>Review</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
