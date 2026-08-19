import type { Collection } from "./product";

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  collection: Collection | "both";
  image: string;
  bannerImage: string;
};
