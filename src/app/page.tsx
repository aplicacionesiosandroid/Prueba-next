// import { Product } from "@/lib/types/product.type";
import { CartItem } from "@/lib/zustand/store";
import ProductItem from "@/components/ProductItem/ProductItem";
import CartIcon from "@/components/cart/CatIcon";

// define the interface for the props
interface ProductsPageProps {
  products: CartItem[]; // an array of products
}

// fetch data from dummyjson site at build time
const GetProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  return {
    products,
  };
};

// display products in page component
export default async function ProductsPage() {
  const { products }: { products: CartItem[] } = await GetProducts();
  return (
    <div>
      <CartIcon/>
      <h1>Products</h1>
      <ul className="flex flex-wrap gap-6 justify-center items-center">
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
