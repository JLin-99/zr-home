import { BsChevronLeft } from "react-icons/bs";

export default function ProductShowcase() {
  return (
    <div className="flex bg-gray-400">
      <div className={`relative w-2/6 bg-green-100 `}>
        <BsChevronLeft
          className="absolute bottom-[calc(50%-2.5rem)] -right-6 h-20 w-6 cursor-pointer rounded-r bg-green-100 p-0.5 pr-1 font-black hover:text-red-400"
          style={{ transform: "perspective(1rem) rotateY(9deg)" }}
        />
        {"ProductMenu (Sidebar)"}
      </div>
      <div className="flex-1 bg-blue-100">{"ProductDisplay"}</div>
    </div>
  );
}
