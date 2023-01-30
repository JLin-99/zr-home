import ProductContext from "@/context/ProductContext";
import Image from "next/image";
import { useContext } from "react";
import BottomDisplayButtons from "./BottomDisplayButtons";
import TopDisplayButtons from "./TopDisplayButtons";

export default function ProductDisplay() {
  const { message, displayedImage } = useContext(ProductContext);

  return (
    <div className="relative h-full w-full bg-[#EFEFEF]">
      <TopDisplayButtons />
      <div className="flex h-full w-full items-center justify-center">
        {message ? (
          <h2 className="absolute mb-12 text-4xl text-[#707070]">{message}</h2>
        ) : (
          displayedImage && (
            <Image
              loader={() => displayedImage}
              unoptimized="true"
              width={120}
              height={120}
              src={displayedImage}
              alt={""}
              className="h-full w-full object-contain p-5"
            />
          )
        )}
      </div>

      <BottomDisplayButtons />
    </div>
  );
}
