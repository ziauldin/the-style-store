"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SearchDialog } from "@/components/search/search-dialog";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { ids } = useWishlist();

  return (
    <header className="sticky top-0 z-40">
      <AnnouncementBar />
      <div className="border-b border-border bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Logo size={44} className="lg:hidden" />
            <Logo size={52} className="hidden lg:flex" />
          </div>

          <DesktopNav />

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-11 w-11 items-center justify-center"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/wishlist"
              className="relative hidden h-11 w-11 items-center justify-center sm:flex"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {ids.length > 0 ? (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
                  {ids.length}
                </span>
              ) : null}
            </Link>
            <span
              className="hidden h-11 w-11 items-center justify-center text-muted-foreground lg:flex"
              aria-hidden
              title="Account coming soon"
            >
              <User className="h-5 w-5" />
            </span>
            <button
              type="button"
              onClick={openCart}
              className="relative flex h-11 w-11 items-center justify-center"
              aria-label={`Cart, ${itemCount} items`}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 ? (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
      <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
