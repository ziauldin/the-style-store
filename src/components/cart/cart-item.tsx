"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { QuantitySelector } from "@/components/product/quantity-selector";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import type { CartItem } from "@/types/product";

export function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-border py-4">
      <Link href={`/product/${item.slug}`} className="relative h-24 w-20 shrink-0 overflow-hidden bg-muted">
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
      </Link>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/product/${item.slug}`} className="font-display text-lg leading-snug">
              {item.name}
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">
              {[item.color, item.size].filter(Boolean).join(" / ")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="text-muted-foreground hover:text-black"
            aria-label={`Remove ${item.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <QuantitySelector
            value={item.quantity}
            onChange={(value) => updateQuantity(item.id, value)}
          />
          <p className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</p>
        </div>
      </div>
    </div>
  );
}
