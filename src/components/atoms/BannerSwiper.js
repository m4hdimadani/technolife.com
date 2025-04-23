"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import { images } from "../../../lib/images";

function BannerSwiper() {
  return (
    <div>
         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
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
      </Swiper>
    </div>
  )
}

export default BannerSwiper