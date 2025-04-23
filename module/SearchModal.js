import { TbAdjustmentsSearch } from "react-icons/tb";



function SearchModal() {
  return (
    <div className="bg-white w-[652px] h-[144px] z-50">
      <div>
        <TbAdjustmentsSearch />
        <p>جستوجو برای ...</p>
      </div>
      <div></div>
    </div>
  );
}

export default SearchModal;
