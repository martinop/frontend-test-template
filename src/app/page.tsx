import CatalogSkeleton from "@/components/molecules/catalog-skeleton";
import CatalogContent from "@/components/pages/catalog-content";
import { Suspense } from "react";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CatalogPage({ searchParams }: PageProps) {
  const contentKey = `${searchParams.genre || ""}-${searchParams.page || "1"}`;

  if (!searchParams.genre && !searchParams.page)
    return <CatalogContent searchParams={searchParams} />;

  return (
    <main>
      <Suspense key={contentKey} fallback={<CatalogSkeleton />}>
        <CatalogContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
