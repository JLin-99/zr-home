import TopDisplayButton from "./TopDisplayButton";

export default function TopDisplayButtons() {
  return (
    <div className="absolute right-6 top-6 flex gap-5 ">
      <TopDisplayButton btnName="Fijar" />
      <TopDisplayButton btnName="Borrar" />
    </div>
  );
}
