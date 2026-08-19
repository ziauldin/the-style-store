import { Star } from "lucide-react";

export function ProductRating({
  rating = 0,
  reviewCount = 0,
}: {
  rating?: number;
  reviewCount?: number;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Star className="h-3.5 w-3.5 fill-gold text-gold" />
      <span className="text-foreground">{rating.toFixed(1)}</span>
      <span>({reviewCount})</span>
    </div>
  );
}
