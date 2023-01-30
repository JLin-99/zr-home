import MovementButton from "./MovementButton";
import ZoomButton from "./ZoomButton";

export default function BottomDisplayButtons() {
  return (
    <div className="absolute right-6 bottom-6 flex gap-5 ">
      <ZoomButton />
      <MovementButton />
    </div>
  );
}
