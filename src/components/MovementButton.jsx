import ProductContext from "@/context/ProductContext";
import Image from "next/image";
import { useContext } from "react";

export default function MovementButton() {
  const { dispatch } = useContext(ProductContext);
  return (
    <div className="grid w-[3.75rem] select-none grid-cols-3 grid-rows-3 rounded bg-white shadow">
      <div></div>
      <div
        className="relative h-5 w-5 cursor-pointer bg-white"
        onClick={() => {
          dispatch({ type: "SET_MESSAGE", payload: "Flecha hacia arriba" });
          console.log("Up arrow");
        }}
      >
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Up arrow"
          className="absolute top-1 hover:sepia"
          draggable="false"
        />
      </div>
      <div></div>
      <div
        className="relative h-5 w-5 cursor-pointer bg-white"
        onClick={() => {
          dispatch({
            type: "SET_MESSAGE",
            payload: "Flecha hacia la izquierda",
          });
          console.log("Left arrow");
        }}
      >
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Left arrow"
          className="absolute left-1 rotate-[270deg] hover:sepia"
          draggable="false"
        />
      </div>
      <div></div>
      <div
        className="relative h-5 w-5 cursor-pointer bg-white"
        onClick={() => {
          dispatch({ type: "SET_MESSAGE", payload: "Flecha hacia la derecha" });
          console.log("Right arrow");
        }}
      >
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Right arrow"
          className="absolute right-1 rotate-90 hover:sepia"
          draggable="false"
        />
      </div>
      <div></div>
      <div
        className="relative h-5 w-5 cursor-pointer bg-white text-[#707070]"
        onClick={() => {
          dispatch({ type: "SET_MESSAGE", payload: "Flecha hacia abajo" });
          console.log("Down arrow");
        }}
      >
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Down arrow"
          className="absolute bottom-1 rotate-180 hover:sepia"
          draggable="false"
        />
      </div>
      <div></div>
    </div>
  );
}
