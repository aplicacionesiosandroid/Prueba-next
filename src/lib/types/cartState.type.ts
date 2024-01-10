import { Product } from "@/lib/types/product.type";

export type CartState = {
    items: Product[] | [];
    products: Product[] | [];
    total: number;
    itemCount: number;
  };