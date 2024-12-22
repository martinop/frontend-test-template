import Image from "next/image";
import { Game } from "@/types";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="p-6 border border-stroke-alternative bg-surface-primary rounded-2xl">
      <div className="relative h-60">
        <Image
          src={game.image}
          alt={game.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-2xl object-cover"
          priority
        />
      </div>
      <div className="mt-5">
        <p className="text-neutral-500 uppercase font-bold mb-3">
          {game.genre}
        </p>
        <div className="mb-5 flex justify-between gap-x-12 items-center text-item-fill tracking-[0.4px]">
          <h3 className="font-bold text-lg leading-tight">{game.name}</h3>
          <div className="text-xl font-bold">${game.price}</div>
        </div>
      </div>
    </div>
  );
}
