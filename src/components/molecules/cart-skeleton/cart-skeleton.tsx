import SkeletonElement from "@/components/atoms/skeleton-element";

export default function CartSkeleton() {
  return (
    <div className="container mx-auto px-6 md:px-4 py-16">
      <SkeletonElement className="h-16 w-64 mb-16" />

      <div className="grid lg:grid-cols-5 gap-20 mb-12">
        <div className="col-span-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex gap-4 p-4 border-b">
              <SkeletonElement className="w-[256px] aspect-[3/2] shrink-0" />

              <div className="flex-1 space-y-4">
                <SkeletonElement className="h-4 w-20" />
                <SkeletonElement className="h-6 w-48" />
                <SkeletonElement className="h-4 w-3/4" />
              </div>

              <div className="text-right">
                <SkeletonElement className="h-6 w-20 ml-auto" />
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-6 h-fit space-y-6 col-span-2">
          <SkeletonElement className="h-6 w-36 mb-4" />
          <SkeletonElement className="h-4 w-20" />

          <div className="space-y-4 my-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex justify-between">
                <SkeletonElement className="h-4 w-32" />
                <SkeletonElement className="h-4 w-16" />
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between">
              <SkeletonElement className="h-6 w-24" />
              <SkeletonElement className="h-6 w-24" />
            </div>
          </div>

          <SkeletonElement className="h-12 w-full mt-6" />
        </div>
      </div>
    </div>
  );
}
