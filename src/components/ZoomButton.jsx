import { BiPlus, BiMinus } from "react-icons/bi";

export default function ZoomButton() {
  return (
    <div className="flex h-[3.75rem] w-6 cursor-pointer flex-col items-center rounded bg-white text-gray-700">
      <BiPlus className="grow hover:sepia" />
      <hr className="w-full border-gray-200"></hr>
      <BiMinus className="grow hover:sepia" />
    </div>
  );
}
