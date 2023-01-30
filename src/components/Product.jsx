import ProductContext from "@/context/ProductContext";
import Image from "next/image";
import { useContext } from "react";

export default function Product({ product }) {
  const { dispatch } = useContext(ProductContext);

  return (
    <div
      id={product.name}
      className="flex cursor-pointer flex-col items-center gap-1"
      onClick={() => {
        dispatch({ type: "SET_DISPLAYED_IMAGE", payload: product.img }),
          dispatch({ type: "SET_MESSAGE", payload: "" });
      }}
    >
      <div className="h-28 w-28 bg-gray-200">
        <Image
          loader={() => product.img}
          unoptimized="true"
          width={120}
          height={120}
          src={product.img}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
      <label className="cursor-pointer text-xs" htmlFor={product.name}>
        {product.name}
      </label>
    </div>
  );
}
