import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsappWidget from "@/components/WhatsappWidget";
import { SITE_URL } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mezing Broadband – Hyper-Fast Fiber Internet & WiFi in Sagar",
    template: "%s | Mezing Broadband",
  },
  description:
    "Experience 100% pure fiber-optic internet with speeds up to 1200 Mbps. No contracts, no data caps, and 1.2 Gbps symmetrical speeds for ultimate performance. Now available in your area.",
  keywords: [
    "fiber internet",
    "broadband provider",
    "fiber optic internet",
    "1200 Mbps internet",
    "symmetrical internet",
    "no contract internet",
    "high speed internet",
    "gigabit internet",
  ],
  authors: [{ name: "Mezing Broadband" }],
  creator: "Mezing Broadband",
  publisher: "Mezing Broadband",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Mezing Broadband — Hyper-fast Fiber Internet up to 1200 Mbps",
    description:
      "100% pure fiber-optic internet with speeds up to 1200 Mbps. No contracts, no data caps. Now available in your area.",
    siteName: "Mezing Broadband",
    images: [
      {
        url: "/plans_hero.png",
        width: 1440,
        height: 662,
        alt: "Mezing Broadband hyper-fast fiber internet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mezing Broadband — Hyper-fast Fiber Internet up to 1200 Mbps",
    description:
      "100% pure fiber-optic internet with speeds up to 1200 Mbps. No contracts, no data caps.",
    images: ["/plans_hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className={`${spaceGrotesk.className} min-h-full flex flex-col`}>
        {children}
        <WhatsappWidget />
      </body>
    </html>
  );
}
