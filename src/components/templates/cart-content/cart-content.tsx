import Button from "@/components/atoms/button";
import CartHeader from "@/components/molecules/cart-header";
import CartItemsList from "@/components/organisms/cart-items-list";
import OrderSummary from "@/components/organisms/order-summary";

export default function CartContent() {
  return (
    <div className="container mx-auto px-4">
      <CartHeader />
      <div className="grid lg:grid-cols-5 gap-20 mb-12">
        <CartItemsList className="col-span-3" />
        <div className="col-span-2">
          <OrderSummary />
          <Button className="mt-8">Checkout</Button>
        </div>
      </div>
    </div>
  );
}
