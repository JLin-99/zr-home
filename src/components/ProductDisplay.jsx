import BottomDisplayButtons from "./BottomDisplayButtons";
import TopDisplayButtons from "./TopDisplayButtons";

export default function ProductDisplay() {
  return (
    <div className="relative h-full w-full bg-[#EFEFEF]">
      <TopDisplayButtons />
      <BottomDisplayButtons />
    </div>
  );
}
