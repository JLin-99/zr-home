import ProductContext from "@/context/ProductContext";
import { toTitleCase } from "@/utils/utils";
import { useContext } from "react";
import Product from "./Product";

export default function ProductList() {
  const { menuProduct, products } = useContext(ProductContext);
  const product = products[0];
  return (
    <div>
      <p className="pb-3 text-xs text-gray-400">{`< ${toTitleCase(
        menuProduct
      )}`}</p>
      <h2 className="pb-4 font-bold">{product?.category}</h2>
      <div className="grid-cols-fill-7 grid items-center justify-between gap-y-4 gap-x-3">
        {product &&
          product.products.map((prod, idx) => (
            <Product key={idx} product={prod} />
          ))}
      </div>
    </div>
  );
}
