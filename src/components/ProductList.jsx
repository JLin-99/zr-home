import ProductContext from "@/context/ProductContext";
import { toTitleCase } from "@/utils/utils";
import { useContext } from "react";
import Product from "./Product";

export default function ProductList() {
  const { menuProduct, products, dispatch, currentCategory } =
    useContext(ProductContext);
  const product = products.find((prod) => prod.category === currentCategory);
  return (
    <div className="h-full w-full overflow-scroll">
      <p
        className="cursor-pointer pb-3 text-xs text-gray-400"
        onClick={() => {
          dispatch({ type: "SET_CURRENT_CATEGORY", payload: "" });
        }}
      >{`${menuProduct && "< " + toTitleCase(menuProduct)}`}</p>
      <h2 className="pb-4 font-bold">{product?.category}</h2>
      <div className="grid grid-cols-fill-7 items-center justify-between gap-3">
        {product &&
          product.products.map((prod, idx) => (
            <Product key={idx} product={prod} />
          ))}
      </div>
    </div>
  );
}
