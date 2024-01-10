import { IProduct } from "@/lib/types/product.type";

export type CartAction = {
    setProducts: (item: IProduct[]) => void;
    addItem: (item: IProduct) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
    getCartCount: () => number;
  };