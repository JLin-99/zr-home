import ProductContext from "@/context/ProductContext";
import { useContext } from "react";

export default function TopDisplayButton({ btnName }) {
  const { dispatch } = useContext(ProductContext);
  return (
    <div
      className={
        "cursor-pointer select-none rounded-md bg-[#F7F7F7] py-3 px-7 text-[#707070] shadow duration-100 hover:text-gray-900 hover:sepia"
      }
      onClick={() => {
        dispatch({ type: "SET_MESSAGE", payload: btnName });
        console.log(btnName);
      }}
    >
      {btnName}
    </div>
  );
}
