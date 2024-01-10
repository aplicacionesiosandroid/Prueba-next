import { Product } from "@/lib/types/product.type";

export type CartAction = {
    setProducts: (item: Product[]) => void;
    addItem: (item: Product) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    getCartCount: () => number;
  };