import Image from "next/image";

import one from "../../../public/img/airpoud/static_handsfree_anker_new.webp";
import tow from "../../../public/img/airpoud/static_handsfree_apple_new.webp";
import three from "../../../public/img/airpoud/static_handsfree_haylou_new.png";
import four from "../../../public/img/airpoud/static_handsfree_huawei_new.png";
import five from "../../../public/img/airpoud/static_handsfree_qc_new.png";
import six from "../../../public/img/airpoud/static_handsfree_samsung_new.png";
import seven from "../../../public/img/airpoud/static_handsfree_xiaomi_new.png";

import bOne from "../../../public/img/airpoud/banner_SecondTwinBanners_EoQmNK_8b355f15-418a-4902-b0bd-ded4470ca987.webp";
import bTow from "../../../public/img/airpoud/banner_SecondTwinBanners_tSzoC7_5eca72b3-c0ce-4fab-9862-71a6444c8b6c.webp";
function Airpoud() {
  return (
    <>
      <div>
        <h1 className="text-center mt-10 mb-8 text-2xl font-bold">
          برترین های هندزفری
        </h1>

        <div>
          <ul className="flex justify-center gap-10 text-center font-bold">
            <li>
              <Image src={one} alt="one" />
              <a href="#">انکر</a>
            </li>
            <li>
              <Image src={tow} alt="tow" />
              <a href="#">اپل</a>
            </li>
            <li>
              <Image src={three} alt="three" />
              <a href="#">هایلو</a>
            </li>
            <li>
              <Image src={four} alt="four" />
              <a href="#">هوآوی</a>
            </li>
            <li>
              <Image src={five} alt="five" />
              <a href="#">کیوسی وای</a>
            </li>
            <li>
              <Image src={six} alt="six" />
              <a href="#">سامسونگ</a>
            </li>
            <li>
              <Image src={seven} alt="seven" />
              <a href="#">شیائومی</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 flex gap-8 justify-center">
        <Image src={bTow} alt="bTow" className="w-[774px] h-[238.14px] rounded-2xl"/>
        <Image src={bOne} alt="bOne" className="w-[774px] h-[238.14px] rounded-2xl"/>
      </div>
    </>
  );
}

export default Airpoud;
