import React from "react";
import { heroSection } from "@/service/database";
import Image from "next/image";

const Hero = () => {
  const { heroImg } = heroSection;

  return (
    <section className="container mx-auto">
      {/* Hero Upper Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-6 bg-BgColorMain ">
        <div className="text-white lg:w-1/2 px-6 md:px-0 md:py-12 flex flex-col gap-6 sm:gap-10 sm:mx-12">
          <h1 className="text-4xl max-w-sm sm:max-w-lg">AI-Powered Future Innovation. Smart. Holographic. Adaptive.</h1>

          <p className="max-w-sm sm:max-w-lg">
            Discover Bardi, a revolutionary AI-powered solution that brings the latest generation of artificial intelligence to your daily life! With real-time predictive capabilities, automatic adaptation to user habits, and an interactive
            holographic interface, this product not only simplifies your routines but also propels you into the future era. Experience inspiring innovation where technology and comfort unite without boundaries.h
          </p>

          <div className="flex items-center gap-8">
            <button className="rounded-md py-3 px-6 bg-ButtonColor hover:text-gray-100">Shop Now ✨</button>
            <p>Guarantee 1 year</p>
          </div>
        </div>

        <div>
          <Image src={heroImg} alt="hero image" width={500} height={500} className="flex items-center justify-center mx-auto w-30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
