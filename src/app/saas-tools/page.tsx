"use client";

import { motion } from "framer-motion";
import { Hammer, Sparkles, Box, Cpu, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitWaitlist } from "@/app/actions/lead";

export default function SaasTools() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Calculate a consistent, growing waitlist number
    // Starting at 142 on Jan 1st, 2026, growing by ~3.5 per day
    const getWaitlistNumber = () => {
        const startDate = new Date("2026-01-01").getTime();
        const now = Date.now();
        const daysPassed = (now - startDate) / (1000 * 60 * 60 * 24);
        return Math.floor(142 + (daysPassed * 3.5));
    };

    return (
        <div className="relative">
            <Navbar />
            <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-start relative overflow-hidden pt-40 pb-40">
                {/* Premium Video Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
                    >
                        <source src="/208682_medium.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] opacity-40" />
                    <div className="absolute inset-0 bg-[#020617]/20" />
                </div>

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
                            className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                        >
                            We&apos;re building a suite of high-performance tools designed to automate, optimize, and scale modern businesses. Proprietary tech, built by engineers, for growth-obsessed agencies.
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
                            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest">
                                <span>Waitlist Reward: $150 Launch Credit</span>
                            </div>
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
                                    className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50 min-w-[140px]"
                                >
                                    {isSuccess ? "Joined!" : isSubmitting ? "Joining..." : <>Join Waitlist <ArrowRight size={20} /></>}
                                </button>
                            </form>
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-8 p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20 text-center glass relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full -mr-16 -mt-16" />
                                    <p className="text-emerald-400 font-black text-2xl mb-2">Success!</p>
                                    <p className="text-slate-400 text-sm mb-6 uppercase tracking-extra-widest font-bold">Your Official Launch Spot</p>
                                    <div className="inline-flex items-center justify-center px-10 py-4 bg-white/5 border border-white/10 rounded-2xl shadow-inner">
                                        <span className="text-5xl font-black text-white tracking-tighter">#{getWaitlistNumber()}</span>
                                    </div>
                                    <div className="mt-8 p-4 rounded-2xl bg-brand-primary/10 border border-brand-primary/20">
                                        <p className="text-brand-primary font-bold">Early Access Benefit Unlocked</p>
                                        <p className="text-white font-black text-lg">$150 Launch Credit Coupon</p>
                                    </div>
                                    <p className="mt-6 text-slate-500 text-xs italic">We&apos;ll notify you as soon as early access begins with your exclusive coupon.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent pointer-events-none" />
            </main>
            <Footer />
        </div>
    );
}
