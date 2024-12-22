import GameCard from "@/components/molecules/game-card";
import { Game } from "@/types";

interface GameGridProps {
  games: Game[];
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
