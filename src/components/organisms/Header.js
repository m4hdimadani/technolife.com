"use client";

import Image from "next/image";
import logo from "../../../public/img/static_logo_techno_new.svg";
import banner from "../../../public/img/banner_TopGifDesktop_qdHLTo_673f3ebe-e9fa-45f0-891b-9324c853dfab.gif";
import SearchModal from "../../../module/SearchModal";
import styles from "../../../module/SearchModal.module.css";

import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

import { useState, useEffect } from "react";

import { BiSolidOffer } from "react-icons/bi";
import { CiShoppingBasket, CiWallet } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiCoinsLight } from "react-icons/pi";

function Header() {
  const [showMain, setShowMain] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handelScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScroll && currentScrollY > 100) {
        setShowMain(false);
      } else {
        setShowMain(true);
      }

      lastScroll = currentScrollY;
    };

    window.addEventListener("scroll", handelScroll);

    return () => window.addEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <div className="mb-30 m-auto w-[1900px] bg-white">
        <div className="w-[1910px] m-auto fixed top-0 z-50">
          <Image src={banner} alt="banner" />
        </div>
        <div className="  flex justify-around gap-[700px] fixed top-14 z-50 bg-white w-[1910px] h-[130px] ">
          <div className="flex gap-10 items-center mr-8">
            <div>
              <Image src={logo} alt="logo" width={110} height={41.25} />
            </div>
            {isOpen && (
              <div
                className="fixed inset-0 bg-gray-900 opacity-30  z-40"
                onClick={() => setIsOpen(false)}
              ></div>
            )}
            <div className="relative z-50">
              <div
                className="bg-[#f0f0f0] inline-block w-[652px] h-[56px] rounded-sm"
                onClick={() => setIsOpen(true)}
              >
                <div className="p-[10px] pr-[20px] flex gap-5 input_modal">
                  <CiSearch className="w-[30px] h-[30px] text-[#aaa8a8]" />
                  <input
                    type="text"
                    placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
                    className="bg-[#f0f0f0] border-none w-[580px] h-[24px] text-[#616161] focus:outline-none"
                    onFocus={() => setIsOpen(true)}
                  />
                </div>
              </div>
              {isOpen && (
                <div className="absolute top-[60px]   z-40">
                  <SearchModal />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center">
            <div className="flex gap-5 w-[159.52px] h-[40px] cursor-pointer border-[1px] justify-center pb-2 rounded-[8px] items-center">
              <span className="text-[#212121]">ورود</span>
              <span className="text-[#212121]">|</span>
              <span className="text-[#212121] ">ثبت نام</span>
            </div>
            <div className="w-[40px] h-[40px] border-[1px] flex items-center cursor-pointer justify-center rounded-xl border-[#a1a1a1]">
              <LuShoppingCart className="w-[24px] h-[24px] text-[#605f5f]" />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`fixed w-[1900px] bg-white shadow-md transition-transform top-[180px] z-40 ${
              showMain ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="m-auto">
              <div>
                <ul className="flex items-center mr-20 gap-10 text-[#666666] text-sm">
                  <li className="cursor-pointer flex items-center gap-2 hover:bg-sky-100 w-[163px] h-[40px] rounded-xl pr-2">
                    <GiHamburgerMenu className="w-[20px] h-[20px]" />
                    <span> دسته بندی محصولات</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2">
                    <BiSolidOffer className="w-[20px] h-[20px]" />
                    <span>تکنوآف</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2">
                    <CiShoppingBasket className="w-[20px] h-[20px]" />
                    <span>خرید سازمانی</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2">
                    <FaBoxOpen className="w-[20px] h-[20px]" />
                    <span>کارت هدیه</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2">
                    <CiWallet className="w-[20px] h-[20px]" />
                    <span>خرید اقساطی</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2">
                    <PiCoinsLight className="w-[20px] h-[20px]" />
                    <span>خرید طلا دیجیتال</span>
                    <p className="text-[#9f1853] bg-[#ffd6e8] rounded-xl text-sm w-[38px] h-[18px] text-center pb-6">
                      جدید
                    </p>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2">
                    <span>فروشنده شو</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
