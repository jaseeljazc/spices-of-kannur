import type { Metadata } from "next";
import { LandingPage } from "@/components/pages/LandingPage";

export const metadata: Metadata = {
  title: "Spices of Kannur — Heritage Spices from Kannur, Kerala",
  description: "Authentic Malabar spice blends. Stone-ground in Kannur, no preservatives. Kannur Kalyana Biriyani Masala & Matghoot Masala.",
};

export default function Home() {
  return <LandingPage />;
}
