"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { imageLaptop } from "../../../lib/imageLaptop";



function ProductsLaptop() {
  return (
    <div className="w-[1600px] h-[446px] m-auto mt-10 border-[1px] border-[#919ebc] rounded-2xl">
    <div>
      <div className="flex items-center justify-between pl-2.5 pr-4 pt-5 lg:px-10.5 pb-4 lg:pb-0 ">
        <h1 className="text-base font-semiBold leading-6 text-primary-shade-1 lg:text-[22px] lg:leading-8">
        لپ‌تاپ‌ها در تکنولایف
        </h1>
        <span className="flex items-center cursor-pointer gap-3 font-bold">
          نمایش همه
          <IoIosArrowBack />
        </span>
      </div>
      <div className="">
        <Swiper slidesPerView={6} navigation={true} modules={[Navigation]}>
          {imageLaptop.map((img, index) => (
            <SwiperSlide key={index}>
              <div className=" border-b-2 border-[#da1e28] w-[186px] pb-[2px] m-auto mt-8">
                <div className="flex justify-around text-[#da1e28]  gap-12">
                  <p className="text-sm font-bold">{img.letter}</p>
                  <span className="font-bold">{img.countDown}</span>
                </div>
              </div>
              <div className="border-l-2 border-[#d8d3e4] cursor-pointer">
                <div>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="w-[186px] h-[186px] m-auto"
                  />
                  <p className="w-[186px] h-[50px] m-auto mt-5 truncate text-sm">
                    {img.title}
                  </p>
                </div>
                <div className="h-[46px] w-full">
                  <div className=" flex w-full items-center justify-around">
                   <div className="min-w-6 lg:min-w-7 flex h-[17px] !items-center justify-center gap-1 rounded-[3px] px-1 lg:h-[19px] bg-red-600">
                   <span className="flex !items-center justify-center pt-[1px] text-center font-semiBold leading-4 text-white lg:pt-[3px] !text-xs 2md:!text-sm">{img.discount}</span>
                   </div>
                   <div className="text-base font-bold text-primary-shade-1 2md:text-xl">
                   <p >
                      {img.price}
                    </p>
                   </div>
                  </div>
                  <div className=" flex  justify-end ">
                    <p className="pt-0.5 ml-8 text-sm font-medium text-primary-tint-5 line-through ">
                      {img.offerPrice}
                    </p>
                  </div>
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

export default ProductsLaptop;
