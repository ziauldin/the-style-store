import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import { Container } from "@/components/ui/container";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const count = getProductsByCategory(slug).length;

  return (
    <>
      <PageHero
        eyebrow="Category"
        title={category.name}
        description={`${category.description} ${count} pieces currently in the collection.`}
        image={category.bannerImage}
      />
      <Container className="py-12">
        <ShopCatalog initialCategory={slug} heading={category.name} />
      </Container>
    </>
  );
}
