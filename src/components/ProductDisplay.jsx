import ProductContext from "@/context/ProductContext";
import { useContext } from "react";
import BottomDisplayButtons from "./BottomDisplayButtons";
import TopDisplayButtons from "./TopDisplayButtons";

export default function ProductDisplay() {
  const { message } = useContext(ProductContext);

  return (
    <div className="relative h-full w-full bg-[#EFEFEF]">
      <TopDisplayButtons />
      <div className="flex h-full w-full items-center justify-center">
        <h2 className="absolute mb-12 text-4xl text-[#707070]">{message}</h2>
      </div>

      <BottomDisplayButtons />
    </div>
  );
}
