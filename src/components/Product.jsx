import Image from "next/image";

export default function Product({ name }) {
  return (
    <div id={name} className="flex flex-col items-center gap-1">
      <Image
        width={110}
        height={110}
        src="/images/Aberturas.png"
        alt={name}
        className="bg-gray-200"
      />
      <label className="text-xs" htmlFor={name}>
        {name}
      </label>
    </div>
  );
}