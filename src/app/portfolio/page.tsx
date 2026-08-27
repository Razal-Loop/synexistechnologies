import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PortfolioClient from "./PortfolioClient";
import { projects } from "@/lib/projects";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Portfolio — Software & Marketing Case Studies",
  description:
    "Explore Web Axis Solutions' portfolio of custom software products, e-commerce platforms, SaaS applications, and digital marketing campaigns that have generated millions in client revenue.",
  alternates: {
    canonical: "https://webaxissolutions.com/portfolio",
  },
  openGraph: {
    title: "Portfolio — Software & Marketing Case Studies | Web Axis Solutions",
    description:
      "Custom software, SaaS platforms, e-commerce solutions, and digital marketing campaigns built by Web Axis Solutions.",
    url: "https://webaxissolutions.com/portfolio",
    images: [{ url: "/portfolio-poster.png", width: 1200, height: 630 }],
  },
};

const PAGE_SCHEMAS = [
  breadcrumbSchema([
    { name: "Home", url: "https://webaxissolutions.com" },
    { name: "Portfolio", url: "https://webaxissolutions.com/portfolio" },
  ]),
  itemListSchema(
    projects.map((p) => ({
      name: p.title,
      url: p.link !== "#" ? p.link : `https://webaxissolutions.com/portfolio`,
      description: p.description,
      image: p.image.startsWith("http")
        ? p.image
        : `https://webaxissolutions.com${p.image}`,
    }))
  ),
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* JSON-LD schemas */}
      {PAGE_SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/portfolio-poster.png"
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
          aria-hidden="true"
        >
          <source src="/mixkit-stars-in-space-background-1610-4k.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
            ]}
            className="mb-8"
          />
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Our <span className="text-brand-primary">Work</span>
            </h1>
            <p className="text-slate-100 text-lg max-w-2xl mx-auto font-medium">
              A showcase of the engineering and marketing systems we&apos;ve
              built to scale hundreds of businesses globally.
            </p>
          </div>
        </div>
      </section>

      <PortfolioClient />

      <Footer />
    </main>
  );
}
