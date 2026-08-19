"use client";

import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center border border-border">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-8 text-center text-sm">{value}</span>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
