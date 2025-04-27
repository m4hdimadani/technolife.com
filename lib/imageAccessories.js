import one from "../public/img/Accessories/small_product-TLP-21162_d8bdf541-ac93-4820-95b5-0873f7a2716b.webp";
import tow from "../public/img/Accessories/small_product-TLP-23761_a8c7b9dd-1ac5-4838-b0f5-dcc9dd0b9383.webp";
import tree from "../public/img/Accessories/small_product-TLP-30609_8d813a70-32d6-40ea-9d74-d0018e4e2082.webp";
import four from "../public/img/Accessories/small_product-TLP-31531_c028843d-2834-4bf0-b4dd-ac0ca5a4baa1.webp";
import five from "../public/img/Accessories/small_product-TLP-3353_0e09b35c-27ee-4fdd-beb3-32d9e933161b.webp";
import six from "../public/img/Accessories/small_product-TLP-34934_263d6739-b52c-4582-ad45-9362497f6be3.webp";
import seven from "../public/img/Accessories/small_product-TLP-43267_ff8097df-ca4c-4f5d-a6ba-975eefac5a62.webp";
import eight from "../public/img/Accessories/small_product-TLP-55602_87687927-6380-11ef-94e0-5dc9fd964217.png";
import nine from "../public/img/Accessories/small_product-TLP-62935_a425b2c8-a60e-4b70-98d7-50bf43578b63.webp";
import ten from "../public/img/Accessories/small_product-TLP-68165_2f339c75-d4e7-467d-9280-4a231ae2fda0.webp"
import CountDown from "../utils/CountDown";

export const accessories = [
    {
        src: one,
        alt: "one",
        title: "هندزفری بی سیم انکر مدل Soundcore R50i",
        price: "1,449,000 تومان",
        
      },
      {
        src: tow,
        alt: "tow",
        title: "پاوربانک سامسونگ مدل EB-P5300 ظرفیت 20000 میلی آمپر",
        price: "2,329,000 تومان",
     
      },
      {
        src: tree,
        alt: "tree",
        title: "هندزفری بلوتوثی کیو سی وای مدل T13 ANC 2",
        price: "1,440,000 تومان",
        offerPrice: "1,460,000 تومان",
        discount: "2%",
        countDown: <CountDown props={2 * 20 * 60 * 1000} />,
        letter: "تنکوآف",
       
      },
      {
        src: four,
        alt: "four",
        title: "پلی استیشن 5 اسلیم دیجیتال به همراه دسته اضافه سفید",
        price: "45,599,000 تومان",
      
        
      },
      {
        src: five,
        alt: "five",
        title: "پاوربانک انکر مدل A1363 ظرفیت 20000 میلی آمپر ساعت",
        price: "3,350,000 تومان",
        offerPrice: "3,699,000 تومان",
        discount: "2%",
        countDown: <CountDown props={18 * 44 * 60 * 1000} />,
        letter: "تنکوآف",
       
        
      },
      {
        src: six,
        alt: "six",
        title: "پلی استیشن 5 اسلیم دیسک خور اروپا به همراه دسته اضافه سفید و پایه شارژ",
        price: "51,350,000 تومان",
       
      },
      {
        src: seven,
        alt: "seven",
        title: "ایکس باکس سری اس Robot White ظرفیت 512 گیگابایت ",
        price: "28,000,000 تومان",
       
      },
      {
        src: eight,
        alt: "eight",
        title: "هندزفری بلوتوثی انکر مدل A3213 U2i گردنی",
        price: "1,109,000 تومان",
       
      },
      {
        src: nine,
        alt: "nine",
        title: "ساعت هوشمند شیائومی مدل Redmi Watch 5 Active",
        price: "2,399,000 تومان",
        offerPrice: "2,799,000 تومان",
        discount: "15%",
        countDown: <CountDown props={18 * 44 * 60 * 1000} />,
        letter: "تنکوآف",
     
      },
      {
        src: ten,
        alt: "nine",
        title: "ساعت هوشمند میبرو مدل Mibro Lite 3",
        price: "3,729,000 تومان",
        offerPrice: "4,189,000 تومان",
        discount: "11%",
        countDown: <CountDown props={7 * 60 * 60 * 1000} />,
        letter: "تکنوآف",
      },
];
