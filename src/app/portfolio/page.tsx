"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const projects = [
    {
        title: "MyMeds Pharmacy",
        category: "Software",
        description: "A full-scale pharmaceutical e-commerce and telehealth platform. Engineered for secure prescription handling, real-time inventory, and seamless patient onboarding.",
        image: "/portfolio_pharmacy_mockup.png",
        tags: ["Web App", "E-commerce", "HIPAA Logic"],
        stats: "Enterprise Telehealth Launch",
        link: "https://mymedspharmacyinc.com"
    },
    {
        title: "Speckles Limited",
        category: "Software",
        description: "A premium corporate website for a UK care home group. Designed to convey trust, heritage, and excellence in residential care services.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
        tags: ["Web Design", "UI/UX", "Corporate"],
        stats: "UK Market Expansion",
        link: "https://speckleslimited.co.uk"
    },
    {
        title: "Speckles CareHomes",
        category: "Software",
        description: "An AI-integrated enterprise web application for managing patient trajectories and institutional intelligence in the care sector.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000",
        tags: ["AI Integration", "SaaS", "Data Intelligence"],
        stats: "AI-Driven Efficiency",
        link: "https://specklescarehomes.co.uk"
    },
    {
        title: "Armour Apparels",
        category: "Digital Marketing",
        description: "A high-performance e-commerce WordPress website for a premium apparel brand. Focused on conversion-centric design and mobile-first experience.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2000",
        tags: ["WordPress", "E-commerce", "Branding"],
        stats: "Conversion Optimized",
        link: "https://armourapparels.com"
    },
    {
        title: "XtraProfit",
        category: "Digital Marketing",
        description: "A high-conversion financial growth platform (xtraprofit.com). Built with advanced funnel logic to capture high-net-worth investors and trading prospects.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000",
        tags: ["FinTech", "Lead Gen", "Marketing"],
        stats: "Finance Vertical Scale",
        link: "https://xtraprofit.com"
    },
    {
        title: "Global Reach Ads",
        category: "Digital Marketing",
        description: "Scale-focused marketing funnel for a major insurance aggregator. Optimized for low CPL and high-intent lead generation.",
        image: "/portfolio_marketing_mockup.png",
        tags: ["Meta Ads", "Google Ads", "Conversion Optimization"],
        stats: "$2.4M Generated Revenue",
        link: "#"
    },
    {
        title: "ZAAR",
        category: "Software",
        description: "Bringing Greenery to Every Home in Pakistan. A sustainable plant e-commerce platform promoting eco-friendly living — from sourcing to doorstep delivery — with integrated plant care education and mindful packaging.",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=2000",
        tags: ["E-commerce", "Sustainability", "Pakistan"],
        stats: "Nationwide Green Launch",
        link: "https://zaarpk.com"
    }
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Video */}
            <div className="fixed inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                >
                    <source src="/mixkit-stars-in-space-background-1610-4k.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
            </div>

            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />

                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                    >
                        Our <span className="text-brand-primary">Work</span>
                    </motion.h1>
                    <p className="text-slate-100 text-lg max-w-2xl mx-auto font-medium">
                        A showcase of the engineering and marketing systems we&apos;ve built to scale hundreds of businesses globally.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <div className="flex justify-center gap-4 mb-20 px-6 relative z-10">
                {["All", "Software", "Digital Marketing"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${filter === cat
                            ? "bg-brand-primary text-white border-brand-primary shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            : "bg-slate-950/80 text-white hover:text-brand-primary border-slate-700/50 backdrop-blur-md"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 backdrop-blur-md">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={idx < 2}
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-3 py-1 rounded-lg bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-[10px] font-black uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-black uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-lg">
                                            <Zap className="w-3 h-3" />
                                            {project.stats}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-2 italic tracking-tighter uppercase">{project.title}</h3>
                                    <p className="text-slate-200 text-sm mb-6 line-clamp-2">{project.description}</p>

                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] text-slate-500 font-bold uppercase tracking-widest border border-slate-800 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-brand-primary hover:text-white flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors group/link"
                                            >
                                                Visit Site
                                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
