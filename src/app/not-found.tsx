import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">404</p>
      <h1 className="font-display mt-3 text-4xl">This page is not in the collection</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        The link may be outdated, or the piece has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/shop">Return to Shop</Link>
      </Button>
    </div>
  );
}
