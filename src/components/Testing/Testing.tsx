"use client";
import React from "react";
import { useCartStore } from "@/lib/zustand/store";

const Testing = () => {
  const { products } = useCartStore();
  return <div></div>;
};

export default Testing;
