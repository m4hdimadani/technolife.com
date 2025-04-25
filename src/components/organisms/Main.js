import BannerSwiper from "../atoms/BannerSwiper";
import ProductsOff from "../molcules/ProductsOff";
import RoundedSwiper from "../atoms/RoundedSwiper";
import BannerMain from "../atoms/BannerMain";
import ProductsSmart from "../molcules/ProductsSmart";
import BestMobile from "../atoms/BestMobile";
import BannerSingl from "../atoms/BannerSingl";
import ProductsLaptop from "../molcules/ProductsLaptop";
import BannerBestLaptop from "../atoms/BannerBestLaptop";

function Main() {
  return (
    <div>
      <BannerSwiper />
      <RoundedSwiper />
      <ProductsOff />
      <BannerMain />
      <ProductsSmart />
      <BestMobile />
      <BannerSingl />
      <ProductsLaptop />
      <BannerBestLaptop />
    </div>
  );
}

export default Main;
