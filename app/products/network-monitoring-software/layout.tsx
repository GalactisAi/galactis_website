import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Top Network Monitoring Software - Galactis.ai",
  },
  description:
    "Network monitoring software for enterprises using predictive AI to monitor performance, detect outages early, and gain real-time visibility across on-prem, cloud, and hybrid networks.",
  alternates: {
    canonical: "https://www.galactis.ai/products/network-monitoring-software",
  },
};

export default function NetworkMonitoringSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

