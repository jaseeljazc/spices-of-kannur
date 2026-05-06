import type { Metadata } from "next";
import { CheckoutPage } from "@/components/pages/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Chef Shameem order.",
};

export default function Checkout() {
  return <CheckoutPage />;
}
