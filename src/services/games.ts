import { Game } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function getGames(
  genre?: string,
  page: number = 1
): Promise<{
  games: Game[];
  totalPages: number;
  availableFilters: string[];
  currentPage: number;
}> {
  const params = new URLSearchParams();
  if (genre) params.append("genre", genre);
  if (page) params.append("page", String(page));

  const response = await fetch(`${API_URL}/games?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}
