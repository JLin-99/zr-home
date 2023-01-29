export default function TopDisplayButton({ btnName }) {
  return (
    <div className="cursor-pointer rounded-md bg-[#F7F7F7] py-3 px-7 hover:bg-amber-100 hover:text-amber-900">
      {btnName}
    </div>
  );
}
