"use client";
import { Product } from "@/lib/types/product.type";
// import { Product } from "@/lib/types/product.type";

import { useCartStore } from "@/lib/zustand/store";
import Image from "next/image";
interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const { addItem } = useCartStore();

  return (
    <div className="w-80 bg-gray-700 shadow rounded">
      {" "}
      <div className="h-48 w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center">
        <Image
          className="h-full w-full"
          src={product.thumbnail}
          alt=""
          height={300}
          width={300}
        ></Image>{" "}
        {/* <img className="h-48" src={product.thumbnail} alt="" />{" "} */}
        <div className="flex justify-between">
          {" "}
          <button className="text-white hover:text-blue-500"> </button>{" "}
        </div>{" "}
        <div> </div>{" "}
      </div>{" "}
      <div className="p-4 flex flex-col items-center">
        {" "}
        <h1 className="text-gray-300 text-center mt-1">{product.title}</h1>{" "}
        <p className="text-center text-gray-200 mt-1">₹{product.price}</p>{" "}
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 mt-4 w-full flex items-center justify-center hover:scale-[1.03] active:scale-[.97] active:duration-75 transition-all ease-in-out"
          onClick={() => addItem(product)}
        >
          {" "}
          Add to order{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />{" "}
          </svg>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default ProductItem;
