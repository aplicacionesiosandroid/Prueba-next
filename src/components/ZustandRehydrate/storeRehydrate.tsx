// "use client";
// import { useEffect } from "react";
// import { useCartStore } from "@/lib/zustand/store";

// export function StoreConsumer() {
//   const products = useCartStore((state) => state.products);
//   console.log(products);
//   // hydrate persisted store after on mount
//   useEffect(() => {
//     useCartStore.persist.rehydrate();
//   }, []);

//   return null;
// }
