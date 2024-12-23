import { Game } from "@/types";

interface OrderSummaryItemsProps {
  items: Game[];
}
export default function OrderSummaryItems({ items }: OrderSummaryItemsProps) {
  return (
    <div className="space-y-3 py-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between text-primary text-lg tracking-[0.4px] gap-x-8"
        >
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
