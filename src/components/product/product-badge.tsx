import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";
import { getDiscountPercent } from "@/lib/utils";

export function ProductBadges({ product }: { product: Product }) {
  const discount = getDiscountPercent(product.price, product.compareAtPrice);
  const badges: { label: string; className: string }[] = [];

  if (discount > 0) badges.push({ label: "Sale", className: "bg-gold text-black" });
  if (product.isNew) badges.push({ label: "New", className: "bg-black text-white" });
  else if (product.isBestSeller)
    badges.push({ label: "Best Seller", className: "bg-charcoal text-white" });
  else if (product.isHandmade)
    badges.push({ label: "Handmade", className: "bg-white/90 text-black" });

  return (
    <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
      {badges.slice(0, 2).map((badge) => (
        <Badge key={badge.label} className={badge.className}>
          {badge.label}
        </Badge>
      ))}
    </div>
  );
}
