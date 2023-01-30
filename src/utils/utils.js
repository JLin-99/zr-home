export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt[0].toUpperCase() + txt.substring(1).toLowerCase()
  );
}

export function formatProducts(categories) {
  const formattedProducts = [];
  categories.forEach((category) => {
    const productsObj = { category: category.name, products: [] };
    category.items.forEach((product) => {
      productsObj.products.push(product);
    });
    formattedProducts.push(productsObj);
  });

  return formattedProducts;
}
