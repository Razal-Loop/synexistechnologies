import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webaxissolutions.com"),
  title: "Web Axis Solutions | Software, Marketing & Live Transfers",
  description: "Custom software development, high-performance Digital Marketing, and high-intent live transfers for agencies and solo agents.",
  keywords: ["Software Development", "Digital Marketing", "Live Transfers", "Insurance Marketing", "Web Axis Solutions", "SaaS Development", "Lead Generation"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webaxissolutions.com",
    title: "Web Axis Solutions | Software, Marketing & Live Transfers",
    description: "Custom software development, high-performance Digital Marketing, and high-intent live transfers for agencies and solo agents.",
    siteName: "Web Axis Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Web Axis Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Axis Solutions | Software, Marketing & Live Transfers",
    description: "Custom software development, high-performance Digital Marketing, and high-intent live transfers for agencies and solo agents.",
    images: ["/logo.png"],
  },
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-primary/30 selection:text-brand-primary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
