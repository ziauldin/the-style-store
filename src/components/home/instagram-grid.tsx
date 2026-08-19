import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { InstagramIcon } from "@/components/shared/social-icons";
import { IMAGES } from "@/data/images";
import { SITE } from "@/lib/constants";

export function InstagramGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Lookbook"
          title="Follow Our Style"
          description="Pieces from our collection, as worn and photographed."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {IMAGES.instagram.map((image, index) => (
            <a
              key={image}
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <Image
                src={image}
                alt={`The Style Store lookbook image ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/35">
                <InstagramIcon className="h-6 w-6 text-white opacity-0 transition group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
