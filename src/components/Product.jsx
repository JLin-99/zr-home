import Image from "next/image";

export default function Product({ product }) {
  return (
    <div id={product.name} className="flex flex-col items-center gap-1">
      <div className="h-28 w-28 bg-gray-200">
        <Image
          loader={() => product.img}
          width={120}
          height={120}
          src={product.img}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
      <label className="text-xs" htmlFor={product.name}>
        {product.name}
      </label>
    </div>
  );
}
