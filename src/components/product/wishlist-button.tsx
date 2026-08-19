"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/wishlist-context";
import { cn } from "@/lib/utils";

export function WishlistButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { has, toggle } = useWishlist();
  const active = has(productId);

  return (
    <button
      type="button"
      onClick={() => toggle(productId)}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition hover:text-gold",
        className,
      )}
    >
      <Heart className={cn("h-4 w-4", active && "fill-gold text-gold")} />
    </button>
  );
}
