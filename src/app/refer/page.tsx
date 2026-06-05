"use client";

import { motion } from "framer-motion";
import { HandCoins, Gift, Rocket, ArrowRight, ShieldCheck, Mail, User, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitReferral } from "@/app/actions/lead";

export default function ReferPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        const result = await submitReferral(formData);
        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
        }
    };

    return (
        <div className="relative">
            <Navbar />
            <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-start relative overflow-hidden pt-40 pb-40">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full" />
                </div>

                <div className="container relative z-10 px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-8"
                        >
                            <HandCoins size={16} />
                            <span>PARTNERSHIP PROGRAM</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8"
                        >
                            Refer a Project. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Earn 20% Commission.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
                        >
                            We value our network. For every project you refer that joins our ecosystem, we'll reward you with a 20% share of the initial project value. No cap, no complexity.
                        </motion.p>

                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            {[
                                { icon: Gift, title: "High Commission", desc: "Get 20% revenue share on closed contracts." },
                                { icon: ShieldCheck, title: "Trust & Transparency", desc: "Formal agreements and timely payouts." },
                                { icon: Rocket, title: "Scale with Us", desc: "Exclusive perks for recurring partners." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="glass p-6 rounded-[2rem] border border-white/5"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                                        <item.icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Referral Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden"
                    >
                        {isSuccess ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ShieldCheck size={40} />
                                </div>
                                <h2 className="text-3xl font-black text-white mb-4">Referral Received.</h2>
                                <p className="text-slate-400 mb-8">Our partnership team will review the details and contact you shortly to coordinate the introduction.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-extrabold text-white mb-8 flex items-center gap-3">
                                    Submit a Lead <ArrowRight size={24} className="text-emerald-500" />
                                </h2>

                                <form action={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                                <input required name="referrerEmail" type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:border-emerald-500/50 outline-none transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Proposed Client Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                                <input required name="clientName" type="text" placeholder="Company or Individual" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:border-emerald-500/50 outline-none transition-all" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Client Contact Info</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                            <input required name="clientContact" type="text" placeholder="Email, LinkedIn, or Phone" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:border-emerald-500/50 outline-none transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-4 text-slate-600" size={18} />
                                            <textarea required name="projectDetails" rows={4} placeholder="What kind of services do they need? (Mobile app, AI, Website, etc.)" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:border-emerald-500/50 outline-none transition-all resize-none"></textarea>
                                        </div>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-[2rem] font-black text-xl transition-all shadow-[0_20px_50px_-10px_rgba(16,185,129,0.3)] disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Submitting..." : "Send Referral"}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
