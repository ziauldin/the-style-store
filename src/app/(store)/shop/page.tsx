import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import type { ProductSort } from "@/types/product";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop handmade dresses, chadars, bedsheets, sofa covers, fan covers, and warm shawls.",
};

const sorts: ProductSort[] = [
  "featured",
  "newest",
  "price-asc",
  "price-desc",
  "best-selling",
];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string }>;
}) {
  const params = await searchParams;
  const sort = sorts.includes(params.sort as ProductSort)
    ? (params.sort as ProductSort)
    : "featured";

  return (
    <Container className="py-12">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">All Pieces</p>
      <h1 className="font-display mt-2 text-4xl">Shop</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Browse the full boutique: fashion for you, textiles for home.
      </p>
      <div className="mt-10">
        <ShopCatalog key={sort} initialSort={sort} />
      </div>
    </Container>
  );
}
