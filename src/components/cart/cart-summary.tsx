import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function CartSummary({
  subtotal,
  showCheckout = true,
}: {
  subtotal: number;
  showCheckout?: boolean;
}) {
  return (
    <aside className="border border-border bg-white p-6">
      <h2 className="font-display text-2xl">Order Summary</h2>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Delivery</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
          <span>Total estimate</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Nationwide delivery across Pakistan. Cash on delivery available on most orders.
      </p>
      {showCheckout ? (
        <div className="mt-6 space-y-3">
          <Button asChild className="w-full">
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button asChild variant="secondary" className="w-full">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : null}
    </aside>
  );
}
