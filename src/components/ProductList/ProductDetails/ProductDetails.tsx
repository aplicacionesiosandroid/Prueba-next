"use client";
import { useCartStore } from "@/lib/zustand/store";
import { useEffect, useState } from "react";
import { IProduct } from "@/lib/types/product.type";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetails = () => {
  const params = useParams();
  const id = Number(params.productId);
  const { products, addItem } = useCartStore();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    setProduct(product || null);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-[500px] h-[400px] object-cover mb-4"
          src={product.thumbnail}
          alt={product.title}
          height={500}
          width={500}
        />
        <p className="mb-4">{product.description}</p>
        <p className="font-bold mb-4">${product.price}</p>
        <button
          onClick={() => addItem(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
