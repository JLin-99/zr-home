import ProductContext from "@/context/ProductContext";
import { useContext } from "react";
import ProductDisplay from "./ProductDisplay";
import DepartmentMenu from "./DepartmentMenu";

export default function ProductShowcase() {
  const { departmentMenuOpen } = useContext(ProductContext);

  return (
    <div className="flex h-[calc(100vh-6rem)] bg-black">
      <div
        className={`relative bg-[#F7F7F7] duration-300 ${
          departmentMenuOpen ? "w-2/6" : "w-0"
        }`}
      >
        <DepartmentMenu />
      </div>
      <div className="flex-1 bg-blue-100">
        <ProductDisplay />
      </div>
    </div>
  );
}
