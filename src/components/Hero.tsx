"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Megaphone, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 md:pt-20 px-6 overflow-hidden">
            {/* Background with Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                >
                    <source src="/mixkit-busy-office-space-918-hd-ready.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
            </div>

            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="relative z-10 max-w-5xl text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500 leading-[1.1]"
                >
                    Engineering Growth. <br /> Executing Sales.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-white mb-12 drop-shadow-md font-medium"
                >
                    We build custom software, dominate Digital Marketing, and deliver high-intent live transfers.
                    The ultimate growth engine for insurance agencies and solo agents.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#lead-form"
                        className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105"
                    >
                        Reserve Your Spot
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#services"
                        className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700/50 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                    >
                        View Services
                    </Link>
                </motion.div>

                {/* Trust markers */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-slate-800/50 pt-10"
                >
                    <div className="flex flex-col items-center gap-1">
                        <Code2 className="w-6 h-6 text-brand-primary mb-2" />
                        <span className="text-xl font-bold text-white">Custom Dev</span>
                        <span className="text-sm text-slate-500">Tailored Scalability</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Megaphone className="w-6 h-6 text-brand-secondary mb-2" />
                        <span className="text-xl font-bold text-white">Digital Ads</span>
                        <span className="text-sm text-slate-500">Hyper-Targeted</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 md:col-span-1 col-span-2">
                        <PhoneCall className="w-6 h-6 text-brand-accent mb-2" />
                        <span className="text-xl font-bold text-white">Live Transfers</span>
                        <span className="text-sm text-slate-500">Instant Connection</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
