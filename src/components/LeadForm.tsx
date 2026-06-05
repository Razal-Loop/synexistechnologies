"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import { submitLead } from "@/app/actions/lead";

export default function LeadForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
    const [selectedService, setSelectedService] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const result = await submitLead(formData);

        if (result.success) {
            setFormState("success");
        } else {
            setFormState("idle");
            setErrorMessage(result.error || "Something went wrong. Please try again.");
        }
    };

    return (
        <section id="lead-form" className="py-24 px-6">
            <div className="max-w-3xl mx-auto glass p-8 md:p-16 rounded-[3rem]">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-white mb-4">Get Started</h2>
                    <p className="text-slate-400">
                        Tell us about your goals. We work with a select number of clients at a time to ensure exceptional quality and results.
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
                                    name="agencyName"
                                    type="text"
                                    placeholder="The Smith Agency"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Contact Name</label>
                                <input
                                    required
                                    name="contactName"
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
                                name="email"
                                type="email"
                                placeholder="john@smithagency.com"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Phone Number</label>
                            <input
                                required
                                name="phone"
                                type="tel"
                                placeholder="(555) 000-0000"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Service Type</label>
                            <select
                                required
                                name="serviceType"
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Select service...</option>
                                <option value="software">Custom Software Development</option>
                                <option value="marketing">Digital Marketing</option>
                                <option value="transfers">Live Transfers</option>
                                <option value="mvp">Rapid MVP Building ($699+)</option>
                            </select>
                        </div>

                        {selectedService === "software" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-slate-300 ml-1">Project Type</label>
                                <select required name="projectType" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Select project type...</option>
                                    <option value="website">Website Development</option>
                                    <option value="app">App Development</option>
                                    <option value="saas">SaaS Development</option>
                                    <option value="ai">AI Integrated System Development</option>
                                    <option value="others">Others</option>
                                </select>
                            </motion.div>
                        )}

                        {selectedService === "marketing" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-slate-300 ml-1">Campaign Type</label>
                                <select required name="campaignType" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Select campaign type...</option>
                                    <option value="social">Social Media Advertising</option>
                                    <option value="search">Search Engine Marketing (PPC)</option>
                                    <option value="seo">SEO &amp; Content Marketing</option>
                                    <option value="full_funnel">Full-Funnel Lead Generation</option>
                                    <option value="other_marketing">Other</option>
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
                                <select required name="engagementType" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Select engagement...</option>
                                    <option value="pilot">Pilot Program</option>
                                    <option value="monthly">Monthly Campaign</option>
                                    <option value="long_term">Long-Term Partnership</option>
                                </select>
                            </motion.div>
                        )}

                        {selectedService === "mvp" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-slate-300 ml-1">MVP Project Type</label>
                                <select required name="mvpType" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Select MVP type...</option>
                                    <option value="saas_mvp">SaaS MVP</option>
                                    <option value="mobile_mvp">Mobile App MVP</option>
                                    <option value="ai_mvp">AI Agent / Tool MVP</option>
                                    <option value="automation_mvp">Business Automation MVP</option>
                                    <option value="other_mvp">Other</option>
                                </select>
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Estimated Monthly Budget (Min $1,000)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    required
                                    name="budget"
                                    type="number"
                                    min="1000"
                                    placeholder="Enter your budget (e.g. 2500)"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-4 pl-8 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                                />
                            </div>
                        </div>

                        {errorMessage && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl flex items-center gap-3 text-sm">
                                <AlertCircle className="w-4 h-4" />
                                {errorMessage}
                            </div>
                        )}

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
