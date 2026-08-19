"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";
import { searchProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchProducts(query).slice(0, 8), [query]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 animate-fade-in" />
        <Dialog.Content className="fixed inset-x-0 top-0 z-50 max-h-[100dvh] overflow-y-auto bg-ivory p-4 shadow-xl sm:inset-x-8 sm:top-16 sm:max-h-[80vh] sm:rounded-md md:inset-x-auto md:left-1/2 md:w-full md:max-w-2xl md:-translate-x-1/2">
          <Dialog.Title className="sr-only">Search products</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-border pb-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dresses, chadars, bedsheets..."
              className="h-11 flex-1 bg-transparent text-base outline-none"
              aria-label="Search products"
            />
            <Dialog.Close className="flex h-10 w-10 items-center justify-center" aria-label="Close search">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <div className="mt-4">
            {!query.trim() ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Search by product name, category, or material.
              </p>
            ) : results.length === 0 ? (
              <EmptyState
                icon="search"
                title="No matches"
                description="Try another name, material, or category."
                action="Browse Shop"
              />
            ) : (
              <ul className="divide-y divide-border">
                {results.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.slug}`}
                      onClick={() => onOpenChange(false)}
                      className="flex items-center gap-4 py-3"
                    >
                      <span className="relative h-16 w-12 overflow-hidden bg-muted">
                        <Image
                          src={product.images[0]}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-lg">{product.name}</span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {product.material} · {formatPrice(product.price)}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
