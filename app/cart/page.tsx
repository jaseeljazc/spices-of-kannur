import type { Metadata } from "next";
import { CartPage } from "@/components/pages/CartPage";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your Spices of Kannur order before checkout.",
};

export default function Cart() {
  return <CartPage />;
}
