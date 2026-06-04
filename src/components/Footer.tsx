"use client";

import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="py-20 px-6 border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="md:col-span-2 flex flex-col gap-6 items-center md:items-start">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="SYNEXIS Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-white leading-none">SYNEXIS</span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-primary uppercase">Technologies</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 max-w-sm text-center md:text-left leading-relaxed">
                            Connecting People. Powering Solutions. We build the engineering and marketing ecosystems that scale businesses globally.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="mailto:hello@synexistech.com" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest italic">Navigation</h4>
                        <div className="flex flex-col gap-3">
                            {["Services", "Portfolio", "Process"].map(link => (
                                <Link key={link} href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-brand-primary text-sm transition-colors font-bold uppercase tracking-wide">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest italic">Direct Contact</h4>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:hello@synexistech.com" className="text-slate-400 hover:text-brand-primary text-sm transition-colors font-medium">hello@synexistech.com</a>
                            <p className="text-slate-600 text-xs mt-2 uppercase tracking-tighter">Global Operations</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                        © 2026 SYNEXIS TECHNOLOGIES. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-[10px] font-black text-emerald-400/50 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            System Active
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
