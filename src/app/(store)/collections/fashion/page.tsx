import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Fashion Collection",
  description: "Handmade dresses, warm shawls, and elegant chadars.",
};

export default function FashionCollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Fashion"
        title="Wear Your Style"
        description="Handmade dresses, warm shawls, and chadars selected for drape, comfort, and lasting finish."
        image={IMAGES.fashionFeature}
      />
      <Container className="py-12">
        <ShopCatalog initialCollection="fashion" heading="Fashion" />
      </Container>
    </>
  );
}
