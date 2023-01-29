import { BsChevronRight } from "react-icons/bs";

export default function CategoryRow({ category }) {
  return (
    <div className="relative w-full cursor-pointer rounded-lg bg-[#FFFFFF] bg-transparent px-5 pr-9 text-left hover:bg-amber-100 hover:text-amber-900 focus:outline-none">
      <div className="block h-10 w-40 min-w-full truncate text-xs leading-9">
        {category}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-center leading-10">
        <BsChevronRight
          className="duration-400 h-3 w-3 text-black"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
