import Image from "next/image"

import BannerOne from "../../../public/img/bannerMain/banner_CenterTripletBanners_DT3SWa_607083c6-d716-4625-bc7b-2b1e896a4011.webp"
import BannerTow from "../../../public/img/bannerMain/banner_CenterTripletBanners_jtfgmd_913e462a-7007-414f-9591-2915993eda2e.webp"
import BannerThree from "../../../public/img/bannerMain/banner_CenterTripletBanners_VsWDIW_0dc6e329-b555-48e7-af7f-c451dbe4a331.webp"


function BannerMain() {
  return (
    <div className="flex justify-center gap-8 mt-20">
        <Image src={BannerOne} alt="banner" className="w-[516px] h-[238.14px] rounded-2xl"/>
        <Image src={BannerTow} alt="banner" className="w-[516px] h-[238.14px] rounded-2xl"/>
        <Image src={BannerThree} alt="banner" className="w-[516px] h-[238.14px] rounded-2xl"/>
    </div>
  )
}

export default BannerMain