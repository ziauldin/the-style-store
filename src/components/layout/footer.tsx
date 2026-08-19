import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { NewsletterSection } from "@/components/shared/newsletter-section";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { categories } from "@/data/categories";
import { SITE } from "@/lib/constants";

const careLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/return-policy", label: "Return Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo inverse size={64} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            A premium Pakistani boutique for handmade dresses, chadars, warm
            shawls, and considered home textiles.
          </p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Shop</h3>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="text-sm text-white/75 hover:text-white"
                >
                  {category.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">
            Customer Care
          </h3>
          <ul className="mt-4 space-y-2">
            {careLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">
            Stay in Touch
          </h3>
          <NewsletterSection variant="footer" />
          <div className="mt-6 flex items-center gap-4">
            <a href={SITE.instagram} aria-label="Instagram" className="hover:text-gold">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={SITE.tiktok} aria-label="TikTok" className="text-sm hover:text-gold">
              TikTok
            </a>
            <a href={SITE.facebook} aria-label="Facebook" className="hover:text-gold">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              aria-label="WhatsApp"
              className="text-sm hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs tracking-[0.12em] text-white/50">
        © 2026 The Style Store. All rights reserved.
      </div>
    </footer>
  );
}
