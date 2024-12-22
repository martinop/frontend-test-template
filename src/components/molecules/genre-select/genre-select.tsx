"use client";

import { useGenreContext } from "@/contexts/genre-context";
import { useRouter, useSearchParams } from "next/navigation";

export default function GenreSelect() {
  const { genres } = useGenreContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get("genre") || "";

  const handleGenreChange = (newGenre: string) => {
    const params = new URLSearchParams(searchParams);
    if (newGenre) {
      params.set("genre", newGenre);
    } else {
      params.delete("genre");
    }
    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  };

  console.log({ genres });

  return (
    <div className="flex items-center">
      <span className="text-xl text-gray-medium font-bold pr-6 border-r border-stroke-secondary mr-6">
        Genre
      </span>
      <select
        className="w-[230px] px-4 h-14 text-xl text-primary"
        onChange={(e) => handleGenreChange(e.target.value)}
        value={currentGenre}
      >
        <option value="">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
