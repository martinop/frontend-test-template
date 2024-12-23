"use client";

import OrderSummaryItems from "@/components/molecules/order-summary-items";
import OrderTotal from "@/components/molecules/order-total";
import { useCart } from "@/contexts/cart-context";

export default function OrderSummary() {
  const { items } = useCart();

  return (
    <div className="bg-surface-primary border-[0.5px] border-stroke-secondary pt-6 md:pt-8 pb-[44px] md:pb-[52px] px-4 md:px-6 rounded-lg">
      <h4 className="font-semibold text-xl md:text-2xl tracking-[0.4px] text-primary leading-none">
        Order Summary
      </h4>
      <p className="text-primary text-lg mb-8 mt-3">
        {items.length} item{items.length !== 1 && "s"}
      </p>

      <OrderSummaryItems items={items} />

      <div className="border-t border-stroke-secondary pt-6">
        <OrderTotal items={items} />
      </div>
    </div>
  );
}
