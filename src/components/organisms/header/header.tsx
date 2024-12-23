import Link from "next/link";
import CartIcon from "@/components/atoms/cart-icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-surface-secondary ">
      <div className="container mx-auto px-6 md:px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium text-neutral-dark">
          GamerShop
        </Link>
        <Link href="/cart" className="relative p-2" aria-label="Shopping cart">
          <CartIcon />
        </Link>
      </div>
    </header>
  );
}
