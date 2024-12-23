import GameCard from "@/components/molecules/game-card";
import { CartProvider } from "@/contexts/cart-context";
import { Game } from "@/types";

interface GameGridProps {
  games: Game[];
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <CartProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </CartProvider>
  );
}
