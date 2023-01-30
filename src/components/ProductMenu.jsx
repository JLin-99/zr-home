import ProductContext from "@/context/ProductContext";
import { useContext, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default function ProductMenu() {
  const { menuProduct, productsLoading, productMenuOpen, dispatch } =
    useContext(ProductContext);

  const handleClick = () => {
    dispatch({ type: "TOGGLE_MENU", payload: 0 });
    dispatch({ type: "SET_PRODUCTS", payload: [] });
    dispatch({ type: "SET_MENU_PRODUCT", payload: "" });
  };
  return (
    <>
      <div
        className={`h-full w-full p-5 ${
          !productMenuOpen && "scale-0"
        } duration-200`}
      >
        {productsLoading ? (
          <p>Loading...</p>
        ) : (
          (true && <CategoryList />) || (true && <ProductList />)
        )}
      </div>
      <BsChevronLeft
        className={`absolute bottom-[calc(50%-2.5rem)] -right-6 z-20 h-20 w-6 cursor-pointer rounded-r bg-inherit p-0.5 pr-1 font-black duration-200 hover:text-amber-200 ${
          !productMenuOpen && "invisible"
        }`}
        style={{ transform: "perspective(1rem) rotateY(9deg)" }}
        onClick={handleClick}
      />
    </>
  );
}
