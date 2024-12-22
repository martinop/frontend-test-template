import GenreSelect from "@/components/molecules/genre-select";

export default function TopSellersHeader() {
  return (
    <div className="py-12">
      <h5 className="mb-12 text-gray-medium text-4xl font-bold">Top Sellers</h5>
      <div className="flex justify-end">
        <GenreSelect />
      </div>
    </div>
  );
}
