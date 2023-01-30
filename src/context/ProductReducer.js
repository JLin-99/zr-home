const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_PRODUCTS_LOADING":
      return { ...state, productsLoading: action.payload };
    case "TOGGLE_MENU":
      return { ...state, departmentMenuOpen: action.payload };
    case "SET_DEPARTMENT_MENU":
      return { ...state, departmentMenu: action.payload };
    case "SET_PRODUCT_MENU_CATEGORY":
      return { ...state, productMenuCategory: action.payload };
    case "SET_CURRENT_CATEGORY":
      return { ...state, currentCategory: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "RESET_DEPARTMENT_MENU":
      return {
        ...state,
        products: [],
        departmentMenuOpen: 0,
        departmentMenu: "",
        currentCategory: "",
      };
    default:
      throw new Error();
  }
};

export default productReducer;
