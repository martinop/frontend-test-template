import cx from "classnames";
import Image from "next/image";
import { Game } from "@/types";
import GenreText from "@/components/atoms/genre-text";
import GameTitle from "@/components/atoms/game-title";
import GamePrice from "@/components/atoms/game-price";
import CloseIcon from "@/components/atoms/close-icon";
import NewBadge from "@/components/atoms/new-badge";

interface CartItemProps {
  game: Game;
  className?: string;
  onRemove: (id: string) => void;
}

export default function CartItem({ game, className, onRemove }: CartItemProps) {
  return (
    <div className={cx("flex gap-6 p-5", className)}>
      <div className="relative aspect-[3/2] w-full max-w-[256px]">
        <Image
          src={game.image}
          alt={game.name}
          fill
          sizes="(max-width: 256px) 100vw, 256px"
          className="object-cover"
        />
        {game.isNew && <NewBadge />}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <GenreText genre={game.genre} />
          <GameTitle title={game.name} />
          <p className="mt-2 text-sm text-neutral-500 max-w-1/2">
            {game.description}
          </p>
        </div>
        <GamePrice price={game.price} className="text-right" />
      </div>
      <button
        onClick={() => onRemove(game.id)}
        className="mt-1.5 flex  self-start"
      >
        <CloseIcon />
      </button>
    </div>
  );
}
