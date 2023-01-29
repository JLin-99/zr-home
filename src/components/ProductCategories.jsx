import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import CategoryRow from "./CategoryRow";

export default function ProductCategories() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center">
      <div
        className={`relative h-full w-full bg-[#F7F7F7] duration-500 ${
          open ? "w-full" : "w-0"
        }`}
      >
        <div className={`p-5 duration-100 ${!open && "invisible"}`}>
          <h2 className="pb-4 font-bold">Aberturas</h2>
          <div className="flex flex-col gap-3">
            <CategoryRow category="Puertas" />
            <CategoryRow category="Ventanas" />
          </div>
        </div>
      </div>
      <button
        className={`h-10 w-5 bg-[#F7F7F7] drop-shadow-lg duration-300 ${
          open ? "w-full" : "w-0"
        }`}
        onClick={toggleSidebar}
      >
        <BsChevronLeft className="font-black" />
      </button>
    </div>
  );
}
