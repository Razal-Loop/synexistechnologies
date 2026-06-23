"use client";

import { motion } from "framer-motion";
import { Building2, BadgeCheck, Globe2, ShieldCheck } from "lucide-react";

const stats = [
    { label: "Registered With", value: "SECP", sub: "Securities & Exchange Commission of Pakistan" },
    { label: "Certified By", value: "PSEB", sub: "Pakistan Software Export Board" },
    { label: "Company Type", value: "Pvt. Ltd.", sub: "Private Limited Company" },
    { label: "Operations", value: "Global", sub: "Serving clients worldwide" },
];

const pillars = [
    {
        icon: <Building2 className="w-7 h-7 text-brand-primary" />,
        title: "Incorporated & Compliant",
        description:
            "Web Axis Solutions (Pvt.) Ltd. is a formally incorporated private limited company, fully registered and compliant under Pakistani corporate law.",
    },
    {
        icon: <BadgeCheck className="w-7 h-7 text-brand-primary" />,
        title: "SECP Registered",
        description:
            "Registered with the Securities & Exchange Commission of Pakistan (SECP), ensuring full legal standing and corporate transparency.",
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-brand-primary" />,
        title: "PSEB Certified",
        description:
            "Recognized by the Pakistan Software Export Board (PSEB), affirming our position as a certified technology and software services company.",
    },
    {
        icon: <Globe2 className="w-7 h-7 text-brand-primary" />,
        title: "Global Reach",
        description:
            "Though headquartered in Pakistan, our solutions power businesses across North America, Europe, and the Middle East — built to scale.",
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
                        Who We{" "}
                        <span className="text-brand-primary">Are</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-slate-300 text-lg max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        <strong className="text-white">Web Axis Solutions (Pvt.) Ltd.</strong> is a private limited
                        company registered with the{" "}
                        <span className="text-brand-primary font-bold">
                            Securities &amp; Exchange Commission of Pakistan (SECP)
                        </span>{" "}
                        and certified by the{" "}
                        <span className="text-brand-primary font-bold">
                            Pakistan Software Export Board (PSEB)
                        </span>
                        . We engineer world-class software, supercharge digital marketing, and power high-intent
                        live transfer ecosystems — connecting people and powering solutions globally.
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
