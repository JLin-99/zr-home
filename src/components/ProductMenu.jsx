import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default function ProductMenu({ open }) {
  return (
    <div className={`h-full w-full p-5 ${!open && "scale-0"} duration-200`}>
      {false && <CategoryList />}
      {true && <ProductList />}
    </div>
  );
}
