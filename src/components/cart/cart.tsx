import ProductItem from "@/components/ProductItem/ProductItem";
import { useCartStore } from "@/lib/zustand/store";

const Cart = () => {
  const { cart } = useCartStore();
  console.log(cart);
  return (
    <div>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
