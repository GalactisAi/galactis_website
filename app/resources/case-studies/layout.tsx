import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Case Studies - Galactis",
  },
  description:
    "Explore how Galactis transforms technology operations for global enterprises. Read case studies from ICICI Bank, Airtel, Corpay, and more.",
  alternates: {
    canonical: "https://www.galactis.ai/resources/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

