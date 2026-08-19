import type { Category } from "@/types/category";
import { IMAGES } from "./images";

export const categories: Category[] = [
  {
    slug: "dresses",
    name: "Handmade Dresses",
    shortName: "Dresses",
    description:
      "Thoughtfully finished lawn, cotton, and khaddar dresses for everyday elegance and festive gatherings.",
    collection: "fashion",
    image: IMAGES.dresses[0],
    bannerImage: IMAGES.fashionLifestyle,
  },
  {
    slug: "chadars",
    name: "Chadars",
    shortName: "Chadars",
    description:
      "Soft, graceful chadars that move easily from fashion styling to home layering.",
    collection: "both",
    image: IMAGES.chadars[0],
    bannerImage: IMAGES.chadars[1],
  },
  {
    slug: "bedsheets",
    name: "Bedsheets",
    shortName: "Bedsheets",
    description:
      "Premium bedsheet sets in calm florals, ivory tones, and classic patterns for a finished bedroom.",
    collection: "home",
    image: IMAGES.bedsheets[0],
    bannerImage: IMAGES.homeFeature,
  },
  {
    slug: "sofa-covers",
    name: "Sofa Covers",
    shortName: "Sofa Covers",
    description:
      "Tailored sofa covers that refresh your living room with texture, colour, and everyday protection.",
    collection: "home",
    image: IMAGES.sofaCovers[0],
    bannerImage: IMAGES.sofaCovers[3],
  },
  {
    slug: "fan-covers",
    name: "Fan Covers",
    shortName: "Fan Covers",
    description:
      "Decorative embroidered fan covers that add a refined, homemade finish to Pakistani interiors.",
    collection: "home",
    image: IMAGES.fanCovers[0],
    bannerImage: IMAGES.fanCovers[1],
  },
  {
    slug: "warm-shawls",
    name: "Warm Shawls",
    shortName: "Warm Shawls",
    description:
      "Wool and embroidered shawls for winter warmth, modest layering, and evening polish.",
    collection: "fashion",
    image: IMAGES.shawls[0],
    bannerImage: IMAGES.fashionFeature,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getFashionCategories() {
  return categories.filter(
    (category) =>
      category.collection === "fashion" || category.collection === "both",
  );
}

export function getHomeCategories() {
  return categories.filter(
    (category) =>
      category.collection === "home" || category.collection === "both",
  );
}
