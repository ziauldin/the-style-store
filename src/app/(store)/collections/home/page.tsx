import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Home Collection",
  description: "Bedsheets, sofa covers, fan covers, and chadars for a finished home.",
};

export default function HomeCollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Home"
        title="Elevate Your Home"
        description="Bedsheets, sofa covers, chadars, and fan covers for rooms that feel quietly complete."
        image={IMAGES.homeFeature}
      />
      <Container className="py-12">
        <ShopCatalog initialCollection="home" heading="Home" />
      </Container>
    </>
  );
}
