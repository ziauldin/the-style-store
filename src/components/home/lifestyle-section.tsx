import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { IMAGES } from "@/data/images";

const cards = [
  {
    href: "/collections/fashion",
    title: "Women’s Style",
    text: "Handmade Dresses, Shawls & Elegant Chadars",
    cta: "Explore Fashion",
    image: IMAGES.fashionLifestyle,
  },
  {
    href: "/collections/home",
    title: "Home Collection",
    text: "Bedsheets, Sofa Covers, Chadars & Handmade Home Essentials",
    cta: "Shop Home",
    image: IMAGES.homeLifestyle,
  },
];

export function LifestyleSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Shop by Lifestyle"
          title="Fashion for you. Softness for home."
          description="Two collections, one boutique point of view."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="group relative min-h-[420px] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="font-display text-4xl">{card.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-white/80">{card.text}</p>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-gold">
                  {card.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
