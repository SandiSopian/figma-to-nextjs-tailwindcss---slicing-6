import React from "react";
import { catalogSection } from "@/service/database";
import Image from "next/image";

const Catalog = () => {
  const product1 = catalogSection[0].product1;
  const product2 = catalogSection[1].product2;
  const product3 = catalogSection[2].product3;
  const product4 = catalogSection[3].product4;
  const product5 = catalogSection[4].product5;
  const product6 = catalogSection[5].product6;
  const product7 = catalogSection[6].product7;

  return (
    <section className="flex flex-col items-center justify-center mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">CATALOG</h1>

      {/* Desktop View */}
      <div className="container hidden lg:flex gap-2 container mx-auto justify-center text-white">
        {/* Colomn 1 */}
        <div className="bg-BgColorMain w-1/4 flex flex-col gap-24 p-6">
          <p className="text-lg font-semibold">{product1.catalogName}</p>
          <Image src={product1.catalogImg} alt={product1.catalogName} className="w-full transform scale-150 h-auto justify-center object-contain mb-4 flex items-center" />
        </div>

        {/* Colomn 3 */}
        <div className="flex flex-col gap-2 w-1/4 ">
          {/* Colomn Kecil 2 */}
          <div className="flex gap-2 h-[16rem]">
            <div className="bg-BgColorMain w-1/2 flex flex-col gap-12 p-6">
              <p className="text-lg font-semibold">{product3.catalogName}</p>
              <Image src={product3.catalogImg} alt={product3.catalogName} className="w-full transform scale-150 h-auto justify-center object-contain mb-4 flex items-center" />
            </div>
            <div className="bg-BgColorMain w-1/2 flex flex-col gap-8 p-6">
              <p className="text-lg font-semibold">{product6.catalogName}</p>
              <Image src={product6.catalogImg} alt={product6.catalogName} className="w-full transform scale-150 h-auto justify-center object-contain mb-4 flex items-center" />
            </div>
          </div>

          <div className="bg-BgColorMain h-[16rem] flex flex-col p-4">
            <p className="text-lg font-semibold mb-2">{product7.catalogName}</p>
            <Image src={product7.catalogImg} alt={product7.catalogName} className="w-full transform scale-200 h-auto justify-center object-contain overflow-hidden mb-4 flex items-center" />
          </div>
        </div>

        {/* Colomn 4 */}
        <div className="flex flex-col gap-2 w-1/4">
          <div className="bg-BgColorMain h-[16rem] flex flex-col p-4">
            <p className="text-lg font-semibold">{product4.catalogName}</p>
            <Image src={product4.catalogImg} alt={product4.catalogName} className="w-full transform scale-80 h-auto justify-center object-contain overflow-hidden mb-4 flex items-center" />
          </div>
          <div className="bg-BgColorMain h-[16rem] flex flex-col p-4">
            <p className="text-lg font-semibold">{product5.catalogName}</p>
            <Image src={product5.catalogImg} alt={product5.catalogName} className="w-full transform scale-150 h-auto justify-center object-contain overflow-hidden mb-4 flex items-center" />
          </div>
        </div>

        {/* Colomn 2 */}
        <div className="bg-BgColorMain w-1/4 flex flex-col gap-24 p-6">
          <p className="text-lg font-semibold">{product2.catalogName}</p>
          <Image src={product2.catalogImg} alt={product2.catalogName} className="w-full transform scale-125 h-auto justify-center object-contain mb-4 flex items-center" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {catalogSection.map((catalog, index) => {
          const product = Object.values(catalog)[0]; // Mengambil value pertama dari objek
          return (
            <div key={index} className="bg-BgColorMain p-12 rounded-lg flex flex-col items-center text-white ">
              <Image src={product.catalogImg} alt={product.catalogName} className="w-48 h-48 object-contain mb-4" />
              <p className="text-lg font-semibold">{product.catalogName}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;
