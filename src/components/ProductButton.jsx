import useAxios from "@/hooks/useAxios";
import axios from "../apis/products";
import Image from "next/image";

export default function ProductButton({ btnName }) {
  const [products, loading, axiosFetch] = useAxios();

  const handleClick = (url) => {
    console.log("click");
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url,
    });
  };
  return (
    <div
      id={btnName}
      className="flex w-full cursor-pointer flex-col items-center py-2 hover:bg-[#F7F7F7] hover:text-amber-900 hover:hue-rotate-90 hover:sepia"
      onClick={() => handleClick(btnName.toLowerCase())}
    >
      <Image
        src={`/images/${btnName}.png`}
        height={32}
        width={32}
        alt="logo"
        draggable="false"
      />
      <label className="text-[0.55rem]" htmlFor={btnName}>
        {btnName}
      </label>
    </div>
  );
}
