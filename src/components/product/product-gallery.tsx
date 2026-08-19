"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-3 lg:grid-cols-[88px_1fr]">
      <div className="hidden flex-col gap-3 lg:flex">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "relative aspect-[3/4] overflow-hidden border",
              active === index ? "border-black" : "border-transparent",
            )}
            aria-label={`View image ${index + 1}`}
          >
            <Image src={image} alt="" fill className="object-cover" sizes="88px" />
          </button>
        ))}
      </div>
      <div className="relative hidden aspect-[3/4] overflow-hidden bg-muted lg:block">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-cover transition duration-300 hover:scale-110"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto no-scrollbar lg:hidden">
        {images.map((image) => (
          <div
            key={image}
            className="relative aspect-[3/4] w-[86%] min-w-[86%] shrink-0 snap-center overflow-hidden bg-muted"
          >
            <Image src={image} alt={name} fill className="object-cover" sizes="86vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
