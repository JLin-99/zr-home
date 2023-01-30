import useAxios from "@/hooks/useAxios";
import axiosInstance from "../apis/products";
import ProductContext from "@/context/ProductContext";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function ProductButton({ btnName }) {
  const [products, loading, axiosFetch] = useAxios();
  const { productMenuOpen, dispatch } = useContext(ProductContext);

  useEffect(() => {
    if (products.length) {
      dispatch({ type: "SET_PRODUCTS", payload: formatProducts(products) });
      dispatch({ type: "SET_PRODUCTS_LOADING", payload: loading });
    }
  }, [products]);

  const handleClick = (path) => {
    if (!productMenuOpen) {
      axiosFetch({
        axiosInstance,
        method: "get",
        url: "/" + path,
      });
    }

    dispatch({ type: "TOGGLE_MENU", payload: !productMenuOpen });
  };

  return (
    <div
      id={btnName}
      className="flex w-full cursor-pointer flex-col items-center py-2 hover:bg-[#F7F7F7] hover:text-amber-900 hover:hue-rotate-90 hover:sepia"
      onClick={() => handleClick(btnName.toLowerCase())}
    >
      <Image
        src={`/images/${btnName}.png`}
        height={32}
        width={32}
        alt="logo"
        draggable="false"
      />
      <label className="text-[0.55rem]" htmlFor={btnName}>
        {btnName}
      </label>
    </div>
  );
}

function formatProducts(categories) {
  const formattedProducts = [];
  categories.forEach((category) => {
    const productsObj = { category: category.name, products: [] };
    category.items.forEach((product) => {
      productsObj.products.push(product);
    });
    formattedProducts.push(productsObj);
  });

  return formattedProducts;
}
