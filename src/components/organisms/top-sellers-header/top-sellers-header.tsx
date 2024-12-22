import GenreSelect from "@/components/molecules/genre-select";
import { GenreProvider } from "@/contexts/genre-context";

const genres = ["Action", "Drama", "Romance", "Comedy"];

export default function TopSellersHeader() {
  return (
    <GenreProvider genres={genres}>
      <div className="py-12 border-b border-stroke-tertiary">
        <h5 className="mb-12 text-gray-medium text-4xl font-bold">
          Top Sellers
        </h5>
        <div className="flex justify-end">
          <GenreSelect />
        </div>
      </div>
    </GenreProvider>
  );
}
