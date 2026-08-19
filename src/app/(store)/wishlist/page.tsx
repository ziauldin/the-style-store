"use client";

import Image from "next/image";
import Link from "next/link";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { getProductById } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { ids, remove } = useWishlist();
  const { addItem } = useCart();
  const products = ids
    .map((id) => getProductById(id))
    .filter((product) => Boolean(product));

  if (products.length === 0) {
    return (
      <EmptyState
        icon="heart"
        title="Your wishlist is empty"
        description="Save dresses, shawls, and home pieces you want to return to."
      />
    );
  }

  return (
    <Container className="py-12">
      <h1 className="font-display text-4xl">Wishlist</h1>
      <div className="mt-8 divide-y divide-border">
        {products.map((product) =>
          product ? (
            <div key={product.id} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center">
              <Link href={`/product/${product.slug}`} className="relative h-32 w-24 overflow-hidden bg-muted">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="96px" />
              </Link>
              <div className="min-w-0 flex-1">
                <Link href={`/product/${product.slug}`} className="font-display text-2xl">
                  {product.name}
                </Link>
                <p className="mt-1 text-sm">{formatPrice(product.price)}</p>
              </div>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  disabled={product.stock <= 0}
                  onClick={() =>
                    addItem({
                      product,
                      color: product.colors?.[0],
                      size: product.sizes?.[0],
                    })
                  }
                >
                  Add to Cart
                </Button>
                <Button size="sm" variant="secondary" onClick={() => remove(product.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ) : null,
        )}
      </div>
    </Container>
  );
}
