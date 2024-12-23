interface GenreTextProps {
  genre: string;
}

export default function GenreText({ genre }: GenreTextProps) {
  return <p className="text-neutral-500 uppercase font-bold mb-3">{genre}</p>;
}
