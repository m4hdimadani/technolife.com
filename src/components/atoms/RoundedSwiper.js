"use client";

import "swiper/css";
import "swiper/css/pagination";


import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { roundedImg } from "../../../lib/images";
import Image from "next/image";

function RoundedSwiper() {
  return (
    <div className="w-[1600px] m-auto mt-10">
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {roundedImg.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="pr-8 ">
              
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-[132px] h-[132px] cursor-pointer border-sky-500 border-2 rounded-full p-2 hover:border-4"
                />
             
              <p className="text-center mt-5 ml-6 text-[#1b3570] font-bold">{img.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RoundedSwiper;
