import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/data/images";

export function HomeFeature() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
      <Image
        src={IMAGES.homeFeature}
        alt="Styled bedroom with premium bedsheets"
        fill
        className="object-cover opacity-50"
        sizes="100vw"
      />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Home</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl">
            Elevate Your Home
          </h2>
          <p className="mt-4 text-sm text-white/80">
            Bedsheets, sofa covers, chadars, and fan covers chosen to make rooms
            feel finished — not over-decorated.
          </p>
          <Button asChild variant="inverse" className="mt-8">
            <Link href="/collections/home">Explore Home Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
