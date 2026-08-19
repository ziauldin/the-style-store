import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

export function ProductRail({
  eyebrow,
  title,
  description,
  href,
  products,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href: string;
  products: Product[];
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <Link
            href={href}
            className="text-xs uppercase tracking-[0.18em] text-gold"
          >
            View all
          </Link>
        </div>
        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
