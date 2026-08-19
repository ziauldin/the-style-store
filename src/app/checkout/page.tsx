"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { EmptyState } from "@/components/shared/empty-state";

const provinces = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Gilgit-Baltistan",
  "Azad Jammu & Kashmir",
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (items.length === 0 && !placed) {
    return (
      <EmptyState
        title="Nothing to check out"
        description="Add something to your bag first."
        href="/shop"
      />
    );
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = `TSS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(id);
    setPlaced(true);
    clearCart();
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-gold">Confirmed</p>
        <h1 className="font-display mt-3 text-4xl">Thank you for your order</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This is a simulated confirmation. No payment was taken and no order was sent to a server.
        </p>
        <p className="mt-6 text-sm">
          Reference <span className="font-medium">{orderId}</span>
        </p>
        <Button asChild className="mt-8">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1fr_380px] sm:px-6">
      <form onSubmit={onSubmit} className="space-y-8">
        <section>
          <h1 className="font-display text-3xl">Checkout</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Step 1 of 1 — Contact, shipping, and payment preference.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.18em]">Contact</h2>
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" required autoComplete="name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.18em]">Shipping</h2>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" required autoComplete="street-address" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" required autoComplete="address-level2" />
            </div>
            <div>
              <Label htmlFor="province">Province</Label>
              <select
                id="province"
                name="province"
                required
                className="h-11 w-full rounded-md border border-border bg-white px-3 text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Select province
                </option>
                {provinces.map((province) => (
                  <option key={province}>{province}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="postal">Postal Code</Label>
            <Input id="postal" name="postal" autoComplete="postal-code" />
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-[0.18em]">Delivery method</h2>
          <label className="flex items-center gap-3 border border-black bg-white p-4 text-sm">
            <input type="radio" name="delivery" defaultChecked className="accent-black" />
            Standard Delivery — 2–6 working days
          </label>
        </section>
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-[0.18em]">Payment</h2>
          <label className="flex items-center gap-3 border border-border bg-white p-4 text-sm">
            <input type="radio" name="payment" value="cod" defaultChecked className="accent-black" />
            Cash on Delivery
          </label>
          <label className="flex items-center gap-3 border border-border bg-white p-4 text-sm">
            <input type="radio" name="payment" value="bank" className="accent-black" />
            Bank Transfer
          </label>
          <p className="text-xs text-muted-foreground">
            Payment is not processed in this prototype.
          </p>
        </section>
        <Button type="submit" className="w-full lg:w-auto">
          Place Order
        </Button>
      </form>
      <aside className="h-fit border border-border bg-white p-6 lg:sticky lg:top-8">
        <h2 className="font-display text-2xl">Order summary</h2>
        <ul className="mt-5 divide-y divide-border">
          {items.map((item) => (
            <li key={item.id} className="flex gap-3 py-3">
              <span className="relative h-16 w-12 overflow-hidden bg-muted">
                <Image src={item.image} alt="" fill className="object-cover" sizes="48px" />
              </span>
              <span className="min-w-0 flex-1 text-sm">
                <span className="block">{item.name}</span>
                <span className="text-xs text-muted-foreground">
                  {[item.color, item.size, `x${item.quantity}`].filter(Boolean).join(" · ")}
                </span>
              </span>
              <span className="text-sm">{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-border pt-4 text-sm">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="mt-2 flex justify-between text-sm text-muted-foreground">
          <span>Delivery</span>
          <span>Calculated after launch</span>
        </div>
        <div className="mt-3 flex justify-between font-medium">
          <span>Total estimate</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </aside>
    </div>
  );
}
