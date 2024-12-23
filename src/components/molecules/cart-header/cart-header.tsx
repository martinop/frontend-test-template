"use client";

import { useCart } from "@/contexts/cart-context";

export default function CartHeader() {
  const { items } = useCart();

  return (
    <div className="py-8 md:py-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-3 text-neutral-dark">
        Your Cart
      </h1>
      <p className="text-primary text-xl md:text-2xl">
        {items.length} item{items.length !== 1 && "s"}
      </p>
    </div>
  );
}
