import ProductContext from "@/context/ProductContext";
import { useContext } from "react";
import { SiHomeassistant } from "react-icons/si";

export default function Logo() {
  const { dispatch } = useContext(ProductContext);
  return (
    <div
      className="flex flex-shrink-0 cursor-pointer select-none flex-row items-center text-3xl"
      onClick={() => dispatch({ type: "SET_MESSAGE", payload: "" })}
    >
      <span className="flex flex-shrink-0 items-center text-amber-500">
        <SiHomeassistant className="mr-1" /> Zr
      </span>
      <span className="text-white">Home</span>
    </div>
  );
}
