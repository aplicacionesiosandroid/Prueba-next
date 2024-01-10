"use client";
import { Product } from "@/lib/types/product.type";
import { useRouter } from "next/router";
import { useCartStore } from "@/lib/zustand/store";
import Image from "next/image";
const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { products } = useCartStore();
  const productId = router.query.productId as string;

  // Find the product with the matching ID
  const product: Product | undefined = products.find((p) => p.id === productId);

  // Handle product not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <Image
            src={product.thumbnail}
            alt={product.title}
            height={400}
            width={400}
          ></Image>
        </div>
        <div className="w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-blue-500">
            ${product.price.toFixed(2)}
          </p>
          {/* Add a button to add the product to the cart */}
          <button
            onClick={() => {
              // You can add the logic to add the product to the cart here
              // For example: useCartStore().addItem(product);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
