"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { FilterDrawer } from "@/components/shop/filter-drawer";
import { FilterSidebar, type ShopFilterState } from "@/components/shop/filter-sidebar";
import { SortSelect } from "@/components/shop/sort-select";
import { ProductGrid } from "@/components/product/product-grid";
import { EmptyState } from "@/components/shared/empty-state";
import { queryProducts } from "@/lib/catalog";
import type { Collection, ProductSort } from "@/types/product";

export function ShopCatalog({
  initialSort = "featured",
  initialCategory,
  initialCollection,
  heading,
}: {
  initialSort?: ProductSort;
  initialCategory?: string;
  initialCollection?: Collection;
  heading?: string;
}) {
  const [filters, setFilters] = useState<ShopFilterState>({
    categories: initialCategory ? [initialCategory] : undefined,
    collection: initialCollection,
  });
  const [sort, setSort] = useState<ProductSort>(initialSort);
  const [filterOpen, setFilterOpen] = useState(false);

  const products = useMemo(
    () =>
      queryProducts(
        {
          ...filters,
          categories: initialCategory
            ? [initialCategory]
            : filters.categories,
          collection: initialCollection,
        },
        sort,
      ),
    [filters, sort, initialCategory, initialCollection],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
      <aside className="hidden lg:block">
        <FilterSidebar
          value={filters}
          onChange={setFilters}
          hideCategory={Boolean(initialCategory)}
        />
      </aside>
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {heading ? `${heading} · ` : ""}
            {products.length} pieces
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 border border-border px-3 text-xs uppercase tracking-[0.14em] lg:hidden"
              onClick={() => setFilterOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <SortSelect value={sort} onChange={setSort} />
          </div>
        </div>
        {products.length === 0 ? (
          <EmptyState
            icon="search"
            title="No matching pieces"
            description="Adjust the filters to see more of the collection."
          />
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
      <FilterDrawer
        open={filterOpen}
        onOpenChange={setFilterOpen}
        value={filters}
        onChange={setFilters}
        hideCategory={Boolean(initialCategory)}
      />
    </div>
  );
}
