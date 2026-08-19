"use client";

import { cn } from "@/lib/utils";

export function VariantSelector({
  label,
  options,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  type?: "text" | "color";
}) {
  return (
    <fieldset>
      <legend className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
        {value ? <span className="ml-2 text-black">{value}</span> : null}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "min-h-10 rounded-md border px-3 text-sm transition",
              value === option
                ? "border-black bg-black text-white"
                : "border-border bg-white hover:border-black",
            )}
            aria-pressed={value === option}
          >
            {type === "color" ? (
              <span className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full border border-black/10"
                  style={{ backgroundColor: colorMap[option] ?? "#c4b5a0" }}
                />
                {option}
              </span>
            ) : (
              option
            )}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

const colorMap: Record<string, string> = {
  Black: "#111111",
  Maroon: "#7a1f2b",
  Beige: "#d8c3a5",
  Ivory: "#f3ead8",
  Olive: "#6b7a4a",
  Blue: "#3c5a78",
  Pink: "#d9a3b0",
  Mustard: "#c4a35a",
  White: "#ffffff",
  Cream: "#efe6d2",
  Grey: "#8a8680",
  Taupe: "#b5a394",
  Brown: "#6b4a34",
  Gold: "#c89b3c",
  Green: "#4d6b4a",
  Rose: "#c98990",
};
