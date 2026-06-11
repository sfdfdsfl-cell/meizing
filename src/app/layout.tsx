import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://brodband.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brodband — Hyper-fast Fiber Internet up to 1200 Mbps",
    template: "%s | Brodband",
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
  authors: [{ name: "Brodband" }],
  creator: "Brodband",
  publisher: "Brodband",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Brodband — Hyper-fast Fiber Internet up to 1200 Mbps",
    description:
      "100% pure fiber-optic internet with speeds up to 1200 Mbps. No contracts, no data caps. Now available in your area.",
    siteName: "Brodband",
    images: [
      {
        url: "/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Brodband hyper-fast fiber internet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brodband — Hyper-fast Fiber Internet up to 1200 Mbps",
    description:
      "100% pure fiber-optic internet with speeds up to 1200 Mbps. No contracts, no data caps.",
    images: ["/hero_bg.png"],
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
      </body>
    </html>
  );
}
