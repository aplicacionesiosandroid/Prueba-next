"use client";
import { useEffect } from "react";
import { useCartStore } from "@/lib/zustand/store";
import ProductItem from "@/components/ProductItem/ProductItem";
import CartIcon from "@/components/Navbar/CartCount";
import { fetchProducts } from "@/api/fetchProduct";

const ProductsPage = () => {
  const { setProducts, products } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    fetchData();
  }, [setProducts]);

  return (
    <div>
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
