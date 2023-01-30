import Image from "next/image";

export default function ProductButton({ btnName }) {
  return (
    <div
      id={btnName}
      className="flex w-full cursor-pointer flex-col items-center py-2 hover:bg-[#F7F7F7] hover:text-amber-900 hover:hue-rotate-90 hover:sepia"
    >
      <Image src={`/images/${btnName}.png`} height={32} width={32} alt="logo" />
      <label className="text-[0.55rem]" htmlFor={btnName}>
        {btnName}
      </label>
    </div>
  );
}
