import { Game } from "@/types";

interface OrderTotalProps {
  items: Game[];
}
export default function OrderTotal({ items }: OrderTotalProps) {
  return (
    <div className="flex justify-between items-center text-xl font-bold text-primary">
      <span>Order Total</span>
      <span>${items.reduce((prev, current) => prev + current.price, 0)}</span>
    </div>
  );
}
