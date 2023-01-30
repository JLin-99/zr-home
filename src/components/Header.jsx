import { SiHomeassistant } from "react-icons/si";
import SaveOptionList from "./SaveOptionList";
export default function Header() {
  return (
    <header className="col-span-3 flex max-h-24 items-center justify-between bg-[#333333] text-white  sm:px-16 lg:px-32">
      <div className="flex flex-shrink-0 cursor-pointer select-none flex-row items-center text-3xl">
        <span className="flex flex-shrink-0 items-center text-amber-500">
          <SiHomeassistant className="mr-1" /> Zr
        </span>
        <span className="text-white">Home</span>
      </div>
      <SaveOptionList />
    </header>
  );
}
