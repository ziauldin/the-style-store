import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product/product-details";
import { ProductGrid } from "@/components/product/product-grid";
import { Container } from "@/components/ui/container";
import { getMockProducts, getProductBySlug, getRelatedProducts } from "@/lib/catalog";

export function generateStaticParams() {
  return getMockProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription ?? product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <Container className="py-10 sm:py-14">
      <ProductDetails product={product} />
      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="font-display text-3xl">You May Also Like</h2>
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </Container>
  );
}
