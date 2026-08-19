"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductBadges } from "@/components/product/product-badge";
import { ProductPrice } from "@/components/product/product-price";
import { ProductRating } from "@/components/product/product-rating";
import { WishlistButton } from "@/components/product/wishlist-button";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { categories } from "@/data/categories";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const category = categories.find((item) => item.slug === product.category);
  const outOfStock = product.stock <= 0;
  const hoverImage = product.images[1] ?? product.images[0];

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-muted">
        <Link href={`/product/${product.slug}`} className="relative block aspect-[3/4]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          {hoverImage !== product.images[0] ? (
            <Image
              src={hoverImage}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover opacity-0 transition duration-500 group-hover:opacity-100"
            />
          ) : null}
        </Link>
        <ProductBadges product={product} />
        <WishlistButton
          productId={product.id}
          className="absolute right-3 top-3 z-10 sm:opacity-0 sm:transition sm:group-hover:opacity-100"
        />
        <div className="absolute inset-x-3 bottom-3 z-10 sm:translate-y-2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <Button
            size="sm"
            className="w-full"
            disabled={outOfStock}
            onClick={() =>
              addItem({
                product,
                color: product.colors?.[0],
                size: product.sizes?.[0],
              })
            }
          >
            {outOfStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {category?.shortName ?? product.category}
          {product.material ? ` · ${product.material}` : ""}
        </p>
        <Link href={`/product/${product.slug}`} className="mt-1 block">
          <h3 className="font-display text-lg leading-snug">{product.name}</h3>
        </Link>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} />
          <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>
      </div>
    </article>
  );
}
