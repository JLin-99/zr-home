import useAxios from "@/hooks/useAxios";
import axiosInstance from "../apis/products";
import ProductContext from "@/context/ProductContext";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { formatProducts } from "@/utils/utils";

export default function DepartmentBtn({ department }) {
  const [products, loading, axiosFetch] = useAxios();
  const { menuProduct, productMenuOpen, dispatch } = useContext(ProductContext);

  // UPDATE context from the API
  useEffect(() => {
    if (products.length) {
      dispatch({ type: "SET_PRODUCTS", payload: formatProducts(products) });
      dispatch({ type: "SET_PRODUCTS_LOADING", payload: loading });
      dispatch({ type: "SET_MENU_PRODUCT", payload: department.name });
    }
  }, [products]);

  // FETCH if necessary
  const handleClick = (path) => {
    if (
      !productMenuOpen ||
      (productMenuOpen && menuProduct !== department.name)
    ) {
      axiosFetch({
        axiosInstance,
        method: "get",
        url: "/" + path,
      });
      dispatch({ type: "SET_CURRENT_CATEGORY", payload: "" });
      dispatch({ type: "RESET_PRODUCTS_MENU" });
      dispatch({ type: "TOGGLE_MENU", payload: productMenuOpen + 1 });
    } else {
      dispatch({ type: "RESET_PRODUCTS_MENU" });
    }
  };

  return (
    <div
      id={department.name}
      className={`flex w-full cursor-pointer flex-col items-center py-2 hover:bg-[#F7F7F7] hover:text-amber-900 hover:hue-rotate-90 hover:sepia ${
        menuProduct === department.name &&
        productMenuOpen &&
        "bg-[#F7F7F7] text-amber-900"
      }`}
      onClick={() => handleClick(department.name)}
    >
      <Image
        src={department.img}
        height={32}
        width={32}
        alt="logo"
        draggable="false"
      />
      <label className="text-[0.55rem]" htmlFor={department.name}>
        {department.title}
      </label>
    </div>
  );
}
