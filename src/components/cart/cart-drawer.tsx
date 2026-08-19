"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { CartItemRow } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, itemCount } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent title="Shopping bag">
        <SheetHeader title="Shopping Bag" onClose={closeCart} />
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Your bag is empty. Discover handmade fashion and home pieces.
            </p>
          ) : (
            items.map((item) => <CartItemRow key={item.id} item={item} />)
          )}
        </div>
        <div className="border-t border-border p-5">
          <div className="mb-4 flex justify-between text-sm">
            <span>Subtotal · {itemCount} items</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          <div className="grid gap-3">
            <Button asChild className="w-full">
              <Link href="/cart" onClick={closeCart}>
                View Cart
              </Link>
            </Button>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/checkout" onClick={closeCart}>
                Checkout
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
