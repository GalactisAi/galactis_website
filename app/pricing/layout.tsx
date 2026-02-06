import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Galactis Pricing | Network Monitoring & ITAM Software Plans",
  },
  description:
    "Choose the right plan for network monitoring software and ITAM software. Flexible pricing for organizations of all sizes with features that scale with your needs.",
  alternates: {
    canonical: "https://www.galactis.ai/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
