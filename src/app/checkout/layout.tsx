import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your The Style Store order.",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-ivory">
      <header className="border-b border-border bg-ivory">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo size={48} />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Secure Checkout
          </p>
          <Link href="/cart" className="text-xs uppercase tracking-[0.16em]">
            Back to bag
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
