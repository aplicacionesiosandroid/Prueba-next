"use client";
import { IProduct } from "@/lib/types/product.type";
import { useCartStore } from "@/lib/zustand/store";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";
interface ProductItemProps {
  product: IProduct;
}

function ProductItem({ product }: ProductItemProps) {
  const { addItem } = useCartStore();
  const router = useRouter();

  return (
    <div className="w-80 bg-gray-700 shadow rounded">
      {" "}
      <div className="h-48 w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center">
        <Image
          className="h-full w-full cursor-pointer"
          src={product.thumbnail}
          alt={product.title}
          height={300}
          width={300}
          onClick={() => {
            router.push(`/products/${product.id}`);
          }}
        ></Image>
        <div className="flex justify-between">
          {" "}
          <button className="text-white hover:text-blue-500"> </button>{" "}
        </div>
      </div>{" "}
      <div className="p-4 flex flex-col items-center">
        {" "}
        <h1 className="text-gray-300 text-center mt-1">{product.title}</h1>{" "}
        <p className="text-center text-gray-200 mt-1">₹{product.price}</p>{" "}
        <Link href={`/products/${product.id}`}>Go to product</Link>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 mt-4 w-full flex items-center justify-center hover:scale-[1.03] active:scale-[.97] active:duration-75 transition-all ease-in-out"
          onClick={() => addItem(product)}
        >
          {"  "}
          Add to order <MdOutlineAddShoppingCart className=" text-2xl mx-2" />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
