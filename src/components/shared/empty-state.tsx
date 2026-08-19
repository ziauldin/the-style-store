import Link from "next/link";
import { ShoppingBag, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyState({
  title,
  description,
  href = "/shop",
  action = "Continue Shopping",
  icon = "bag",
}: {
  title: string;
  description: string;
  href?: string;
  action?: string;
  icon?: "bag" | "heart" | "search";
}) {
  const Icon = icon === "heart" ? Heart : icon === "search" ? Search : ShoppingBag;

  return (
    <div className="flex flex-col items-center px-4 py-20 text-center">
      <Icon className="h-10 w-10 text-gold" strokeWidth={1.25} />
      <h2 className="font-display mt-5 text-3xl">{title}</h2>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">{description}</p>
      <Button asChild className="mt-8">
        <Link href={href}>{action}</Link>
      </Button>
    </div>
  );
}
