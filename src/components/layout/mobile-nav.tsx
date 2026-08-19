"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections/fashion", label: "Fashion" },
  { href: "/collections/home", label: "Home Collection" },
  { href: "/shop?sort=newest", label: "New Arrivals" },
  { href: "/shop?sort=best-selling", label: "Best Sellers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" title="Menu" className="max-w-sm">
        <SheetHeader title="Menu" />
        <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "font-display text-2xl",
                    pathname === link.href ? "text-gold" : "text-black",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Shop by category
          </p>
          <ul className="mt-3 space-y-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  onClick={() => onOpenChange(false)}
                  className="text-sm text-charcoal"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
