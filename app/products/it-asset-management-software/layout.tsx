import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Top IT Asset Management Software (ITAM) - Galactis.ai",
  },
  description:
    "IT asset management software with predictive AI that gives complete visibility into software, hardware, and SaaS. Scalable ITAM software for modern IT teams.",
  alternates: {
    canonical: "https://www.galactis.ai/products/it-asset-management-software",
  },
};

export default function ITAssetManagementSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

