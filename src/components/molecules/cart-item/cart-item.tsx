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
    <div
      className={cx("flex flex-col md:flex-row gap-4 md:gap-6 p-5", className)}
    >
      <div className="flex items-start gap-3 w-full md:max-w-[256px]">
        <div className="relative aspect-video md:aspect-[3/2] w-full">
          <Image
            src={game.image}
            alt={game.name}
            fill
            sizes="(max-width: 256px) 100vw, 256px"
            className="object-cover"
          />
          {game.isNew && <NewBadge />}
        </div>
        <button
          className="block md:hidden"
          aria-label="Remove game"
          onClick={() => onRemove(game.id)}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-between gap-14 md:gap-0">
        <div>
          <GenreText genre={game.genre} />
          <GameTitle title={game.name} />
          <p className="mt-2 text-sm text-neutral-500 max-w-1/2">
            {game.description}
          </p>
        </div>
        <GamePrice price={game.price} className="text-right leading-none" />
      </div>
      <button
        onClick={() => onRemove(game.id)}
        aria-label="Remove game"
        className="hidden md:flex mt-1.5 self-start"
      >
        <CloseIcon />
      </button>
    </div>
  );
}
