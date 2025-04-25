import BannerSwiper from "../atoms/BannerSwiper";
import ProductsOff from "../molcules/ProductsOff";
import RoundedSwiper from "../atoms/RoundedSwiper";
import BannerMain from "../atoms/BannerMain";
import ProductsSmart from "../molcules/ProductsSmart";
import BestMobile from "../atoms/BestMobile";

function Main() {
  return (
    <div>
      <BannerSwiper />
      <RoundedSwiper />
      <ProductsOff />
      <BannerMain />
      <ProductsSmart />
      <BestMobile />
    </div>
  );
}

export default Main;
