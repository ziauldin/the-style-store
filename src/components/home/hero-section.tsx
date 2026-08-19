import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/data/images";

export function HeroSection() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-black text-white">
      <Image
        src={IMAGES.hero}
        alt="Editorial fashion portrait for The Style Store"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
      <Container className="relative flex min-h-[78vh] items-end pb-16 pt-28 sm:items-center sm:pb-0">
        <div className="max-w-xl animate-rise-in">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            The Style Store
          </p>
          <h1 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
            Elegance for You.
            <br />
            Beauty for Your Home.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Discover handmade dresses, elegant chadars, premium home textiles,
            and warm shawls crafted with care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="inverse">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="gold">
              <Link href="/collections">Explore Collections</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
