import { Fragment, useContext, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown, BsCheck } from "react-icons/bs";
import ProductContext from "@/context/ProductContext";

const options = ["Guardar y continuar", "Guardar y salir", "Salir sin guardar"];

export default function SaveOptionList() {
  const [selected, setSelected] = useState(options[0]);
  const { dispatch } = useContext(ProductContext);

  const handleSaveOption = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_MESSAGE", payload: selected + " (Presionado)" });
  };

  return (
    <Listbox value={selected} onChange={setSelected} className="z-30">
      <div className="relative text-gray-700">
        <Listbox.Button className="relative w-full cursor-pointer bg-transparent pr-9 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <div
            onClick={handleSaveOption}
            className="block h-10 w-40 min-w-full truncate rounded-l-md border-2 border-gray-100 bg-white text-center leading-9 hover:font-medium hover:tracking-tight hover:sepia"
          >
            {selected}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center rounded-r-md border-2 border-gray-100 bg-white px-2 text-center leading-10 hover:border-l-2 hover:border-l-[#CCCCCC] hover:sepia">
            <BsChevronDown
              className="h-5 w-5 text-black hover:text-amber-900"
              aria-hidden="true"
            />
          </div>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-8 pr-2 ${
                    active ? "bg-amber-100 sepia" : "text-gray-900"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-amber-600">
                        <BsCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
