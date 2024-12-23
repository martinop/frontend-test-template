import Image from "next/image";
import { Game } from "@/types";
import dynamic from "next/dynamic";
import SkeletonElement from "@/components/atoms/skeleton-element";
import GenreText from "@/components/atoms/genre-text";
import GameTitle from "@/components/atoms/game-title";
import GamePrice from "@/components/atoms/game-price";
import NewBadge from "@/components/atoms/new-badge";

const AddToCart = dynamic(
  () => import("@/components/atoms/add-to-cart-btn").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <SkeletonElement className="w-full h-[54px] rounded-lg" />,
  }
);

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
          {game.isNew && <NewBadge />}
        </div>
        <div className="mt-5">
          <GenreText genre={game.genre} />
          <div className="flex justify-between gap-x-12 items-center">
            <GameTitle title={game.name} />
            <GamePrice price={game.price} />
          </div>
        </div>
      </div>
      <AddToCart game={game} />
    </div>
  );
}
