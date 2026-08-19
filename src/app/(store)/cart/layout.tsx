import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review the pieces in your shopping bag.",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
