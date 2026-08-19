import { formatPrice, getDiscountPercent } from "@/lib/utils";

export function ProductPrice({
  price,
  compareAtPrice,
  className,
}: {
  price: number;
  compareAtPrice?: number;
  className?: string;
}) {
  const discount = getDiscountPercent(price, compareAtPrice);

  return (
    <div className={className}>
      <span className="font-medium">{formatPrice(price)}</span>
      {compareAtPrice && discount > 0 ? (
        <>
          <span className="ml-2 text-sm text-muted-foreground line-through">
            {formatPrice(compareAtPrice)}
          </span>
          <span className="ml-2 text-xs uppercase tracking-wider text-gold">
            {discount}% off
          </span>
        </>
      ) : null}
    </div>
  );
}
