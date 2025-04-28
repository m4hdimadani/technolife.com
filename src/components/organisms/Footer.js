import Image from "next/image";

import logo from "../../../public/img/footer/static_white_logo_techno.svg";
import { IoIosArrowUp } from "react-icons/io";

import { SiAparat } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import logoOne from "../../../public/img/footer/bazzar.svg";
import logoTow from "../../../public/img/footer/mayket.svg";
import logoThree from "../../../public/img/footer/sibapp.svg";

import tOne from "../../../public/img/footer/logobiz/footerImg9b2XMW.png";
import tTow from "../../../public/img/footer/logobiz/footerImgcXMKSD.png";
import tThree from "../../../public/img/footer/logobiz/footerImghICzG8.webp";
import tFour from "../../../public/img/footer/logobiz/footerImgZgzAFX.png";

import lOne from "../../../public/img/footer/logo/c4.png";
import lTow from "../../../public/img/footer/logo/c5.webp";
import lThree from "../../../public/img/footer/logo/download.svg";
import lFour from "../../../public/img/footer/logo/samandehi.png";

function Footer() {
  return (
    <div className="w-[1878px] h-[1163.77px] bg-linear-to-r from-[#0079b1] to-[#1b3570] m-auto mt-20 rounded-4xl mb-5">
      <div>
        <div className="flex w-[1600px] justify-between pt-[62px] m-auto border-b border-gray-400 pb-10">
          <div>
            <Image src={logo} alt="logo" className="w-[174px] h-[65.27px]" />
          </div>
          <div className="h-[50px] w-[180px] bg-white flex items-center justify-center rounded-xl cursor-pointer ">
            <button className="flex items-center gap-5 justify-center cursor-pointer">
              <span className="font-bold">بازگشت به بالا</span>
              <IoIosArrowUp className="text-xl " />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 w-[1600px]  m-auto mt-10 text-white border-b border-gray-400 pb-10">
          <div>
            <ul className="text-sm/8 cursor-pointer">
              <h3 className="font-bold text-xl pb-5">دسترسی سریع</h3>
              <li>بلاگ</li>
              <li>خرید گوشی</li>
              <li>گوشی سامسونگ</li>
              <li>گوشی آیفون</li>
              <li>گوشی شیائومی</li>
              <li>گوشی پوکو</li>
              <li>مقایسه گوشی</li>
              <li>قیمت لپ تاپ</li>
              <li>هندزفری بلوتوثی</li>
              <li>لپ تاپ ایسوس</li>
            </ul>
          </div>
          <div>
            <ul className="text-sm/8 cursor-pointer">
              <h3 className="font-bold text-xl pb-5">پرفروش ترین محصولات</h3>
              <li>گوشی a16</li>
              <li>گوشی pura 70</li>
              <li>گوشی 14t</li>
              <li>آیفون 16</li>
              <li>گوشی redmi note 14</li>
              <li>گوشی s25 سامسونگ</li>
              <li>ساعت هوشمند</li>
              <li>پرینتر</li>
              <li>هارد اکسترنال</li>
              <li>لوازم خانگی</li>
            </ul>
          </div>
          <div>
            <ul className="text-sm/8 cursor-pointer">
              <h3 className="font-bold text-xl pb-5">درباره ما</h3>
              <li>تکنولایف در یک نگاه</li>
              <li>اهداف و تعهدهای ما</li>
              <li>سوالات متداول</li>
              <li>فروشگاه های حضوری</li>
              <li>تماس با ما</li>
            </ul>
          </div>
          <div>
            <ul className="text-sm/8 cursor-pointer">
              <h3 className="font-bold text-xl pb-5">پیش از خرید</h3>
              <li>راهنمای خرید اقساطی</li>
              <li>خرید سازمانی</li>
              <li>راهنمای خرید از تکنولایف</li>
              <li>روش های خرید از تکنولایف</li>
              <li>ضمانت هفت‌روزه تکنولایف</li>
              <li>شیوه‌ها و هزینه ارسال</li>
            </ul>
          </div>
          <div>
            <ul className="text-sm/8 cursor-pointer">
              <h3 className="font-bold text-xl pb-5">پس از خرید</h3>
              <li>تضمین رجیستری</li>
              <li>رویه‌های بازگرداندن کالا</li>
              <li>سوالات متداول رجیستری</li>
              <li>رهگیری سفارش‌ها</li>
            </ul>
          </div>
          <div>
            <ul className="text-sm/8 cursor-pointer">
              <h3 className="font-bold text-xl pb-5">قوانین و مقررات</h3>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی کاربران</li>
              <li>از زبان مشتریان تکنولایف</li>
              <li>چرا تکنولایف؟</li>
            </ul>
          </div>
        </div>
        <div className="w-[1600px] m-auto mt-10 text-white border-b border-gray-400 pb-15 pt-10">
          <div className="flex justify-between ">
            <div>
              <div>
                <p className="font-bold">ارتباط با ما</p>
              </div>
              <div className="flex items-center gap-5 pb-5 pt-5 cursor-pointer">
                <p className="text-sm">تلفن :</p>
                <div className="text-sm">
                  <span>021-91077500</span>
                  <span>-</span>
                  <span>021-58424000</span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-sm">ایمیل :</p>
                </div>
                <div>
                  <p className="text-sm cursor-pointer">info@technolife.com</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold">شبکه های اجتماعی</p>
              </div>
              <div className="flex gap-10 pt-5 cursor-pointer">
                <FaInstagram className="w-[32px] h-[32px]" />
                <SiAparat className="w-[32px] h-[32px]" />
                <FaTelegram className="w-[32px] h-[32px]" />
                <FaYoutube className="w-[32px] h-[32px]" />
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold">دانلود اپلیکیشن</p>
              </div>
              <div className="flex gap-3 pt-5 cursor-pointer">
                <Image src={logoOne} alt="logoOne" />
                <Image src={logoTow} alt="logoTow" />
                <Image src={logoThree} alt="logoThree" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[1600px] m-auto mt-15">
          <div className="flex">
            <Image
              src={tOne}
              alt="tOne"
              className="w-[122px] h-[38.88px] cursor-pointer"
            />
            <Image
              src={tTow}
              alt="tTow"
              className="w-[122px] h-[38.88px] cursor-pointer"
            />
            <Image
              src={tThree}
              alt="tThree"
              className="w-[122px] h-[38.88px] cursor-pointer"
            />
            <Image
              src={tFour}
              alt="tFour"
              className="w-[122px] h-[38.88px] cursor-pointer"
            />
          </div>
          <div className="flex gap-5">
            <div className="bg-white w-[76px] h-[76px] flex justify-center items-center rounded-sm">
              <Image
                src={lOne}
                alt="lOne"
                className="w-[60px] h-[60px] cursor-pointer "
              />
            </div>
            <div className="bg-white w-[76px] h-[76px] flex justify-center items-center rounded-sm">
              <Image
                src={lTow}
                alt="lTow"
                className="w-[60px] h-[60px] cursor-pointer"
              />
            </div>
            <div className="bg-white w-[76px] h-[76px] flex justify-center items-center rounded-sm">
              <Image
                src={lThree}
                alt="lThree"
                className="w-[60px] h-[60px] cursor-pointer"
              />
            </div>
            <div className="bg-white w-[76px] h-[76px] flex justify-center items-center rounded-sm">
              <Image
                src={lFour}
                alt="lFour"
                className="w-[60px] h-[60px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div >
        <h1 className="text-center mt-25 text-white font-bold">
          1404-1391 تمامی حقوق مادی و معنوی این سایت متعلق به تکنولایف می‌باشد.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
