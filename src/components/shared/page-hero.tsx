import Image from "next/image";
import { Container } from "@/components/ui/container";

export function PageHero({
  title,
  description,
  image,
  eyebrow,
}: {
  title: string;
  description?: string;
  image?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
      ) : null}
      <Container className="relative py-16 sm:py-24">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        ) : null}
        <h1 className="font-display mt-3 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
