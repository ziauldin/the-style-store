import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/data/images";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind The Style Store — handmade fashion and home textiles.",
};

const values = [
  { title: "Quality", text: "We start with fabric that feels right in the hand, then look at stitch, lining, and how a piece will live after washing." },
  { title: "Craftsmanship", text: "Embroidery, finishing, and handmade details are treated as the product — not decoration added at the end." },
  { title: "Comfort", text: "A dress should move. A bedsheet should rest well. Beauty that cannot be lived in is not the point." },
  { title: "Timeless style", text: "We prefer pieces you will still want next winter: considered colour, modest silhouettes, and calm home patterns." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-black text-white">
        <Image src={IMAGES.aboutHero} alt="" fill className="object-cover opacity-45" sizes="100vw" />
        <Container className="relative py-24">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Our Story</p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl sm:text-6xl">
            Crafted for Style. Chosen for Home.
          </h1>
        </Container>
      </section>
      <Container className="grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">A boutique for both wardrobes and rooms</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The Style Store began from a simple observation: many of us dress with care, then live
            among textiles that feel unfinished. We built a small collection that holds both —
            handmade dresses, chadars, and shawls beside bedsheets, sofa covers, and fan covers.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We work with makers and suppliers who take finishing seriously. Some pieces are
            fully handmade. Others are carefully selected for fabric, colour, and how they sit
            in a Pakistani home. The standard is the same: it should feel considered when you
            open the parcel.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="border-t border-gold/40 pt-4">
              <h3 className="font-display text-2xl">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </Container>
      <section className="bg-black py-16 text-center text-white">
        <h2 className="font-display text-3xl">Come see the collection</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
          Fashion and home, kept in the same quiet language.
        </p>
        <Button asChild variant="inverse" className="mt-8">
          <Link href="/shop">Explore The Collection</Link>
        </Button>
      </section>
    </>
  );
}
