import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 md:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
