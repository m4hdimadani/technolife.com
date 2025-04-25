import Image from "next/image";
import one from "../../../public/img/betterMobile/static_phone_honor_new.webp";
import tow from "../../../public/img/betterMobile/static_phone_iphone_new.webp";
import three from "../../../public/img/betterMobile/static_phone_poco_new.webp";
import four from "../../../public/img/betterMobile/static_phone_samsung_new.png";
import five from "../../../public/img/betterMobile/static_phone_xiaomi_new.webp";

const best = [
  {
    src: one,
    alt: "better",
    title: "آنر",
  },
  {
    src: tow,
    alt: "better",
    title: "آیفون",
  },
  {
    src: three,
    alt: "better",
    title: "پوکو",
  },
  {
    src: four,
    alt: "better",
    title: "سامسونگ",
  },
  {
    src: five,
    alt: "better",
    title: "شیائومی",
  },
];

function BestMobile() {
  return (
    <div className="mt-10  ">
      <div className=" text-center text-2xl font-bold  ">
        <h1>برترین‌های موبایل</h1>
      </div>
      <div className="flex justify-center mt-10 gap-10 ">
        {best.map((i,index) => (
            <div key={index} className="cursor-pointer">
                <div>
                    <Image src={i.src} alt={i.alt}/>
                </div>
                <div className="text-center font-bold text-[#000002]">
                    <h1>{i.title}</h1>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default BestMobile;
