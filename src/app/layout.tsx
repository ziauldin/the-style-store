import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "@/context/providers";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The Style Store | Handmade Fashion & Home Collection",
    template: "%s | The Style Store",
  },
  description: SITE.description,
  openGraph: {
    title: "The Style Store | Handmade Fashion & Home Collection",
    description: SITE.description,
    siteName: SITE.name,
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
