import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Who We Are – Galactis.ai",
  },
  description:
    "Learn about Galactis.ai, our mission, values, and the team building modern software to help organizations manage and operate IT systems with confidence.",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
