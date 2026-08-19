import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/data/images";

export function FashionFeature() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
      <Image
        src={IMAGES.fashionFeature}
        alt="Editorial fashion photography"
        fill
        className="object-cover object-top opacity-50"
        sizes="100vw"
      />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center justify-end px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-lg text-right">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Fashion</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl">
            Wear Your Style
          </h2>
          <p className="mt-4 text-sm text-white/80">
            Handmade dresses, warm shawls, and chadars for a wardrobe that feels
            personal, modest, and quietly luxurious.
          </p>
          <Button asChild variant="inverse" className="mt-8">
            <Link href="/collections/fashion">Explore Fashion</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
