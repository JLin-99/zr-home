import ProductContext from "@/context/ProductContext";
import { useContext } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

export default function ZoomButton() {
  const { dispatch } = useContext(ProductContext);
  return (
    <div className="flex h-[3.75rem] w-6 cursor-pointer flex-col items-center rounded bg-white text-[#707070] shadow">
      <BiPlus
        className="grow hover:sepia"
        onClick={() => {
          dispatch({ type: "SET_MESSAGE", payload: "+" });
          console.log("+");
        }}
      />
      <hr className="w-full border-gray-200"></hr>
      <BiMinus
        className="grow hover:sepia"
        onClick={() => {
          dispatch({ type: "SET_MESSAGE", payload: "-" });
          console.log("-");
        }}
      />
    </div>
  );
}
