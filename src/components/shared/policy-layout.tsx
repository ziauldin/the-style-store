import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export function PolicyLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-3xl py-16">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">Customer Care</p>
      <h1 className="font-display mt-3 text-4xl">{title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">{description}</p>
      <div className="prose-policy mt-10 space-y-6 text-sm leading-relaxed text-charcoal">
        {children}
      </div>
    </Container>
  );
}

export const policyMetadata = (title: string, description: string): Metadata => ({
  title,
  description,
});
