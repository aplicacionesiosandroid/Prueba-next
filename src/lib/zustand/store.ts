// Import Zustand and create a store
import { create } from "zustand";

// Define the state and actions for the cart store
export type CartItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export type CartState = {
  items: CartItem[] | [];
  total: number;
  itemCount: number; // Add a new property to store the number of items in the cart
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  numberCart: (state: CartState) => number;
  updateItemCount: (count: number) => void; // Add a new action to update the itemCount state
};

// Define the numberCart selector function
const numberCart = (state: CartState) => {
  // Get the items array from the state
  const { items } = state;
  // Return the length of the items array
  return items.length;
};

// Create the cart store with an initial state
export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  itemCount: 0, // Initialize the itemCount state to zero
  addItem: (item: CartItem) => {
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
    // Update the itemCount state with the new length of the items array
    // Use the items variable instead of the updatedItems variable
    get().updateItemCount(items.length);
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
      // Update the itemCount state with the new length of the items array
      // Use the items variable instead of the updatedItems variable
      get().updateItemCount(items.length);
    }
  },
  clearCart: () => {
    // Reset the cart state to the initial values
    set(() => ({
      items: [],
      total: 0,
      itemCount: 0, // Reset the itemCount state to zero
    }));
    const cartCount = numberCart(get());
    // Do something with the cartCount value, such as logging it to the console
    console.log("Cart count:", cartCount);
  },
  numberCart: (state) => numberCart(state),
  updateItemCount: (count: number) => {
    // Define the updateItemCount action that sets the itemCount state to the given count parameter
    set(() => ({
      itemCount: count,
    }));
  },
}));
