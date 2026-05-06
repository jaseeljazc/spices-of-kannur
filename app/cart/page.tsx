import type { Metadata } from "next";
import { CartPage } from "@/components/pages/CartPage";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your Chef Shameem order before checkout.",
};

export default function Cart() {
  return <CartPage />;
}
