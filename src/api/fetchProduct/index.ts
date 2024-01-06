import { useEffect } from "react";
import { useCartStore } from "@/lib/zustand/store";

const GetProducts = () => {
  const { setProducts } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [setProducts]);

  return null; // or return some UI if needed
};

export default GetProducts;

// const GetProducts = async() => {
//     const {setProducts} = useCartStore()
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   const productsData = await data.products

//   return {
//     //@ts-ignore
//     setProducts(productsData)
//   };
// };
