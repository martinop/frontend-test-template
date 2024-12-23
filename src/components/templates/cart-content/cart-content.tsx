import Button from "@/components/atoms/button";
import CartHeader from "@/components/molecules/cart-header";
import CartItemsList from "@/components/organisms/cart-items-list";
import OrderSummary from "@/components/organisms/order-summary";

export default function CartContent() {
  return (
    <div className="container mx-auto px-6 md:px-4 animate-fadeIn">
      <CartHeader />
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-20 mb-12">
        <CartItemsList className="lg:col-span-3" />
        <div className="lg:col-span-2">
          <OrderSummary />
          <Button className="mt-10 md:mt-8">Checkout</Button>
        </div>
      </div>
    </div>
  );
}
