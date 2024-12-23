"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../button";

type SeeMoreBtnProps = {
  className: string;
};

export default function SeeMoreBtn({ className }: SeeMoreBtnProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(currentPage + 1));
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <Button onClick={handleLoadMore} className={className} fullWidth={false}>
      See More
    </Button>
  );
}
