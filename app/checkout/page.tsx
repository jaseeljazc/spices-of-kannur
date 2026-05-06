import type { Metadata } from "next";
import { CheckoutPage } from "@/components/pages/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Spices of Kannur order.",
};

export default function Checkout() {
  return <CheckoutPage />;
}
