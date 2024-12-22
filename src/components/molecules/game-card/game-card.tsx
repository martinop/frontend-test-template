import Image from "next/image";
import { Game } from "@/types";
import AddToCart from "@/components/atoms/add-to-cart-btn";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="p-6 border-[0.5px] border-stroke-alternative bg-surface-primary rounded-2xl flex flex-col justify-between gap-5">
      <div>
        <div className="relative h-60">
          <Image
            src={game.image}
            alt={game.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-2xl object-cover"
            priority
          />
          {game.isNew && (
            <span className="absolute top-3 left-3 bg-stone-100 text-cta-content-item py-2 px-3 rounded leading-none tracking-[0.4px]">
              New
            </span>
          )}
        </div>
        <div className="mt-5">
          <p className="text-neutral-500 uppercase font-bold mb-3">
            {game.genre}
          </p>
          <div className="flex justify-between gap-x-12 items-center text-item-fill tracking-[0.4px]">
            <h3 className="font-bold text-lg leading-tight">{game.name}</h3>
            <div className="text-xl font-bold">${game.price}</div>
          </div>
        </div>
      </div>
      <AddToCart game={game} />
    </div>
  );
}
