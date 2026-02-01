import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ElevenLabsAgent from "@/components/ElevenLabsAgent";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://galactis.ai"),
  title: {
    default: "Galactis.ai | Enterprise ITAM, Network Monitoring & AI Agents",
    template: "%s | Galactis.ai",
  },
  description:
    "Transform operations with AI-powered IT Asset Management, Network Intelligence & Autonomous Agents. Trusted by regulated enterprises worldwide.",
  keywords: [
    "Galactis",
    "IT Asset Management",
    "Network Monitoring",
    "AI Agents",
    "Enterprise Automation",
    "FinOps",
    "NOC automation",
    "B2B SaaS",
  ],
  applicationName: "Galactis.ai",
  authors: [{ name: "Galactis.ai" }],
  publisher: "Galactis.ai",
  category: "technology",
  alternates: {
    canonical: "https://galactis.ai",
    languages: {
      "en-US": "https://galactis.ai",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://galactis.ai",
    siteName: "Galactis.ai",
    title: "Galactis.ai | Enterprise ITAM, Network Monitoring & AI Agents",
    description:
      "Single operating system for IT Asset Management, Network Intelligence, and AI Agents. Built for financial services, telecom, healthcare, and public sector leaders.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galactis.ai platform overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@galactis_ai",
    creator: "@galactis_ai",
  },
  other: {
    "google-site-verification": "mf_OyAh7D6uZ_ST_PUa4QuagC0KSbc-1nB41TKyQctg",
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="mf_OyAh7D6uZ_ST_PUa4QuagC0KSbc-1nB41TKyQctg"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBJFZBMM');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBJFZBMM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
        <ElevenLabsAgent />
      </body>
    </html>
  );
}
