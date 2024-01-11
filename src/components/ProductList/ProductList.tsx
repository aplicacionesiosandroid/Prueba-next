"use client";
import { useEffect } from "react";
import { useCartStore } from "@/lib/zustand/store";
import ProductItem from "@/components/ProductItem/ProductItem";
import { fetchProducts } from "@/lib/api/fetchProduct";
import Searchbar from "@/components/SearchBar/SearchBar";

const ProductsPage = () => {
  const { setProducts, products } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    fetchData();
  }, [setProducts, products]);

  return (
    <div>
      <div className="flex justify-center items-center my-4">
        <Searchbar />
      </div>
      <ul className="flex flex-wrap gap-6 justify-center items-center">
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
