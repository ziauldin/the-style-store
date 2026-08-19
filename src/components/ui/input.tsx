import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full rounded-md border border-border bg-white px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold",
        className,
      )}
      {...props}
    />
  );
}
