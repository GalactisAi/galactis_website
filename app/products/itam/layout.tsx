import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Top IT Asset Management Software (ITAM) - Galactis",
  },
  description:
    "IT asset management software with predictive AI that gives complete visibility into software, hardware, and SaaS. Scalable ITAM software for modern IT teams.",
};

export default function ITAMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
