"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

export default function Offer() {
    const benefits = [
        "20–50 High-Intent Live Transfers",
        "Real-time delivery to your agency",
        "Pre-qualified for interest & payment ability",
        "No long-term contracts for test batch",
        "Direct connect during business hours",
        "Dedicated support for campaign setup"
    ];

    return (
        <section id="offer" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">The Growth Ecosystem</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We don't just sell leads. We build the high-conversion infrastructure that powers your entire agency.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative glass p-8 md:p-12 rounded-[2.5rem] border-brand-primary/30"
                    >
                        <div className="absolute top-0 right-0 p-8">
                            <Zap className="w-12 h-12 text-brand-primary opacity-20" />
                        </div>

                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Integrated Execution</h3>
                            <p className="text-slate-400">Custom Software, Digital Marketing, and Real-Time Live Transfers combined into one powerful system.</p>
                        </div>

                        <div className="flex items-baseline gap-2 mb-10">
                            <span className="text-5xl md:text-7xl font-black text-white">$80–$150</span>
                            <span className="text-xl text-slate-500 font-medium">/ per transfer</span>
                        </div>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <span className="text-slate-300 font-medium font-bold">End-to-End Technology Stack</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <span className="text-slate-300 font-medium font-bold">Scalable Digital Marketing Funnels</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <span className="text-slate-300 font-medium font-bold">20–50 FE Live Transfers (Test Batch)</span>
                            </div>
                        </div>

                        <a
                            href="#lead-form"
                            className="block w-full py-5 bg-white hover:bg-slate-200 text-slate-900 rounded-2xl font-black text-center text-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Get Test Transfers
                        </a>

                        <p className="mt-6 text-center text-sm text-slate-500">
                            Limited availability for June test slots.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
