import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us - Galactis",
  },
  description:
    "Reach out to the Galactis team. Contact us for product inquiries, support, partnership opportunities, or to learn more about our solutions and services.",
  alternates: {
    canonical: "https://www.galactis.ai/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
