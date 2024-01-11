// api.ts
export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


// const fetchProducts = async () => {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   const products = data.products;

//   return {
//     products,
//   };
// };