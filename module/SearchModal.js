import { TbAdjustmentsSearch } from "react-icons/tb";




function SearchModal() {
  return (
    <div className="w-[652px] h-[60px] bg-white rounded-2xl">
      <div className="flex items-center gap-3  p-3" >
        <TbAdjustmentsSearch className="w-6 h-6 text-gray-400"/>
        <p className="text-sm text-gray-400">جستوجو برای ...</p>
      </div>
      <div></div>
    </div>
  );
}

export default SearchModal;
