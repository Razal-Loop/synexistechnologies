"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";
import OpenApplyModal from "@/components/OpenApplyModal";

export default function Careers() {
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [isOpenApplyOpen, setIsOpenApplyOpen] = useState(false);

    const positions = [
        {
            title: "Sales Agent (Live Transfers - Insurance)",
            team: "Sales Operations",
            location: "On-site (Rawalpindi)",
            openings: "5 Positions",
            type: "Full-time",
            description: "Convert high-intent insurance leads into active clients. Experience in life/health insurance is a plus."
        },
        {
            title: "Software Project Closer (Sales)",
            team: "Sales Operations",
            location: "On-site (Rawalpindi)",
            openings: "1 Position",
            type: "Full-time",
            description: "Expert negotiation and closing skills required for managing high-value software project deals and enterprise solutions."
        },
    ];

    return (
        <main className="bg-background min-h-screen text-white relative overflow-hidden">
            <Navbar />

            {/* Technical Illustration Background */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url('/careers_background_illustration_1780661966065.png')`,
                    backgroundSize: '800px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right bottom'
                }}
            />

            <div className="pt-32 pb-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-6"
                        >
                            <Sparkles size={16} />
                            <span>We&apos;re Hiring</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                            Build the Future of <span className="text-brand-primary">Growth</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Join Synexis Technologies and help us engineer the most aggressive sales and technology engines on the planet.
                        </p>
                    </div>

                    {/* Positions Grid */}
                    <div className="space-y-6">
                        {positions.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:border-brand-primary/40 backdrop-blur-xl transition-all hover:bg-slate-900/60"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-bold text-slate-300">
                                                {job.team}
                                            </span>
                                            <div className="flex items-center gap-1 text-slate-500 text-xs">
                                                <Clock size={14} />
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-black mb-3 group-hover:text-brand-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <p className="text-slate-400 mb-6 max-w-xl">
                                            {job.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                                            <div className="flex items-center gap-1">
                                                <MapPin size={16} />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-brand-primary">
                                                <Briefcase size={16} />
                                                <span>{job.openings}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedPosition(job.title)}
                                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-black hover:bg-brand-primary hover:text-white transition-all group/btn shrink-0"
                                    >
                                        Apply Now
                                        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Placeholder for no more jobs */}
                    <div className="mt-16 p-12 rounded-3xl border-2 border-dashed border-slate-800 text-center">
                        <h4 className="text-xl font-bold mb-2">Don&apos;t see your role?</h4>
                        <p className="text-slate-500 mb-8">We&apos;re always looking for exceptional talent in Engineering, Marketing, and Sales.</p>
                        <button
                            onClick={() => setIsOpenApplyOpen(true)}
                            className="text-brand-primary font-black hover:underline underline-offset-4"
                        >
                            Send us an open application →
                        </button>
                    </div>
                </div>
            </div>

            <ApplyModal
                isOpen={!!selectedPosition}
                onClose={() => setSelectedPosition(null)}
                position={selectedPosition || ""}
            />

            <OpenApplyModal
                isOpen={isOpenApplyOpen}
                onClose={() => setIsOpenApplyOpen(false)}
            />

            <Footer />
        </main>
    );
}
