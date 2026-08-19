"use client";

import { SORT_OPTIONS } from "@/lib/constants";
import type { ProductSort } from "@/types/product";

export function SortSelect({
  value,
  onChange,
}: {
  value: ProductSort;
  onChange: (value: ProductSort) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Sort
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as ProductSort)}
        className="h-10 rounded-md border border-border bg-white px-3 text-sm"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
