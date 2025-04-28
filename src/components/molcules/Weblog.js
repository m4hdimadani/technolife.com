"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { imageWeblog } from "../../../lib/imageWeblog";

import { FaAngleDown } from "react-icons/fa6";

function Weblog() {
  return (
    <>
      <div className="w-[1600px] h-[356px] m-auto mt-20 border-[1px] border-[#919ebc] rounded-2xl">
        <div>
          <div className="flex items-center justify-between pl-2.5 pr-4 pt-5 lg:px-10.5 pb-4 lg:pb-0 ">
            <h1 className="text-base font-semiBold leading-6 text-primary-shade-1 lg:text-[22px] lg:leading-8">
              از وبلاگ تکنولایف
            </h1>
            <span className="flex items-center cursor-pointer gap-3 font-bold">
              نمایش بیشتر در بلاگ
              <IoIosArrowBack />
            </span>
          </div>
          <div className="relative">
            <Swiper slidesPerView={6} navigation={true} modules={[Navigation]}>
              {imageWeblog.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="border-l-2 border-[#d8d3e4] cursor-pointer mt-15 group relative ">
                    <div>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        className="w-[250px] h-[140px] m-auto relative"
                      />
                      <p className="w-[250px] h-[60px] m-auto  bg-[#313131] tabsolute   text-white text-center text-sm py-2 rounded-b-2xl  ">
                        {img.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-6  mt-20  w-[1600px] m-auto">
        <div>
          <div className="pb-10">
            <h1 className="text-sm font-bold text-[#333333]">فروشگاه اینترنتی تکنولایف</h1>
            <p className="text-[#5f5f5f] text-sm/8 pt-8 ">فروشگاه اینترنتی تکنولایف سال‌ها است که به‌عنوان بزرگترین فروشگاه کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد الکترونیکی می‌تواند خیال خیلی از افراد را راحت کند. <span className="text-[#363636] font-bold">تکنولایف</span> با داشتن نماد اعتماد الکترونیکی و عضویت در سازمان صنفی رایانه‌ای کشور، همچنین عضویت در انجمن صنفی فروشگاه‌های اینترنتی، فضای ایمن برای خرید آنلاین را برای مشتریان خود ایجاد کرده است.</p>
            <p className="text-[#5f5f5f] text-sm/8">شما می‌توانید خرید کالای دیجیتال مانند خرید لپ تاپ ، گوشی موبایل در مدل‌ها و برندهای مختلف، لوازم <span className="text-[#14a0de]">جانبی موبایل</span> ، هدفون، و کلیه لوازم دیجیتال مدنظر خود را با بهترین قیمت، در فروشگاه تکنولایف به ثبت برسانید.</p>
          </div>
          <div className="pb-10">
            <h1 className="text-sm font-bold text-[#333333]">خرید گوشی از تکنولایف </h1>
            <p className="text-[#5f5f5f] text-sm/8 pt-8 ">برای خیلی از کاربران، تکنولایف فروشگاه اینترنتی موبایل محسوب می‌شود. این بدان خاطر است که شما می‌توانید انواع گوشی موبایل مورد نظر خود، از جمله <span className="text-[#14a0de]">گوشی شیائومی</span> ، گوشی سامسونگ، گوشی هواوی، آیفون و دیگر برندها را در تکنولایف به‌راحتی پیدا و با قیمتی مناسب، خریداری کنید. <span  className="text-[#14a0de]">خرید گوشی</span> موبایل، آن‌هم اینترنتی، می‌تواند کاری دشوار باشد؛ اما شما می‌توانید با اطمینان کامل، گوشی موبایل مد نظرتان را از فروشگاه اینترنتی موبایل تکنولایف استعلام قیمت کرده و خریداری کنید</p>
          </div>
          <div className="flex items-center cursor-pointer text-[#223c78] ">
            <h1>نمایش بیشتر</h1>
            <FaAngleDown className="w-[15px] h-[15px]"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weblog;
