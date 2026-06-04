"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function LeadForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
    const [selectedService, setSelectedService] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate submission
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    return (
        <section id="lead-form" className="py-24 px-6">
            <div className="max-w-3xl mx-auto glass p-8 md:p-16 rounded-[3rem]">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-white mb-4">Reserve Your Spot</h2>
                    <p className="text-slate-400">
                        Apply for a test batch of 20–50 live transfers. We only work with a limited number of agencies at a time to ensure lead quality.
                    </p>
                </div>

                {formState === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                        <p className="text-slate-400">Our team will reach out to you within 24 hours to discuss your campaign.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Agency Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="The Smith Agency"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Contact Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Smith"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Work Email</label>
                            <input
                                required
                                type="email"
                                placeholder="john@smithagency.com"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Phone Number</label>
                            <input
                                required
                                type="tel"
                                placeholder="(555) 000-0000"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Service Type</label>
                            <select
                                required
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Select service...</option>
                                <option value="software">Custom Software Development</option>
                                <option value="marketing">Digital Marketing</option>
                                <option value="transfers">Live Transfers</option>
                            </select>
                        </div>

                        {selectedService === "software" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-slate-300 ml-1">Project Type</label>
                                <select required className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Select project type...</option>
                                    <option value="website">Website Development</option>
                                    <option value="app">App Development</option>
                                    <option value="saas">SaaS Development</option>
                                    <option value="ai">AI Integrated System Development</option>
                                    <option value="others">Others</option>
                                </select>
                            </motion.div>
                        )}

                        {selectedService === "transfers" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-slate-300 ml-1">Engagement Type</label>
                                <select required className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Select engagement...</option>
                                    <option value="test_batch">Test 25-50 Live Transfers</option>
                                    <option value="long_term">Long Term Contract</option>
                                </select>
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Estimated Monthly Budget (Min $1,000)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    required
                                    type="number"
                                    min="1000"
                                    placeholder="Enter your budget (e.g. 2500)"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 pl-8 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                                />
                            </div>
                        </div>

                        <button
                            disabled={formState === "submitting"}
                            type="submit"
                            className="w-full py-5 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-black text-xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            {formState === "submitting" ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Processing...
                                </span>
                            ) : (
                                "Submit Application"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
