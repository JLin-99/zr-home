import DepartmentBtn from "./DepartmentBtn";

const departments = [
  {
    name: "aberturas",
    title: "Aberturas",
    img: "/images/Aberturas.png",
  },
  {
    name: "equipamiento",
    title: "Equipamiento",
    img: "/images/Equipamiento.png",
  },
  {
    name: "terminaciones",
    title: "Terminaciones",
    img: "/images/Terminaciones.png",
  },
];

export default function DepartmentsNavbar() {
  return (
    <div className="z-50 flex select-none flex-col items-center justify-center bg-[#FFFFFF]">
      {departments.map((department) => (
        <DepartmentBtn department={department} />
      ))}
    </div>
  );
}
