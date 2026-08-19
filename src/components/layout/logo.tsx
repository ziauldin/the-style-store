import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  size = 52,
  showWordmark = true,
  inverse = false,
  className,
}: {
  size?: number;
  showWordmark?: boolean;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex min-w-0 items-center gap-3", className)}
      aria-label="The Style Store home"
    >
      <Image
        src="/images/logo.png"
        alt="The Style Store"
        width={size}
        height={size}
        className="h-auto w-auto shrink-0 rounded-full object-contain"
        style={{ width: size, height: size }}
        priority
      />
      {showWordmark ? (
        <span className="hidden min-[400px]:flex min-w-0 flex-col">
          <span
            className={cn(
              "font-display text-sm leading-none tracking-[0.1em] sm:text-lg",
              inverse ? "text-white" : "text-black",
            )}
          >
            THE STYLE STORE
          </span>
          <span
            className={cn(
              "mt-1 hidden text-[10px] uppercase tracking-[0.22em] sm:block",
              inverse ? "text-white/70" : "text-muted-foreground",
            )}
          >
            Elevate Your Style
          </span>
        </span>
      ) : null}
    </Link>
  );
}
