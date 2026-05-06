import type { Metadata } from "next";
import { StoryPage } from "@/components/pages/StoryPage";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The heritage behind Spices of Kannur's spice blends. A century of Malabar flavour, stone-ground for your table.",
};

export default function Story() {
  return <StoryPage />;
}
