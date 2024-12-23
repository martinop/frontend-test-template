import BackIcon from "@/components/atoms/back-icon";
import Link from "next/link";

export default function BackCatalogBtn() {
  return (
    <Link
      href="/"
      className="inline-flex items-center group py-6 text-primary leading-none font-medium gap-2 hover:underline"
    >
      <BackIcon className="md:group-hover:-translate-x-2 transition-all duration-300 ease-in-out" />
      Back to Catalog
    </Link>
  );
}
