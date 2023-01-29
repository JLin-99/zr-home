import Image from "next/image";
import Product from "./Product";

export default function ProductList() {
  return (
    <div>
      <p className="pb-3 text-xs text-gray-400">{"<"} Aberturas</p>
      <h2 className="pb-4 font-bold">Puertas</h2>
      <div className="grid grid-cols-3 items-center justify-between gap-y-4 gap-x-3">
        <Product name="Puerta A" />
        <Product name="Puerta B" />
        <Product name="Puerta C" />
        <Product name="Puerta D" />
      </div>
    </div>
  );
}
