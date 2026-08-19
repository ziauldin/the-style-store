import { products } from "@/data/products";
import { categories } from "@/data/categories";
import {
  FASHION_CATEGORY_SLUGS,
  HOME_CATEGORY_SLUGS,
} from "@/lib/constants";
import type {
  Collection,
  Product,
  ProductFilters,
  ProductSort,
} from "@/types/product";

export function getMockProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export function getCollectionCategorySlugs(collection: Collection): string[] {
  return collection === "fashion"
    ? [...FASHION_CATEGORY_SLUGS]
    : [...HOME_CATEGORY_SLUGS];
}

export function getProductsByCollection(collection: Collection) {
  const slugs = getCollectionCategorySlugs(collection);
  return products.filter((product) => slugs.includes(product.category));
}

export function getFeaturedProducts(limit = 8) {
  return products.filter((product) => product.isFeatured).slice(0, limit);
}

export function getNewArrivals(limit = 8) {
  return products.filter((product) => product.isNew).slice(0, limit);
}

export function getBestSellers(limit = 8) {
  return products
    .filter((product) => product.isBestSeller)
    .slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, limit);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return products.filter((product) => {
    const category = categories.find((item) => item.slug === product.category);
    return (
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.material?.toLowerCase().includes(q) ||
      category?.name.toLowerCase().includes(q) ||
      product.shortDescription?.toLowerCase().includes(q)
    );
  });
}

export function queryProducts(
  filters: ProductFilters = {},
  sort: ProductSort = "featured",
) {
  let result = [...products];

  if (filters.collection) {
    result = getProductsByCollection(filters.collection);
  }

  if (filters.categories?.length) {
    result = result.filter((product) =>
      filters.categories?.includes(product.category),
    );
  }

  if (typeof filters.priceMin === "number") {
    result = result.filter((product) => product.price >= filters.priceMin!);
  }

  if (typeof filters.priceMax === "number") {
    result = result.filter((product) => product.price <= filters.priceMax!);
  }

  if (filters.inStock) {
    result = result.filter((product) => product.stock > 0);
  }

  if (filters.onSale) {
    result = result.filter(
      (product) =>
        product.compareAtPrice && product.compareAtPrice > product.price,
    );
  }

  if (filters.materials?.length) {
    result = result.filter(
      (product) =>
        product.material && filters.materials?.includes(product.material),
    );
  }

  if (filters.colors?.length) {
    result = result.filter((product) =>
      product.colors?.some((color) => filters.colors?.includes(color)),
    );
  }

  if (filters.sizes?.length) {
    result = result.filter((product) =>
      product.sizes?.some((size) => filters.sizes?.includes(size)),
    );
  }

  if (filters.query?.trim()) {
    const q = filters.query.trim().toLowerCase();
    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(q) ||
        product.material?.toLowerCase().includes(q) ||
        product.category.includes(q),
    );
  }

  switch (sort) {
    case "newest":
      result = result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
      break;
    case "price-asc":
      result = result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result = result.sort((a, b) => b.price - a.price);
      break;
    case "best-selling":
      result = result.sort(
        (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller),
      );
      break;
    default:
      result = result.sort(
        (a, b) => Number(b.isFeatured) - Number(a.isFeatured),
      );
  }

  return result;
}

export function getAvailableColors() {
  return Array.from(
    new Set(products.flatMap((product) => product.colors ?? [])),
  );
}

export function getAvailableSizes() {
  return Array.from(
    new Set(products.flatMap((product) => product.sizes ?? [])),
  );
}
