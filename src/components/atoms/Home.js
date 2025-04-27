import Image from "next/image";
import { ImageHome } from "../../../lib/imageHome";

import bannerOne from "../../../public/img/imageHome/banner_ThirdTwinBanners_XTsmTE_d300a337-e577-4726-a149-2ffa4358b6cc.webp"
import bannerTow from "../../../public/img/imageHome/banner_ThirdTwinBanners_YOcizR_b0608098-29ed-4e7a-9f1e-106cb69055a3.webp"

function Home() {
  return (
    <>
      <div className="w-full m-auto">
        <div className="flex items-center gap-[6px] pb-10 pt-15 pr-40">
          <h1 className="text-[22px] font-semibold">لوازم خانگی</h1>
          <p className="text-lg font-regular">خانه و آشپزخانه</p>
        </div>
        <div>
          <div className="grid grid-cols-7 w-[1500px] m-auto gap-y-15 relative">
            {ImageHome.map((i, index) => (
              <div
                key={index}
                className="group relative w-[156px] h-[156px] m-auto"
              >
                <Image
                  src={i.src}
                  alt={i.alt}
                  className="rounded-2xl w-full h-full object-cover cursor-pointer"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-[#1b3570] bg-opacity-50 text-white text-center text-sm py-2 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {i.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-20">
        <Image src={bannerTow} alt="banner" className="w-[774px] h-[238.14px] rounded-2xl cursor-pointer"/>
        <Image src={bannerOne} alt="banner" className="w-[774px] h-[238.14px] rounded-2xl cursor-pointer"/>
      </div>
    </>
  );
}

export default Home;
