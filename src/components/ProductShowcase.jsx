import ProductContext from "@/context/ProductContext";
import { useContext, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import ProductMenu from "./ProductMenu";

export default function ProductShowcase() {
  const { productMenuOpen } = useContext(ProductContext);

  return (
    <div className="flex h-[calc(100vh-6rem)] bg-black">
      <div
        className={`relative bg-[#F7F7F7] duration-300 ${
          productMenuOpen ? "w-2/6" : "w-0"
        }`}
      >
        <ProductMenu />
      </div>
      <div className="flex-1 bg-blue-100">
        <ProductDisplay />
      </div>
    </div>
  );
}
