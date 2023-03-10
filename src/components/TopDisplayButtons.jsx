import ProductContext from "@/context/ProductContext";
import { useContext } from "react";
import TopDisplayButton from "./TopDisplayButton";

export default function TopDisplayButtons() {
  const { departmentMenuOpen } = useContext(ProductContext);
  return (
    <div
      className={`absolute right-6 top-6 flex gap-5 transition-opacity duration-500 ${
        !departmentMenuOpen
          ? "translate-x-96 opacity-0"
          : "translate-x-0 opacity-100"
      }`}
    >
      <TopDisplayButton btnName="Fijar" />
      <TopDisplayButton btnName="Borrar" />
    </div>
  );
}
