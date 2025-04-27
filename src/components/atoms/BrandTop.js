"use client";

import { MdContactSupport } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Logo } from "../../../lib/imageLogo";
import Image from "next/image";

function BrandTop() {
  return (
    <div>
      <div className="flex justify-center mt-10 border border-[#d3d8e4] w-[1550px] h-[140.75px] m-auto rounded-[18px]">
        <div className="bg-[#1b3570] flex flex-col items-center gap-[6px] rounded-r-[18px]  px-[33px] pb-[26px] pt-8">
          <MdContactSupport className="w-[38px] h-[38px] text-white"/>
          <h1 className="min-w-[130px] text-xl font-bold text-white">برندهای منتخب</h1>
        </div>
        <div className="w-[1382px] h-[136.76px] m-auto flex items-center">
          <Swiper slidesPerView={6} navigation={true} modules={[Navigation]}>
            <div >
              {Logo.map((i, index) => (
                <div  className="flex items-center">
                  <SwiperSlide key={index}>
                    <div className="w-[196px] h-[88px]  m-auto border-l border-[#d3d8e4]">
                      <Image src={i.src} alt={i.alt} className="w-[100px] h-[80px] m-auto"/>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BrandTop;
