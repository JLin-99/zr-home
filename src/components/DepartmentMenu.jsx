import ProductContext from "@/context/ProductContext";
import { useContext } from "react";
import { BsChevronLeft } from "react-icons/bs";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Spinner from "./Spinner";

export default function DepartmentMenu() {
  const {
    currentCategory,
    productsLoading,
    departmentMenuOpen,
    products,
    dispatch,
  } = useContext(ProductContext);

  const handleClick = () => {
    dispatch({ type: "RESET_DEPARTMENT_MENU" });
  };
  return (
    <>
      <div
        className={`h-full w-full p-5 text-[#707070] shadow transition-opacity duration-700 ease-in ${
          !departmentMenuOpen
            ? "-translate-x-3 opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        {(productsLoading || !products.length) && departmentMenuOpen ? (
          <Spinner />
        ) : currentCategory === "" ? (
          <CategoryList />
        ) : (
          <ProductList />
        )}
      </div>

      <BsChevronLeft
        className={`absolute bottom-[calc(50%-2.5rem)] -right-6 z-20 h-20 w-6 cursor-pointer rounded-r bg-inherit p-0.5 pr-1 font-black duration-200 hover:text-amber-200 ${
          !departmentMenuOpen && "invisible"
        }`}
        style={{ transform: "perspective(1rem) rotateY(9deg)" }}
        onClick={handleClick}
      />
    </>
  );
}
