"use client";

import Link from "next/link";
import { CartItemRow } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { EmptyState } from "@/components/shared/empty-state";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <EmptyState
        title="Your bag is empty"
        description="Add a dress, chadar, or home textile to begin."
      />
    );
  }

  return (
    <Container className="py-12">
      <h1 className="font-display text-4xl">Shopping Bag</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          {items.map((item) => (
            <CartItemRow key={item.id} item={item} />
          ))}
          <Button asChild variant="ghost" className="mt-6 px-0">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
        <CartSummary subtotal={subtotal} />
      </div>
    </Container>
  );
}
