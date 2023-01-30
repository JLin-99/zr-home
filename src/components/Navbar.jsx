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

export default function Navbar() {
  return (
    <div className="relative z-50 flex w-full select-none flex-col items-center justify-center bg-[#FFFFFF]">
      {departments.map((department) => (
        <DepartmentBtn department={department} key={department.name} />
      ))}
    </div>
  );
}
