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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Web Axis Solutions",
  "url": "https://webaxissolutions.com",
  "logo": "https://webaxissolutions.com/logo.png",
  "description": "Custom software development, high-performance Digital Marketing, and high-intent live transfers for agencies and solo agents.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@webaxissolutions.com",
    "contactType": "customer service"
  }
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Web Axis Solutions",
  "url": "https://webaxissolutions.com"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
