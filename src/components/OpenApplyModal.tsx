"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2, User, Mail, Phone, MessageSquare, Link2, Sparkles } from "lucide-react";
import { submitApplication } from "@/app/actions/career";

interface OpenApplyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OpenApplyModal({ isOpen, onClose }: OpenApplyModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        // Position will be what they type in "Desired Role" or just "Open Application"
        const desiredRole = formData.get("desiredRole") as string;
        formData.append("position", `Open Application: ${desiredRole}`);

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
                        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-slate-900 border border-brand-primary/20 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] p-6 md:p-10 overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Premium Gradient Background */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/10 blur-[80px] rounded-full" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full" />

                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-white tracking-tight">Open Application</h2>
                                    <p className="text-slate-400 text-sm">Tell us how you can help Synexis grow.</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 text-slate-500 hover:text-white hover:bg-slate-800 rounded-2xl transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="overflow-y-auto pr-2 custom-scrollbar">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-16"
                                >
                                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-400 mb-8 border border-emerald-500/20">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-4">Submission Sent!</h3>
                                    <p className="text-slate-400 text-lg max-w-xs mx-auto">We&apos;ll be in touch if your profile matches our aggressive growth goals.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                                <input required name="fullName" placeholder="John Doe" className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-brand-primary/50 outline-none transition-all placeholder:text-slate-600" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                                <input required type="email" name="email" placeholder="john@example.com" className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-brand-primary/50 outline-none transition-all placeholder:text-slate-600" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Contact</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                                <input required name="phone" placeholder="+92" className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-brand-primary/50 outline-none transition-all placeholder:text-slate-600" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">WhatsApp</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                                <input required name="whatsapp" placeholder="+92" className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-brand-primary/50 outline-none transition-all placeholder:text-slate-600" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Gender</label>
                                            <select name="gender" required className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl px-4 py-4 text-white focus:border-brand-primary/50 outline-none transition-all appearance-none cursor-pointer">
                                                <option value="" className="bg-slate-900 text-slate-500">Select</option>
                                                <option value="Male" className="bg-slate-900 text-white">Male</option>
                                                <option value="Female" className="bg-slate-900 text-white">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Desired Role / Expertise</label>
                                        <input required name="desiredRole" placeholder="e.g. Content Writer, UI Designer..." className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl px-6 py-4 text-white focus:border-brand-primary/50 outline-none transition-all placeholder:text-slate-600" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Link to CV / Portfolio (Optional)</label>
                                        <div className="relative">
                                            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                            <input name="cvLink" placeholder="Google Drive Link" className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-brand-primary/50 outline-none transition-all placeholder:text-slate-600" />
                                        </div>
                                    </div>

                                    {error && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-2xl">{error}</div>}

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full py-5 bg-brand-primary text-white rounded-3xl font-black text-xl hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Application <Send size={20} /></>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
