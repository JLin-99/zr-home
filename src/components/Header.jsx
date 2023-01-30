import Logo from "./Logo";
import SaveOptionList from "./SaveOptionList";

export default function Header() {
  return (
    <header className="col-span-3 flex max-h-24 items-center justify-between bg-[#333333] text-white sm:px-16 lg:px-32">
      <Logo />
      <SaveOptionList />
    </header>
  );
}
