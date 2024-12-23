import { getGames } from "@/services/games";
import { GenreProvider } from "@/contexts/genre-context";
import TopSellersHeader from "@/components/organisms/top-sellers-header";
import GameGrid from "@/components/organisms/game-grid";
import SeeMoreBtn from "@/components/atoms/see-more-btn";

export default async function CatalogContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const genre = (searchParams.genre as string) || "";
  const page = parseInt((searchParams.page as string) || "1");

  const { games, totalPages, currentPage, availableFilters } = await getGames(
    genre,
    page
  );

  return (
    <>
      <div className="border-b border-stroke-tertiar">
        <div className="mx-auto container px-4">
          <GenreProvider genres={availableFilters}>
            <TopSellersHeader />
          </GenreProvider>
        </div>
      </div>
      <div className="py-12 container mx-auto px-4 flex flex-col items-start">
        <GameGrid games={games} />
        <SeeMoreBtn className="w-auto mt-12" />
      </div>
    </>
  );
}
