function BannerMobile() {
  return (
    <div className="flex justify-center mt-15 gap-10 ">
      <div className="w-[774px] h-[285px] border border-gray-200 bg-white px-10.5 pb-10.5 pt-8 rounded-2xl">
        <h1 className="text-xl font-bold pb-5">گوشی بر اساس قیمت</h1>
        <div>
          <ul className="grid grid-cols-3 gap-y-2 ">
            <li className="w-[222.92px] h-[80px] bg-[#ffff] rounded-xl border border-[#e8f6fc] flex items-center justify-center cursor-pointer hover:border-4  ">
              {" "}
              ساده و ارزان
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#e8f6fc] rounded-xl flex items-center justify-center cursor-pointer hover:border-4 border-[#d0ecf8] ">
              تا15میلیون
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#d0ecf8] rounded-xl flex items-center justify-center cursor-pointer hover:border-4 border-[#b9e3f5] ">
              تا50میلیون
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#b9e3f5] rounded-xl flex items-center justify-center cursor-pointer hover:border-4 border-[#a1d9f2] ">
              {" "}
              تا5میلیون
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#a1d9f2] rounded-xl flex items-center justify-center cursor-pointer hover:border-4 border-[#8ad0ef] ">
              تا30میلیون
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#8ad0ef] rounded-xl flex items-center justify-center cursor-pointer hover:border-4 border-[#81c2de] ">
              {" "}
              تا75میلیون
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[774px] h-[285px] border border-gray-200 bg-white px-10.5 pb-10.5 pt-8 rounded-2xl">
        <h1 className="text-xl font-bold pb-5">گوشی بر اساس ویژگی</h1>
        <div>
          <ul className="grid grid-cols-3  gap-y-2">
            <li className="w-[222.92px] h-[80px] bg-[#e9ecf2] rounded-xl flex items-center justify-center cursor-pointer">
              گیمینگ
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#e9ecf2] rounded-xl flex items-center justify-center cursor-pointer">
              دوربین
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#e9ecf2] rounded-xl flex items-center justify-center cursor-pointer">
              {" "}
              5G
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#e9ecf2] rounded-xl flex items-center justify-center cursor-pointer">
              {" "}
              باتری
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#e9ecf2] rounded-xl flex items-center justify-center cursor-pointer">
              ضد آب
            </li>
            <li className="w-[222.92px] h-[80px] bg-[#e9ecf2] rounded-xl flex items-center justify-center cursor-pointer">
              شارژ سریعS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BannerMobile;
