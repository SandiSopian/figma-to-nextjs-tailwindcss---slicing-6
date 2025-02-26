import React from "react";
import Image from "next/image";
import { heroSection } from "@/service/database";

const Spacing = () => {
  const { heroWave } = heroSection;
  return (
    <>
      {/* Hero Bottom Section */}
      <div className="bg-white">
        <Image src={heroWave} alt="wave" className="mx-auto" />

        <div className="container flex flex-col sm:flex-row gap-6 sm:gap-0 items-center text-center md:text-left justify-between mx-auto my-32 lg:my-12 text-FontColor2">
          <p className="sm:w-1/2 sm:max-w-sm mx-6 sm:mx-12">
            Explore smarthome products
            <span className="sm:block">- Upgrade yout home</span>
          </p>
          <p className="text-xl sm:w-1/2 sm:max-w-sm mx-6 sm:mx-12">Shop Now for Exclusive Deals and Enjoy Futuristic Home Innovation.</p>
        </div>
      </div>
    </>
  );
};

export default Spacing;
