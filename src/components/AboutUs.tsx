"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, ShieldCheck } from "lucide-react";

const stats = [
    { label: "US Location", value: "Idaho", sub: "9169 W State St #2926, Garden City" },
    { label: "Company Type", value: "Agency", sub: "Custom Software & Marketing" },
    { label: "Operations", value: "24/7", sub: "Round-the-clock global support" },
    { label: "Reach", value: "Global", sub: "Serving clients worldwide" },
];

const pillars = [
    {
        icon: <ShieldCheck className="w-7 h-7 text-brand-primary" />,
        title: "24/7 Global Operations",
        description:
            "Our cross-functional teams operate around the clock, guaranteeing seamless support, communication, and project continuity across time zones.",
    },
    {
        icon: <Globe2 className="w-7 h-7 text-brand-primary" />,
        title: "Global Reach",
        description:
            "Our custom software systems and digital marketing engines scale businesses worldwide, from high-growth startups to established enterprises.",
    },
];

export default function AboutUs() {
    return (
        <section id="about" className="relative py-28 px-6 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/8 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-6"
                    >
                        <Building2 size={14} />
                        About Us
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
                    >
                        Who We <span className="text-brand-primary">Are</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-slate-300 text-lg max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        <strong className="text-white">Web Axis Solutions</strong> is a custom software development, digital marketing, and business process automation agency. Headquartered in Idaho, USA, we engineer world-class software, supercharge digital marketing campaigns, and design efficient automations — connecting people and powering solutions globally.
                    </motion.p>
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm hover:border-brand-primary/40 transition-colors"
                        >
                            <span className="text-3xl md:text-4xl font-black text-brand-primary mb-1">
                                {s.value}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                                {s.label}
                            </span>
                            <span className="text-xs text-slate-400 font-medium leading-snug">{s.sub}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Pillars grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-brand-primary/50 backdrop-blur-xl transition-all hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {p.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white mb-2 tracking-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
