import Image from "next/image"
import banner from "../../../public/img/banner_SingleFullWidthBanner_aJzBdp_fe2c9b18-c9e7-48aa-bfea-6dc251743c10.webp"

function BannerSingl() {
  return (
    <div className="mt-15">
        <Image src={banner} alt="banner" className="m-auto rounded-2xl"/>
    </div>
  )
}

export default BannerSingl