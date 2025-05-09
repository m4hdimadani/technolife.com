"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import { images } from "../../../lib/images";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function BannerSwiper() {
  return (
    <div className="w-[1900px] m-auto mt-[200px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper banner-swiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="cursor-pointer">
              <Image src={img.src} alt={img.alt} />
            </div>
          </SwiperSlide>
        ))}

          <div className="custom-next custom-nav">
            <FaAngleRight />
          </div>
        <div className="custom-prev custom-nav">
          <FaAngleLeft />
        </div>
      </Swiper>
    </div>
  );
}

export default BannerSwiper;
