import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Jost,
  Cinzel,
} from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spices of Kannur — Heritage Spices from Kannur, Kerala",
    template: "%s | Spices of Kannur",
  },
  description:
    "Authentic Malabar spice blends crafted in Kannur, Kerala. Stone-ground, no preservatives, no compromise. Experience the soul of Thalassery biriyani.",
  keywords: [
    "Kannur Masala",
    "Malabar Spices",
    "Thalassery Biriyani Masala",
    "Heritage Spices",
    "Kerala Spices",
    "Kalyana Masala",
  ],
  authors: [{ name: "Spices of Kannur" }],
  creator: "Spices of Kannur",
  publisher: "Spices of Kannur",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://seventh-lounge.vercel.app",
    siteName: "Spices of Kannur",
    title: "Spices of Kannur — Heritage Spices from Kannur, Kerala",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${jost.variable} ${cinzel.variable}`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <CartProvider>
          <SmoothScroll>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
