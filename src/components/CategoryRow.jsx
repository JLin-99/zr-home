import { BsChevronRight } from "react-icons/bs";

export default function CategoryRow({ category }) {
  return (
    <div className="drop-shadow-xs relative w-full cursor-pointer rounded-lg bg-white px-5 pr-9 text-left hover:sepia">
      <div className="block h-10 w-40 min-w-full truncate text-xs leading-9">
        {category}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-6 text-center leading-10">
        <BsChevronRight className="h-2.5 w-2.5 stroke-2" aria-hidden="true" />
      </div>
    </div>
  );
}
