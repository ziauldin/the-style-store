import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore fashion and home collections from The Style Store.",
};

export default function CollectionsPage() {
  return (
    <Container className="py-12">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">Collections</p>
      <h1 className="font-display mt-2 text-4xl">Two worlds, one boutique</h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Link href="/collections/fashion" className="group relative min-h-[420px] overflow-hidden">
          <Image
            src={IMAGES.fashionLifestyle}
            alt="Fashion collection"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end p-8 text-white">
            <div>
              <h2 className="font-display text-4xl">Fashion</h2>
              <p className="mt-2 text-sm text-white/80">Dresses, shawls & chadars</p>
            </div>
          </div>
        </Link>
        <Link href="/collections/home" className="group relative min-h-[420px] overflow-hidden">
          <Image
            src={IMAGES.homeLifestyle}
            alt="Home collection"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end p-8 text-white">
            <div>
              <h2 className="font-display text-4xl">Home</h2>
              <p className="mt-2 text-sm text-white/80">Bedsheets, sofa covers, fan covers & chadars</p>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
}
