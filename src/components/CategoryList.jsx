import ProductContext from "@/context/ProductContext";
import { toTitleCase } from "@/utils/utils";
import { useContext } from "react";
import CategoryRow from "./CategoryRow";

export default function CategoryList() {
  const { departmentMenu, products } = useContext(ProductContext);
  return (
    <div className="h-full w-full text-[#707070]">
      <h2 className="pb-4 font-bold">{toTitleCase(departmentMenu)}</h2>
      <div className="flex flex-col gap-3">
        {products.map((category, idx) => (
          <CategoryRow key={idx} category={category.category} />
        ))}
      </div>
    </div>
  );
}
