"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { imagesOff } from "../../../lib/imagesOff";

function ProductsOff() {
  return (
    <div className="w-[1600px] m-auto mt-10 border-2 border-[#ffd7d9] rounded-2xl">
      <div>
        <div className="flex justify-between bg-[#a2191f] text-white h-[53px] items-center p-8 rounded-2xl m-3">
            <h1 className="pr-2 text-white grow text-sm lg:text-2xl font-semiBold text-right">تکنوآف</h1>
            <span className="flex items-center cursor-pointer gap-3 font-bold">
                نمایش همه
                <IoIosArrowBack />
            </span>
        </div>
        <div className="">
          <Swiper slidesPerView={6} navigation={true} modules={[Navigation]}>
            {imagesOff.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <Image src={img.src} alt={img.alt} className="" />

                  <p>{img.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProductsOff;
