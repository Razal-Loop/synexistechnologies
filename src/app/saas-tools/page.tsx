"use client";

import { motion } from "framer-motion";
import { Hammer, Sparkles, Box, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitWaitlist } from "@/app/actions/lead";

export default function SaasTools() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    return (
        <div className="relative">
            <Navbar />
            <main className="min-h-screen bg-[#020617] flex items-center justify-center relative overflow-hidden pt-20">
                {/* Premium Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-primary/20 blur-[120px] rounded-full"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"
                    />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

                <div className="container relative z-10 px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-8"
                        >
                            <Sparkles size={16} />
                            <span>SYNEXIS LABS IS COOKING</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8"
                        >
                            SaaS Tools <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Coming Soon.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                        >
                            We're building a suite of high-performance tools designed to automate, optimize, and scale modern businesses. Proprietary tech, built by engineers, for growth-obsessed agencies.
                        </motion.p>

                        {/* Preview Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16 text-left">
                            {[
                                { icon: Hammer, title: "Automations", desc: "Custom workflows to eliminate manual lead handling." },
                                { icon: Box, title: "CRM Suite", desc: "Lightweight, tactical tools for high-volume sales." },
                                { icon: Cpu, title: "AI Agents", desc: "Self-improving systems for 24/7 client engagement." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="glass p-8 rounded-[2rem] border border-white/5 hover:border-brand-primary/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="max-w-md mx-auto"
                        >
                            <form
                                action={async (formData) => {
                                    setIsSubmitting(true);
                                    const result = await submitWaitlist(formData);
                                    setIsSubmitting(false);
                                    if (result.success) {
                                        setIsSuccess(true);
                                    }
                                }}
                                className="flex flex-col sm:flex-row gap-3 p-2 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl"
                            >
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-6 py-4 text-white outline-none placeholder:text-slate-500"
                                />
                                <button
                                    disabled={isSubmitting || isSuccess}
                                    type="submit"
                                    className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50"
                                >
                                    {isSuccess ? "Joined!" : isSubmitting ? "Joining..." : <>Join Waitlist <ArrowRight size={20} /></>}
                                </button>
                            </form>
                            {isSuccess && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 text-emerald-400 font-bold"
                                >
                                    Excellent. You're on the list.
                                </motion.p>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
            </main>
            <Footer />
        </div>
    );
}
