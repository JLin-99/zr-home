import { createContext, useReducer } from "react";
import productReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    productsLoading: false,
    departmentMenuOpen: 0,
    departmentMenu: "",
    productMenuCategory: "",
    currentCategory: "",
    message: "",
    displayedImage: "",
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
