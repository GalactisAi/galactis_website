import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Custom AI Agents Platform for Business Needs | Galactis.ai",
  },
  description:
    "A flexible AI agents platform that helps companies design and deploy agents tailored to their unique needs, workflows, and business objectives.",
  alternates: {
    canonical: "https://galactis.ai/products/ai-agents",
  },
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
