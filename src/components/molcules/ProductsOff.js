"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { imagesOff } from "../../../lib/imagesOff";
import CountDown from "../../../utils/CountDown";

function ProductsOff() {
  return (
    <div className="w-[1600px] m-auto mt-10 border-2 border-[#ffd7d9] rounded-2xl">
      <div>
        <div className="flex justify-between bg-[#a2191f] text-white h-[53px] items-center p-8 rounded-2xl m-3">
          <h1 className="pr-2 text-white grow text-sm lg:text-2xl font-semiBold text-right">
            تکنوآف
          </h1>
          <span className="flex items-center cursor-pointer gap-3 font-bold">
            نمایش همه
            <IoIosArrowBack />
          </span>
        </div>
        <div className="bor">
          <Swiper slidesPerView={6} navigation={true} modules={[Navigation]}>
            {imagesOff.map((img, index) => (
              <SwiperSlide key={index}>
                <div>
                  <span>{img.countDown}</span>
                </div>
                <div className="border-l-2 border-[#d8d3e4] ">
                  <div>
                    <Image src={img.src} alt={img.alt} className="" />
                    <p className="w-[186px] h-[50px]">{img.title}</p>
                  </div>
                  <div>
                    <p className="text-base font-semiBold text-primary-shade-1 2md:text-xl">
                      {img.price}
                    </p>
                    <span>{img.discount}</span>
                  </div>
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
