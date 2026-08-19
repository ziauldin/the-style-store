import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="bg-muted py-20">
      <Container>
        <SectionHeading
          eyebrow="Shop by Category"
          title="The collection, piece by piece"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={`group relative overflow-hidden ${
                index === 0 ? "md:col-span-1 min-h-[280px]" : "min-h-[240px]"
              }`}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/40" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-display text-2xl">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
