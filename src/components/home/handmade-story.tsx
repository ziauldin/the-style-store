import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/data/images";

export function HandmadeStory() {
  return (
    <section className="bg-black py-20 text-white">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src={IMAGES.handmadeStory}
            alt="Handmade embroidered fashion piece"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-gold">
            Our Craft
          </p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl">
            Handmade With Care
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            Every piece is selected or crafted with attention to detail, comfort,
            quality, and timeless style. We look for finishing you can feel at
            the seam, fabrics that sit well on the body or the bed, and designs
            that still look considered after many washes.
          </p>
          <Button asChild variant="gold" className="mt-8">
            <Link href="/about">Discover Our Story</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
