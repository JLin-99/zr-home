import CategoryRow from "./CategoryRow";

export default function CategoryList() {
  return (
    <div className="h-full w-full">
      <h2 className="pb-4 font-bold">Aberturas</h2>
      <div className="flex flex-col gap-3">
        <CategoryRow category="Puertas" />
        <CategoryRow category="Ventanas" />
      </div>
    </div>
  );
}
