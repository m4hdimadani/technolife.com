"use client";

import Image from "next/image";
import logo from "../../../public/img/static_logo_techno_new.svg";
import SearchModal from "../../../module/SearchModal";

import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiCoinsLight } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";

import { useState } from "react";

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="mt-10 flex justify-around gap-[700px]">
        <div className="flex gap-10 items-center mr-8">
          <div>
            <Image src={logo} alt="logo" width={110} height={41.25} />
          </div>
          <div className="bg-[#f0f0f0] inline w-[652px] h-[56px] rounded-sm">
            <div className="p-[10px] pr-[20px] flex gap-5">
              <CiSearch className="w-[30px] h-[30px] text-[#aaa8a8]" />
              <input
                type="text"
                placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
                className="border-[#f0f0f0] w-[580px] h-[24] text-[#616161] focus:outline-[#f0f0f0]  focus:outline"
                onClick={() => setIsOpenModal(true)}
              />
            </div>
            {isOpenModal ? (
              <div className="z-50">
                <SearchModal />
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-5 w-[159.52px] h-[40px] border-[1px] justify-center pb-2 rounded-[8px] items-center">
            <span className="text-[#212121]">ورود</span>
            <span className="text-[#212121]">|</span>
            <span className="text-[#212121] ">ثبت نام</span>
          </div>
          <div className="w-[40px] h-[40px] border-[1px] flex items-center justify-center rounded-xl border-[#a1a1a1]">
            <LuShoppingCart className="w-[24px] h-[24px] text-[#605f5f]" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div >
          <ul className="flex items-center mr-20 gap-10 text-[#666666] text-sm">
            <li className="cursor-pointer flex items-center gap-2 hover:bg-sky-100 w-[163px] h-[40px] rounded-xl pr-2">
              <GiHamburgerMenu className="w-[20px] h-[20px]"/>
              <span> دسته بندی محصولات</span>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
            <BiSolidOffer className="w-[20px] h-[20px]"/>
              <span>تکنوآف</span>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <CiShoppingBasket className="w-[20px] h-[20px]"/>
              <span>خرید سازمانی</span>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <FaBoxOpen className="w-[20px] h-[20px]"/>
              <span>کارت هدیه</span>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <CiWallet className="w-[20px] h-[20px]"/>
              <span>خرید اقساطی</span>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <PiCoinsLight className="w-[20px] h-[20px]"/>
              <span>خرید طلا دیجیتال</span>
              <p className="text-[#9f1853] bg-[#ffd6e8] rounded-xl text-sm w-[38px] h-[18px] text-center pb-6">جدید</p>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <span>فروشنده شو</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
