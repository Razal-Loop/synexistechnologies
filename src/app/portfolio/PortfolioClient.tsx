"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const projects = [
  {
    title: "Synexis Digital Tools",
    category: "Software",
    description:
      "High-performance, privacy-first developer toolkit ecosystem. 100% client-side browser tools for JSON formatting, code beautification, security utilities, encoding, and more.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    tags: ["Developer Tools", "Client-Side", "Privacy-First"],
    stats: "50+ Free Tools",
    link: "https://www.synexisdigital.com/",
  },
  {
    title: "ComplDoc",
    category: "Software",
    description:
      "Expert technical compliance and regulatory documentation platform for the EU AI Act, government tenders, and aviation operating manuals.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
    tags: ["Regulatory", "Compliance", "Documentation"],
    stats: "Audit-Ready Expositions",
    link: "https://www.compldoc.com/",
  },
  {
    title: "MyMeds Pharmacy",
    category: "Software",
    description:
      "A full-scale pharmaceutical e-commerce and telehealth platform. Engineered for secure prescription handling, real-time inventory, and seamless patient onboarding.",
    image: "/portfolio_pharmacy_mockup.png",
    tags: ["Web App", "E-commerce", "HIPAA Logic"],
    stats: "Enterprise Telehealth Launch",
    link: "https://mymedspharmacyinc.com",
  },
  {
    title: "Speckles Limited",
    category: "Software",
    description:
      "A premium corporate website for a UK care home group. Designed to convey trust, heritage, and excellence in residential care services.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    tags: ["Web Design", "UI/UX", "Corporate"],
    stats: "UK Market Expansion",
    link: "https://speckleslimited.co.uk",
  },
  {
    title: "Speckles CareHomes",
    category: "Software",
    description:
      "An AI-integrated enterprise web application for managing patient trajectories and institutional intelligence in the care sector.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000",
    tags: ["AI Integration", "SaaS", "Data Intelligence"],
    stats: "AI-Driven Efficiency",
    link: "https://specklescarehomes.co.uk",
  },
  {
    title: "Armour Apparels",
    category: "Digital Marketing",
    description:
      "A high-performance e-commerce WordPress website for a premium apparel brand. Focused on conversion-centric design and mobile-first experience.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2000",
    tags: ["WordPress", "E-commerce", "Branding"],
    stats: "Conversion Optimized",
    link: "https://armourapparels.com",
  },
  {
    title: "XtraProfit",
    category: "Digital Marketing",
    description:
      "A high-conversion financial growth platform. Built with advanced funnel logic to capture high-net-worth investors and trading prospects.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000",
    tags: ["FinTech", "Lead Gen", "Marketing"],
    stats: "Finance Vertical Scale",
    link: "https://xtraprofit.com",
  },
  {
    title: "Global Reach Ads",
    category: "Digital Marketing",
    description:
      "Scale-focused marketing funnel for a major insurance aggregator. Optimized for low CPL and high-intent lead generation.",
    image: "/portfolio_marketing_mockup.png",
    tags: ["Meta Ads", "Google Ads", "Conversion Optimization"],
    stats: "$2.4M Generated Revenue",
    link: "#",
  },
  {
    title: "ZAAR",
    category: "Software",
    description:
      "Bringing Greenery to Every Home in Pakistan. A sustainable plant e-commerce platform promoting eco-friendly living — from sourcing to doorstep delivery — with integrated plant care education.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=2000",
    tags: ["E-commerce", "Sustainability", "Pakistan"],
    stats: "Nationwide Green Launch",
    link: "https://zaarpk.com",
  },
];

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Filter */}
      <div className="flex justify-center gap-4 mb-20 px-6 relative z-10">
        {["All", "Software", "Digital Marketing"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${
              filter === cat
                ? "bg-brand-primary text-white border-brand-primary shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                : "bg-slate-950/80 text-white hover:text-brand-primary border-slate-700/50 backdrop-blur-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="pb-32 px-6" aria-label="Portfolio projects">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="name" content={project.title} />
              <meta itemProp="description" content={project.description} />
              {project.link !== "#" && (
                <meta itemProp="url" content={project.link} />
              )}

              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 backdrop-blur-md">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} project by Web Axis Solutions`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                  loading={idx < 2 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-lg bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-black uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-lg">
                      <Zap className="w-3 h-3" aria-hidden="true" />
                      {project.stats}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 italic tracking-tighter uppercase">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-slate-500 font-bold uppercase tracking-widest border border-slate-800 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} website`}
                        className="text-brand-primary hover:text-white flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors group/link"
                      >
                        Visit Site
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
