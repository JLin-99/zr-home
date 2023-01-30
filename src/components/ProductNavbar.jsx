import ProductButton from "./ProductButton";

export default function ProductNavbar() {
  return (
    <div className=" flex select-none flex-col items-center justify-center bg-[#FFFFFF]">
      <ProductButton btnName="Aberturas" />
      <ProductButton btnName="Equipamiento" />
      <ProductButton btnName="Terminaciones" />
    </div>
  );
}
