interface GameTitleProps {
  title: string;
}

export default function GameTitle({ title }: GameTitleProps) {
  return (
    <h3 className="font-bold text-lg leading-tight text-item-fill tracking-[0.4px]">
      {title}
    </h3>
  );
}
