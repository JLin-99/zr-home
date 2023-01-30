import useAxios from "@/hooks/useAxios";
import axiosInstance from "../apis/products";
import ProductContext from "@/context/ProductContext";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { formatProducts } from "@/utils/utils";

export default function DepartmentBtn({ department }) {
  const [products, loading, axiosFetch] = useAxios();
  const { departmentMenu, departmentMenuOpen, dispatch } =
    useContext(ProductContext);

  // UPDATE context from the API
  useEffect(() => {
    if (products.length) {
      dispatch({ type: "SET_PRODUCTS", payload: formatProducts(products) });
      dispatch({ type: "SET_PRODUCTS_LOADING", payload: loading });
      dispatch({ type: "SET_DEPARTMENT_MENU", payload: department.name });
    }
  }, [products]);

  // FETCH if necessary
  const handleClick = (path) => {
    if (
      !departmentMenuOpen ||
      (departmentMenuOpen && departmentMenu !== department.name)
    ) {
      axiosFetch({
        axiosInstance,
        method: "get",
        url: "/" + path,
      });
      dispatch({ type: "RESET_DEPARTMENT_MENU" });

      dispatch({ type: "TOGGLE_MENU", payload: departmentMenuOpen + 1 });
    } else {
      dispatch({ type: "RESET_DEPARTMENT_MENU" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        id={department.name}
        className={`flex w-full cursor-pointer flex-col items-center py-2 hover:z-50 hover:text-amber-700 hover:opacity-90 ${
          departmentMenu === department.name &&
          departmentMenuOpen &&
          "bg-[#F7F7F7] text-amber-900" + invertedBorderRadius
        }`}
        onClick={() => handleClick(department.name)}
      >
        <Image
          src={department.img}
          height={32}
          width={32}
          alt="logo"
          draggable="false"
          className="z-50"
        />
        <label className="z-50 text-[0.55rem]" htmlFor={department.name}>
          {department.title}
        </label>
      </div>
    </div>
  );
}

const invertedBorderRadius = `${"w-full -z-50"} ${"before:absolute before:bottom-full before:right-0 before:h-[30px] before:w-[30px] before:rounded-[110%_0%_100%_0%_/_0%_55%_45%_100%] before:pointer-events-none before:bg-transparent before:shadow-[0_17px_0_#F7F7F7]"} ${"after:absolute after:top-full after:right-0 after:h-[30px] after:w-[30px] after:rounded-[0%_100%_0%_100%_/_100%_45%_55%_0%] after:bg-transparent after:shadow-[0_-17px_0_#F7F7F7] after:pointer-events-none"}`;
