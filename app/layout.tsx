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
  metadataBase: new URL("https://www.galactis.ai"),
  title: {
    default: "Galactis | Enterprise ITAM, Network Monitoring & AI Agents",
    template: "%s | Galactis",
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
  applicationName: "Galactis",
  authors: [{ name: "Galactis" }],
  publisher: "Galactis",
  category: "technology",
  alternates: {
    canonical: "https://www.galactis.ai",
    languages: {
      "en-US": "https://www.galactis.ai",
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
    url: "https://www.galactis.ai",
    siteName: "Galactis",
    title: "Galactis | Enterprise ITAM, Network Monitoring & AI Agents",
    description:
      "Single operating system for IT Asset Management, Network Intelligence, and AI Agents. Built for financial services, telecom, healthcare, and public sector leaders.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galactis platform overview",
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
    icon: "/favicon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Galactis",
              url: "https://www.galactis.ai/",
              logo: "https://www.galactis.ai/favicon.png",
              description:
                "Enterprise network monitoring and IT asset management software powered by predictive AI to track assets, monitor performance, reduce risk, and streamline IT operations at scale.",
              brand: {
                "@type": "Brand",
                name: "Galactis",
              },
              foundingDate: "2022",
              founder: {
                "@type": "Person",
                name: "Madhujith Arumugam",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@galactis.ai",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/galactisaitech",
              ],
            }),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LGLZ82Z95H"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LGLZ82Z95H');
            `,
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
