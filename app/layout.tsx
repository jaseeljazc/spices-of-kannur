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
    default: "Chef Shameem — Heritage Spices from Kannur, Kerala",
    template: "%s | Chef Shameem",
  },
  description:
    "Authentic Malabar spice blends crafted by Chef Shameem. Stone-ground in Kannur, Kerala. No preservatives, no compromise. Experience the soul of Thalassery biriyani.",
  keywords: [
    "Biriyani Masala",
    "Kannur spices",
    "Malabar masala",
    "Thalassery biriyani",
    "Kerala spices",
    "Chef Shameem",
    "Matghoot",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Chef Shameem",
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
