import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Pieces you have saved at The Style Store.",
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
