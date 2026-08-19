import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.24em]",
            inverse ? "text-gold" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display mt-3 text-3xl sm:text-4xl",
          inverse ? "text-white" : "text-black",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed sm:text-base",
            inverse ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
