"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductPrice } from "@/components/product/product-price";
import { ProductRating } from "@/components/product/product-rating";
import { QuantitySelector } from "@/components/product/quantity-selector";
import { VariantSelector } from "@/components/product/variant-selector";
import { WishlistButton } from "@/components/product/wishlist-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { useCart } from "@/context/cart-context";
import { categories } from "@/data/categories";
import { getStockLabel } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors?.[0]);
  const [size, setSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const category = categories.find((item) => item.slug === product.category);
  const outOfStock = product.stock <= 0;

  function addToCart() {
    addItem({ product, quantity, color, size });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <ProductGallery images={product.images} name={product.name} />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gold">
          {category?.name}
        </p>
        <h1 className="font-display mt-3 text-4xl">{product.name}</h1>
        <div className="mt-3">
          <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>
        <ProductPrice
          className="mt-5 text-xl"
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription ?? product.description}
        </p>
        {product.colors?.length ? (
          <div className="mt-8">
            <VariantSelector
              label="Color"
              options={product.colors}
              value={color}
              onChange={setColor}
              type="color"
            />
          </div>
        ) : null}
        {product.sizes?.length ? (
          <div className="mt-6">
            <VariantSelector
              label="Size"
              options={product.sizes}
              value={size}
              onChange={setSize}
            />
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <QuantitySelector value={quantity} onChange={setQuantity} max={Math.max(1, product.stock)} />
          <p className="text-sm text-muted-foreground">{getStockLabel(product.stock)}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button disabled={outOfStock} onClick={addToCart} className="min-w-[160px]">
            {outOfStock ? "Out of Stock" : "Add to Cart"}
          </Button>
          {outOfStock ? (
            <Button variant="secondary" disabled>
              Buy Now
            </Button>
          ) : (
            <Button variant="secondary" asChild>
              <Link href="/checkout" onClick={addToCart}>
                Buy Now
              </Link>
            </Button>
          )}
          <WishlistButton productId={product.id} className="border border-border bg-white" />
        </div>
        <div className="mt-4">
          <WhatsAppButton
            message={`Hello, I have a question about ${product.name}.`}
            className="w-full sm:w-auto"
          >
            WhatsApp Inquiry
          </WhatsAppButton>
        </div>
        {product.isHandmade ? (
          <div className="mt-8 border border-gold/30 bg-muted p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">
              Handcrafted Item
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Minor variations may occur because each handmade piece is individually finished.
            </p>
          </div>
        ) : null}
        <Accordion type="single" collapsible className="mt-8" defaultValue="description">
          <AccordionItem value="description">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>{product.description}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="material">
            <AccordionTrigger>Material</AccordionTrigger>
            <AccordionContent>{product.material ?? "Premium mixed textiles selected for comfort and drape."}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="dimensions">
            <AccordionTrigger>Dimensions</AccordionTrigger>
            <AccordionContent>{product.dimensions ?? "Please refer to the size options above."}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="care">
            <AccordionTrigger>Care Instructions</AccordionTrigger>
            <AccordionContent>
              {product.careInstructions ?? "Gentle wash. Dry in shade. Iron on reverse if needed."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping & Returns</AccordionTrigger>
            <AccordionContent>
              Nationwide delivery across Pakistan. Easy returns within 7 days on unused items with original packaging.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
