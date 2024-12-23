import BackCatalogBtn from "@/components/molecules/back-catalog-btn/back-catalog-btn";
import CartSkeleton from "@/components/molecules/cart-skeleton";
import { CartProvider } from "@/contexts/cart-context";
import dynamic from "next/dynamic";

const CartContent = dynamic(
  () => import("@/components/templates/cart-content"),
  {
    ssr: false,
    loading: () => <CartSkeleton />,
  }
);

export default function CartPage() {
  return (
    <CartProvider>
      <div className="container mx-auto px-6 md:px-4 animate-fadeIn">
        <BackCatalogBtn />
      </div>
      <CartContent />
    </CartProvider>
  );
}
