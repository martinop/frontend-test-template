import SkeletonElement from "@/components/atoms/skeleton-element";

export default function CatalogSkeleton() {
  return (
    <div
      className="w-full container mx-auto px-6 md:px-4 pb-24"
      role="main"
      aria-label="catalog skeleton"
    >
      <div className="mt-8 md:mt-12 mb-16">
        <SkeletonElement
          className="mb-12 h-8 w-48"
          aria-label="header skeleton"
        />
        <div className="flex justify-start md:justify-end gap-6">
          <SkeletonElement
            className="h-10 w-20 md:w-32"
            aria-label="header skeleton button"
          />
          <SkeletonElement
            className="h-10 w-48"
            aria-label="header skeleton button"
          />
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
        aria-label="grid skeleton"
      >
        {[...Array(6)].map((_, index) => (
          <div
            className="rounded-2xl border p-6 space-y-4"
            key={index}
            aria-label={`card skeleton ${index + 1}`}
          >
            <SkeletonElement
              className="w-full aspect-square md:aspect-video rounded-2xl mb-6"
              aria-label={`image for card skeleton ${index + 1}`}
            />
            <SkeletonElement
              className="h-4 w-24"
              aria-label={`title for card skeleton ${index + 1}`}
            />
            <div className="flex justify-between items-center">
              <SkeletonElement
                className="h-6 w-40"
                aria-label={`detail for card skeleton ${index + 1}`}
              />
              <SkeletonElement
                className="h-6 w-20"
                aria-label={`price for card skeleton ${index + 1}`}
              />
            </div>
            <SkeletonElement
              className="h-12 w-full"
              aria-label={`description for card skeleton ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
