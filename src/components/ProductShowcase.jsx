import { useState } from "react";
import ProductDisplay from "./ProductDisplay";
import ProductMenu from "./ProductMenu";

export default function ProductShowcase() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex bg-black">
      <div
        className={`relative bg-[#F7F7F7] duration-300 ${
          open ? "w-2/6" : "w-0"
        }`}
      >
        <ProductMenu open={open} setOpen={setOpen} />
      </div>
      <div className="flex-1 bg-blue-100">
        <ProductDisplay />
      </div>
    </div>
  );
}
