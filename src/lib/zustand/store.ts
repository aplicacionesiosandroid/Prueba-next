// Import Zustand and create a store
import { create } from "zustand";

// Define the state and actions for the cart store
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export type CartState = {
  items: Product[] | [];
  products: Product[] | [];
  total: number;
  itemCount: number;
};
export type CartAction = {
  setProducts: (item: Product[]) => void;
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getCartCount: () => number;
};

// Create the cart store with an initial state
export const useCartStore = create<CartState & CartAction>((set, get) => ({
  items: [],
  products: [],
  total: 0,
  itemCount: 0,
  setProducts: (item: Product[]) => {
    const updatedItems = [...item];
    set({ products: updatedItems });
  },
  addItem: (item: Product) => {
    const items = get().items;
    const existingItem = items.find((i) => i.id === item.id);
    // If the item already exists in the cart, increase its quantity
    if (existingItem) {
      const updatedItems = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      set((state) => ({
        items: updatedItems,
        total: state.total + item.price,
      }));
    } else {
      // Otherwise, add the item to the cart
      const updatedItems = [...items, { ...item, quantity: 1 }];
      set((state) => ({
        items: updatedItems,
        total: state.total + item.price,
      }));
    }
  },
  removeItem: (id: string) => {
    const items = get().items;
    const itemToRemove = items.find((i) => i.id === id);
    // If the item exists in the cart, decrease its quantity or remove it
    if (itemToRemove) {
      const newQuantity = itemToRemove.quantity - 1;
      const updatedItems =
        newQuantity > 0
          ? items.map((i) =>
              i.id === id ? { ...i, quantity: newQuantity } : i
            )
          : items.filter((i) => i.id !== id);
      set((state) => ({
        items: updatedItems,
        total: state.total - itemToRemove.price,
      }));
    }
  },
  getCartCount: () => {
    const items = get().items;
    let count = 0;
    // for (let item of items) {
    //   count += item.quantity;
    // }
    count = items.length;
    return count;
  },
  clearCart: () => {
    // Reset the cart state to the initial values
    set(() => ({
      items: [],
      total: 0,
      itemCount: 0,
    }));
  },
}));
