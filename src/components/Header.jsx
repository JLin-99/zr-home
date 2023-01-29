import { SiHomeassistant } from "react-icons/si";
import SaveOptionList from "./SaveOptionList";
export default function Header() {
  return (
    <header className="col-span-3 flex max-h-24 items-center justify-between bg-[#333333] px-24 text-white">
      <div className="flex flex-shrink-0 flex-row items-center text-3xl">
        <span className="flex flex-shrink-0 items-center text-amber-500">
          <SiHomeassistant className="mr-1" /> Zr
        </span>
        <span className="text-white">Home</span>
      </div>
      <SaveOptionList />
    </header>
  );
}
