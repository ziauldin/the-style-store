"use client";

import { FilterSidebar, type ShopFilterState } from "@/components/shop/filter-sidebar";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";

export function FilterDrawer({
  open,
  onOpenChange,
  value,
  onChange,
  hideCategory,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: ShopFilterState;
  onChange: (next: ShopFilterState) => void;
  hideCategory?: boolean;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" title="Filters">
        <SheetHeader title="Filters" />
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <FilterSidebar
            value={value}
            onChange={onChange}
            hideCategory={hideCategory}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
