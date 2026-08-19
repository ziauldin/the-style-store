import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-black px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
