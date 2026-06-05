"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2, User, Mail, Phone, MessageSquare, Briefcase, Link2 } from "lucide-react";
import { submitApplication } from "@/app/actions/career";

interface ApplyModalProps {
    isOpen: boolean;
    onClose: () => void;
    position: string;
}

export default function ApplyModal({ isOpen, onClose, position }: ApplyModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        formData.append("position", position);

        const result = await submitApplication(formData);

        if (result.success) {
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setIsSuccess(false);
            }, 3000);
        } else {
            setError(result.error || "Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-primary/50 blur-xl" />

                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-black text-white">Join the Engine</h2>
                                <p className="text-slate-400 text-sm mt-1">Applying for: <span className="text-brand-primary font-bold">{position}</span></p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-slate-500 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-12"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                                <p className="text-slate-400">Our HR team will review your profile and reach out within 48 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                            <User size={12} /> Full Name
                                        </label>
                                        <input
                                            required
                                            name="fullName"
                                            placeholder="John Doe"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                            <Mail size={12} /> Email Address
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                            <Phone size={12} /> Contact Number
                                        </label>
                                        <input
                                            required
                                            name="phone"
                                            placeholder="+92 3XX XXXXXXX"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                            <MessageSquare size={12} /> WhatsApp
                                        </label>
                                        <input
                                            required
                                            name="whatsapp"
                                            placeholder="+92 3XX XXXXXXX"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                            Gender
                                        </label>
                                        <select
                                            name="gender"
                                            required
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-colors appearance-none"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                            <Briefcase size={12} /> Experience (Years)
                                        </label>
                                        <input
                                            required
                                            name="experience"
                                            placeholder="e.g. 2 years in Sales"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                        <Link2 size={12} /> Link to CV/Portfolio (Optional)
                                    </label>
                                    <input
                                        name="cvLink"
                                        placeholder="Google Drive / Dropbox / Website link"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2 pb-4">
                                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                        LinkedIn Profile (Optional)
                                    </label>
                                    <input
                                        name="linkedin"
                                        placeholder="linkedin.com/in/username"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                                    />
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-lg">
                                        {error}
                                    </div>
                                )}

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin text-white" />
                                    ) : (
                                        <>
                                            Submit Application
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
