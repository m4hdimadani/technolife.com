import Image from "next/image";
import one from "../../../public/img/bannerLaptop/static_laptop_aser_new.png";
import tow from "../../../public/img/bannerLaptop/static_laptop_asus_new.png";
import three from "../../../public/img/bannerLaptop/static_laptop_hp_new.png";
import four from "../../../public/img/bannerLaptop/static_laptop_lenovo_new.png";
import five from "../../../public/img/bannerLaptop/static_laptop_mac_new.webp";

import six from "../../../public/img/bannerLaptop/banner_FirstTwinBanners_gnnkT8_89f283d7-2cd1-4528-99f0-abe93193d359.webp";
import seven from "../../../public/img/bannerLaptop/banner_FirstTwinBanners_vNXpbh_98dfa120-074b-4c84-90fb-8b0aa3b7cb16.webp";



const laptop = [
  { src: one, alt: "one", title: "ایسر" },
  { src: tow, alt: "tow", title: "ایسوس" },
  { src: three, alt: "three", title: "اچ پی" },
  { src: four, alt: "four", title: "منوو" },
  { src: five, alt: "five", title: "مک بوک" },
];
function BannerBestLaptop() {
  return (
    <div>
        <h1 className="text-center text-2xl font-bold mt-10">برترین های لپ تاپ</h1>
        <div className="flex justify-center mt-10 gap-10 ">
        {laptop.map((i,index) => (
            <div key={index} className="cursor-pointer">
                <div className="w-[180px] h-[180px]">
                    <Image src={i.src} alt={i.alt}/>
                </div>
                <div className="text-center font-bold text-[#000002]">
                    <h1>{i.title}</h1>
                </div>
            </div>
        ))}
      </div>
      <div className="flex w-[774px] h-[238.14] m-auto justify-center gap-10 mt-20 ">
        <Image src={six} alt="six" className="rounded-2xl cursor-pointer"/>
        <Image src={seven} alt="seven" className="rounded-2xl cursor-pointer"/>
      </div>
    </div>
  );
}

export default BannerBestLaptop;
