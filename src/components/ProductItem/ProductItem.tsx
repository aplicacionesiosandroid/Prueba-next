"use client";
import React from "react";
import { Product } from "@/lib/types/product.type";

import { useCartStore } from "@/lib/zustand/store";
import Image from "next/image";
interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const { addToCart } = useCartStore();

  return (
    <div className="">
      <h5>{product.id}</h5>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* <Image
        src={product.thumbnail}
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
      <img src={product.thumbnail} alt="lmao" />

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
