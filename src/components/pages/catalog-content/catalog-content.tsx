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
        <div className="mx-auto container px-6 md:px-4">
          <GenreProvider genres={availableFilters}>
            <TopSellersHeader />
          </GenreProvider>
        </div>
      </div>
      <div className="py-8 md:py-12 container mx-auto px-6 md:px-4 flex flex-col items-start animate-fadeIn">
        <GameGrid games={games} />
        {currentPage < totalPages && (
          <SeeMoreBtn className="w-full md:w-auto mt-6 md:mt-12" />
        )}
      </div>
    </>
  );
}
