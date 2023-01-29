import Image from "next/image";
import ProductButton from "./ProductButton";

export default function ProductNavbar() {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-200 ">
      <ProductButton btnName="Aberturas" />
      <ProductButton btnName="Equipamiento" />
      <ProductButton btnName="Terminaciones" />
    </div>
  );
}
