"use client";

import { useCart } from "@/contexts/cart-context";
import Button from "@/components/atoms/button";
import { Game } from "@/types";

interface AddToCartProps {
  game: Game;
}

export default function AddToCart({ game }: AddToCartProps) {
  const { items, addItem, removeItem } = useCart();

  const isInCart = items.some((item) => item.id === game.id);

  const handleToggleCart = () => {
    if (isInCart) {
      removeItem(game.id);
    } else {
      addItem(game);
    }
  };

  return (
    <Button
      variant={isInCart ? "primary" : "secondary"}
      onClick={handleToggleCart}
    >
      {isInCart ? "Remove" : "Add to Cart"}
    </Button>
  );
}
