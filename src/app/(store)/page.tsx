import { Benefits } from "@/components/home/benefits";
import { CategoryGrid } from "@/components/home/category-grid";
import { FashionFeature } from "@/components/home/fashion-feature";
import { HandmadeStory } from "@/components/home/handmade-story";
import { HeroSection } from "@/components/home/hero-section";
import { HomeFeature } from "@/components/home/home-feature";
import { InstagramGrid } from "@/components/home/instagram-grid";
import { LifestyleSection } from "@/components/home/lifestyle-section";
import { ProductRail } from "@/components/home/product-rail";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhatsAppCta } from "@/components/home/whatsapp-cta";
import { getBestSellers, getNewArrivals } from "@/lib/catalog";

export default function HomePage() {
  const newArrivals = getNewArrivals(8);
  const bestSellers = getBestSellers(8);

  return (
    <>
      <HeroSection />
      <LifestyleSection />
      <CategoryGrid />
      <ProductRail
        eyebrow="Just In"
        title="New Arrivals"
        description="Fresh pieces across fashion and home, chosen for this season."
        href="/shop?sort=newest"
        products={newArrivals}
      />
      <HandmadeStory />
      <div className="bg-muted">
        <ProductRail
          eyebrow="Most Loved"
          title="Best Sellers"
          description="The pieces customers return to — and gift most often."
          href="/shop?sort=best-selling"
          products={bestSellers}
        />
      </div>
      <HomeFeature />
      <FashionFeature />
      <Benefits />
      <TestimonialsSection />
      <InstagramGrid />
      <WhatsAppCta />
    </>
  );
}
