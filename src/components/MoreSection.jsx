"use client";

import React from "react";
import { moreSection } from "@/service/database";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const MoreSection = () => {
  const { product1, product2, product3 } = moreSection;
  const products = [product1, product2, product3];

  return (
    <section className="container mx-auto mt-24">
      <h1 className="text-4xl md:text-5xl max-w-sm md:max-w-full mx-auto font-bold text-center text-FontColor2 mb-8 mt-24">Get to know more closely</h1>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-center mx-auto gap-8 p-8 max-w-sm lg:max-w-full">
        <div className="bg-BgColorMain text-white flex flex-col justify-end overflow-hidden lg:w-1/3 gap-4">
          <div className="flex-grow">
            <h2 className="text-xl px-6 pt-8 pb-6">{product1.productName}</h2>
            <p className="text-sm px-6 pb-6">{product1.productDescription}</p>
          </div>
          <Image src={product1.productImg} alt={product1.productName} className="bg-BgColorSecond lg:ml-6 w-full object-cover" />
        </div>

        <div className="bg-BgColorMain text-white flex flex-col overflow-hidden lg:w-1/3 gap-4">
          <Image src={product2.productImg} alt={product2.productName} className="bg-BgColorSecond w-full object-cover" />
          <div className="flex-grow">
            <h2 className="text-xl px-6 pt-8 pb-10">{product2.productName}</h2>
            <p className="text-sm px-6 px-6 pb-6">{product2.productDescription}</p>
          </div>
        </div>

        <div className="bg-BgColorMain text-white flex flex-col justify-end overflow-hidden lg:w-1/3 gap-4">
          <div className="flex-grow">
            <h2 className="text-xl px-6 pt-8 pb-10">{product3.productName}</h2>
            <p className="text-sm px-6 px-6 pb-6">{product3.productDescription}</p>
          </div>
          <Image src={product3.productImg} alt={product3.productName} className="bg-BgColorSecond lg:ml-6 w-full object-cover" />
        </div>
      </div>

      {/* Mobile View - Swiper */}
      <div className="block lg:hidden px-8 max-w-md mx-auto">
        <Swiper modules={[Pagination]} spaceBetween={16} slidesPerView={1} pagination={{ clickable: true }} className="h-[1000px]">
          {products.map((product, index) => (
            <SwiperSlide key={index} className="h-full flex">
              <div className="bg-BgColorMain text-white flex flex-col justify-between overflow-hidden gap-4 w-full min-h-[500px] h-full">
                <div className="flex-grow px-6 py-6">
                  <h2 className="text-xl pb-4">{product.productName}</h2>
                  <p className="text-sm">{product.productDescription}</p>
                </div>
                <div className="w-full h-1/2">
                  <Image src={product.productImg} alt={product.productName} className="bg-BgColorSecond w-full h-full object-contain" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MoreSection;
