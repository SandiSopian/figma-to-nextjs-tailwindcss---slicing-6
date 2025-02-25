import React from "react";
import { moreSection } from "@/service/database";
import Image from "next/image";

const More = () => {
  const { product1, product2, product3 } = moreSection;

  return (
    <section className="container mx-auto">
      <h1 className="text-4xl font-bold text-center text-BgColorSecond mb-8 mt-24">Get to know more closely</h1>

      <div className="flex flex-col lg:flex-row justify-center gap-8 p-8">
        <div className="bg-BgColorMain text-white flex flex-col justify-end overflow-hidden lg:w-1/3 gap-4">
          <div className="flex-grow">
            <h2 className="text-xl px-6 pt-8 pb-6">{product1.productName}</h2>
            <p className="text-sm px-6 pb-6">{product1.productDescription}</p>
          </div>
          <Image src={product1.productImg} alt={product1.productName} className="bg-BgColorSecond lg:ml-6 w-full object-cover" />
        </div>

        {/* Card no 2 Desktop Only */}
        <div className="hidden lg:block bg-BgColorMain text-white flex flex-col overflow-hidden lg:w-1/3 gap-4">
          <Image src={product2.productImg} alt={product2.productName} className="bg-BgColorSecond w-full object-cover" />
          <div className="flex-grow">
            <h2 className="text-xl px-6 pt-8 pb-10">{product2.productName}</h2>
            <p className="text-sm px-6 px-6 pb-6">{product2.productDescription}</p>
          </div>
        </div>

        {/* Card no 2 Mobile Only */}
        <div className="block lg:hidden bg-BgColorMain text-white flex flex-col justify-end overflow-hidden gap-4">
          <div className="flex-grow">
            <h2 className="text-xl px-6 pt-8 pb-10">{product2.productName}</h2>
            <p className="text-sm px-6 px-6 pb-6">{product2.productDescription}</p>
          </div>
          <Image src={product2.productImg} alt={product2.productName} className="bg-BgColorSecond w-full object-cover" />
        </div>

        <div className="bg-BgColorMain text-white flex flex-col justify-end overflow-hidden lg:w-1/3 gap-4">
          <div className="flex-grow">
            <h2 className="text-xl px-6 pt-8 pb-10">{product3.productName}</h2>
            <p className="text-sm px-6 px-6 pb-6">{product3.productDescription}</p>
          </div>
          <Image src={product3.productImg} alt={product3.productName} className="bg-BgColorSecond lg:ml-6 w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default More;
