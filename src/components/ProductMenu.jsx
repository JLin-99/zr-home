import { BsChevronLeft } from "react-icons/bs";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default function ProductMenu({ open, setOpen }) {
  return (
    <>
      <div className={`h-full w-full p-5 ${!open && "scale-0"} duration-200`}>
        {true && <CategoryList />}
        {false && <ProductList />}
      </div>
      <BsChevronLeft
        className={`absolute bottom-[calc(50%-2.5rem)] -right-6 z-20 h-20 w-6 cursor-pointer rounded-r bg-inherit p-0.5 pr-1 font-black hover:text-amber-300 ${
          !open && "invisible"
        }`}
        style={{ transform: "perspective(1rem) rotateY(9deg)" }}
        onClick={() => setOpen(!open)}
      />
    </>
  );
}
