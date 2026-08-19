"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const fashionLinks = categories.filter(
  (category) => category.collection === "fashion" || category.collection === "both",
);
const homeLinks = categories.filter(
  (category) => category.collection === "home" || category.collection === "both",
);

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      data-active={active}
      className="nav-link text-[13px] font-medium uppercase tracking-[0.16em] text-black"
    >
      {children}
    </Link>
  );
}

function MegaMenu({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { href: string; name: string }[];
}) {
  const pathname = usePathname();
  const active = pathname === href || items.some((item) => pathname.startsWith(item.href));

  return (
    <div className="group relative">
      <Link
        href={href}
        data-active={active}
        className="nav-link inline-flex items-center text-[13px] font-medium uppercase tracking-[0.16em] text-black"
      >
        {label}
      </Link>
      <div className="invisible absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="border border-border bg-ivory p-4 shadow-lg">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm text-charcoal transition-colors hover:text-gold",
                    pathname === item.href && "text-gold",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/shop">Shop</NavItem>
      <MegaMenu
        label="Fashion"
        href="/collections/fashion"
        items={fashionLinks.map((item) => ({
          href: `/category/${item.slug}`,
          name: item.name,
        }))}
      />
      <MegaMenu
        label="Home Collection"
        href="/collections/home"
        items={homeLinks.map((item) => ({
          href: `/category/${item.slug}`,
          name: item.name,
        }))}
      />
      <NavItem href="/shop?sort=newest">New Arrivals</NavItem>
      <NavItem href="/shop?sort=best-selling">Best Sellers</NavItem>
    </nav>
  );
}
