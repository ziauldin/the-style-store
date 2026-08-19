import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Style Store about fabric, sizing, or orders.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
