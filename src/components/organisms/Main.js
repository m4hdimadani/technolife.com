import BannerSwiper from "../atoms/BannerSwiper";
import ProductsOff from "../molcules/ProductsOff";
import RoundedSwiper from "../atoms/RoundedSwiper";
import BannerMain from "../atoms/BannerMain";
import ProductsSmart from "../molcules/ProductsSmart";
import BestMobile from "../atoms/BestMobile";
import BannerSingl from "../atoms/BannerSingl";
import ProductsLaptop from "../molcules/ProductsLaptop";
import BannerBestLaptop from "../atoms/BannerBestLaptop";
import BannerMobile from "../atoms/BannerMobile";
import Airpoud from "../atoms/Airpoud";
import BrandTop from "../atoms/BrandTop";
import ProductsComputer from "../molcules/ProductsComputer";
import Home from "../atoms/Home";
import ProductsAccessories from "../molcules/ProductsAccessories";
import ProductsHome from "../molcules/ProductsHome";

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
      <BannerMobile />
      <Airpoud />
      <BrandTop />
      <ProductsComputer />
      <Home />
      <ProductsAccessories />
      <ProductsHome />
    </div>
  );
}

export default Main;
