import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
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
        <ProductMenu open={open} />
        <BsChevronLeft
          className={`absolute bottom-[calc(50%-2.5rem)] -right-6 h-20 w-6 cursor-pointer rounded-r bg-inherit p-0.5 pr-1 font-black hover:text-red-400 ${
            false && "invisible"
          }`}
          style={{ transform: "perspective(1rem) rotateY(9deg)" }}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="flex-1 bg-blue-100">{"ProductDisplay"}</div>
    </div>
  );
}
