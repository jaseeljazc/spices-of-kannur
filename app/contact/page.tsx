import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Chef Shameem. Wholesale enquiries, feedback, or just say hello.",
};

export default function Contact() {
  return <ContactPage />;
}
