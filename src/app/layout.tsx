import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  organizationSchema,
  websiteSchema,
  servicesListSchema,
  softwareApplicationSchema,
} from "@/lib/schema";

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
  title: {
    default: "Web Axis Solutions | Custom Software, Digital Marketing & Automation",
    template: "%s | Web Axis Solutions",
  },
  description:
    "Web Axis Solutions builds custom software, runs high-performance digital marketing, and delivers business process automation for agencies and enterprises across the US, UK, and globally.",
  keywords: [
    // Brand
    "Web Axis Solutions",
    "Web Axis Solutions Pakistan",
    // Core services
    "Custom Software Development",
    "Digital Marketing Agency",
    "Business Process Automation",
    "SaaS Development",
    "Mobile App Development",
    "Web App Development",
    "WordPress Development",
    "Rapid MVP Development",
    // GEO long-tail (how people ask AI assistants)
    "AI automation for agencies",
    "software development company Pakistan",
    "digital marketing agency for insurance",
    "lead generation agency",
    "insurance marketing automation",
    "custom software agency Rawalpindi",
    "Idaho software development company",
    "US custom software agency",
    "n8n automation agency",
    "GoHighLevel integration",
    "HubSpot integration agency",
  ],
  alternates: {
    canonical: "https://webaxissolutions.com",
  },
  authors: [{ name: "Web Axis Solutions", url: "https://webaxissolutions.com" }],
  creator: "Web Axis Solutions",
  publisher: "Web Axis Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webaxissolutions.com",
    title: "Web Axis Solutions | Custom Software, Digital Marketing & Automation",
    description:
      "We build custom software, run high-performance digital marketing campaigns, and deliver business process automation for agencies and enterprises globally.",
    siteName: "Web Axis Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Web Axis Solutions — Custom Software & Digital Marketing",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Axis Solutions | Custom Software, Digital Marketing & Automation",
    description:
      "Custom software, digital marketing, and business process automation for agencies and enterprises.",
    images: ["/logo.png"],
    creator: "@webaxis_solutions",
  },
  verification: {
    // Add your Google Search Console verification token here when available
    // google: "your-verification-token",
  },
  category: "Technology",
};

// ─── JSON-LD Schema Stack ────────────────────────────────────────────────────
const schemas = [
  organizationSchema(),
  websiteSchema(),
  softwareApplicationSchema(),
  ...servicesListSchema(),
];

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
        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2406064783251190');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2406064783251190&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* CallHippo Web Call Widget */}
        <Script
          id="callhippo-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var e=document.createElement("div");
              e.id="callhippo-widget-container",document.getElementsByTagName("body")[0].appendChild(e),
              window.USERID="6a79ea8fa168c12f19aa682b",document.getElementsByTagName("body")[0].appendChild(e),
              window.NUMBERID="6a8f0069f36c5f12729556e1",function(){var e=document.createElement("script");
              e.type="text/javascript",e.async=!0,
              e.src="https://d1x9dsge91xf6g.cloudfront.net/callhippo/files/ch-webcall.min.js";
              var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}();
            `,
          }}
        />

        {/* JSON-LD Schema Stack */}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {children}
        <Analytics />
      </body>
    </html>
  );
}
