"use client";

import { categories } from "@/data/categories";
import { Checkbox } from "@/components/ui/checkbox";
import { MATERIALS, PRICE_RANGES } from "@/lib/constants";
import type { ProductFilters } from "@/types/product";

export type ShopFilterState = ProductFilters & {
  priceRangeId?: string;
};

export function FilterSidebar({
  value,
  onChange,
  hideCategory = false,
}: {
  value: ShopFilterState;
  onChange: (next: ShopFilterState) => void;
  hideCategory?: boolean;
}) {
  function toggle(list: string[] | undefined, item: string) {
    const current = list ?? [];
    return current.includes(item)
      ? current.filter((entry) => entry !== item)
      : [...current, item];
  }

  return (
    <div className="space-y-8">
      {!hideCategory ? (
        <fieldset>
          <legend className="text-xs uppercase tracking-[0.18em]">Category</legend>
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label key={category.slug} className="flex items-center gap-3 text-sm">
                <Checkbox
                  checked={value.categories?.includes(category.slug) ?? false}
                  onCheckedChange={() =>
                    onChange({
                      ...value,
                      categories: toggle(value.categories, category.slug),
                    })
                  }
                />
                {category.name}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <fieldset>
        <legend className="text-xs uppercase tracking-[0.18em]">Price</legend>
        <div className="mt-4 space-y-3">
          {PRICE_RANGES.map((range) => (
            <label key={range.id} className="flex items-center gap-3 text-sm">
              <input
                type="radio"
                name="price"
                checked={value.priceRangeId === range.id}
                onChange={() =>
                  onChange({
                    ...value,
                    priceRangeId: range.id,
                    priceMin: range.min,
                    priceMax: range.max === Infinity ? undefined : range.max,
                  })
                }
                className="accent-black"
              />
              {range.label}
            </label>
          ))}
          <button
            type="button"
            className="text-xs uppercase tracking-wider text-gold"
            onClick={() =>
              onChange({
                ...value,
                priceRangeId: undefined,
                priceMin: undefined,
                priceMax: undefined,
              })
            }
          >
            Clear price
          </button>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-xs uppercase tracking-[0.18em]">Availability</legend>
        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-3 text-sm">
            <Checkbox
              checked={value.inStock ?? false}
              onCheckedChange={(checked) =>
                onChange({ ...value, inStock: Boolean(checked) })
              }
            />
            In Stock
          </label>
          <label className="flex items-center gap-3 text-sm">
            <Checkbox
              checked={value.onSale ?? false}
              onCheckedChange={(checked) =>
                onChange({ ...value, onSale: Boolean(checked) })
              }
            />
            On Sale
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-xs uppercase tracking-[0.18em]">Material</legend>
        <div className="mt-4 space-y-3">
          {MATERIALS.map((material) => (
            <label key={material} className="flex items-center gap-3 text-sm">
              <Checkbox
                checked={value.materials?.includes(material) ?? false}
                onCheckedChange={() =>
                  onChange({
                    ...value,
                    materials: toggle(value.materials, material),
                  })
                }
              />
              {material}
            </label>
          ))}
        </div>
      </fieldset>

      <ColorAndSizeFilters value={value} onChange={onChange} toggle={toggle} />
    </div>
  );
}

function ColorAndSizeFilters({
  value,
  onChange,
  toggle,
}: {
  value: ShopFilterState;
  onChange: (next: ShopFilterState) => void;
  toggle: (list: string[] | undefined, item: string) => string[];
}) {
  const colors = [
    "Black",
    "Maroon",
    "Beige",
    "Ivory",
    "Olive",
    "Blue",
    "Cream",
    "Gold",
  ];
  const sizes = ["S", "M", "L", "XL", "Single", "Double", "King", "5-Seater", "7-Seater"];

  return (
    <>
      <fieldset>
        <legend className="text-xs uppercase tracking-[0.18em]">Color</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() =>
                onChange({ ...value, colors: toggle(value.colors, color) })
              }
              className={`rounded-md border px-3 py-1.5 text-xs ${
                value.colors?.includes(color)
                  ? "border-black bg-black text-white"
                  : "border-border"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-xs uppercase tracking-[0.18em]">Size</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() =>
                onChange({ ...value, sizes: toggle(value.sizes, size) })
              }
              className={`rounded-md border px-3 py-1.5 text-xs ${
                value.sizes?.includes(size)
                  ? "border-black bg-black text-white"
                  : "border-border"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </fieldset>
    </>
  );
}
