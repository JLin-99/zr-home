import Image from "next/image";

export default function MovementButton() {
  return (
    <div className="grid w-[3.75rem] grid-cols-3 grid-rows-3 rounded bg-white">
      <div></div>
      <div className="relative h-5 w-5 cursor-pointer bg-white">
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Up arrow"
          className="absolute top-1 hover:sepia"
        />
      </div>
      <div></div>
      <div className="relative h-5 w-5 cursor-pointer bg-white">
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Left arrow"
          className="absolute left-1 rotate-[270deg] hover:sepia"
        />
      </div>
      <div></div>
      <div className="relative h-5 w-5 cursor-pointer bg-white">
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Right arrow"
          className="absolute right-1 rotate-90 hover:sepia"
        />
      </div>
      <div></div>
      <div className="relative h-5 w-5 cursor-pointer bg-white">
        <Image
          src={"/images/Flecha.png"}
          width={55}
          height={55}
          alt="Down arrow"
          className="absolute bottom-1 rotate-180 hover:sepia"
        />
      </div>
      <div></div>
    </div>
  );
}
