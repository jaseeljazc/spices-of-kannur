import type { Metadata } from "next";
import { ProductsPage } from "@/components/pages/ProductsPage";

export const metadata: Metadata = {
  title: "Products",
  description: "Shop Kannur Kalyana Biriyani Masala and Matghoot Masala — heritage spice blends by Chef Shameem.",
};

export default function Products() {
  return <ProductsPage />;
}
