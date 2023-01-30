import ProductContext from "@/context/ProductContext";
import { toTitleCase } from "@/utils/utils";
import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";

export default function CategoryRow({ category }) {
  const { dispatch } = useContext(ProductContext);

  return (
    <div
      className="drop-shadow-xs relative w-full cursor-pointer rounded-lg bg-white px-5 pr-9 text-left text-[#707070] hover:font-medium hover:sepia"
      onClick={() => {
        dispatch({ type: "SET_CURRENT_CATEGORY", payload: category });
      }}
    >
      <div className="block h-10 w-40 min-w-full truncate text-xs leading-9">
        {toTitleCase(category)}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-6 text-center leading-10">
        <BsChevronRight className="h-2.5 w-2.5 stroke-2" aria-hidden="true" />
      </div>
    </div>
  );
}
