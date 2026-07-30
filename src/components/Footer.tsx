"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="py-20 px-6 border-t border-slate-800 bg-black relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="md:col-span-1 flex flex-col gap-6 items-center md:items-start">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/footer-logo.png"
                                alt="Web Axis Solutions Logo"
                                width={80}
                                height={80}
                                className="h-20 w-auto object-contain rounded-2xl"
                            />
                        </Link>
                        <p className="text-slate-400 text-xs text-center md:text-left leading-relaxed font-medium">
                            Connecting People. Powering Solutions. We build the engineering and marketing ecosystems that scale businesses globally.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link
                                href="https://www.instagram.com/webaxis_solutions/"
                                target="_blank"
                                aria-label="Instagram"
                                className="bg-white/5 hover:bg-brand-primary p-3 rounded-xl transition-all group border border-white/5 hover:border-brand-primary/50 text-white/70 hover:text-white"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/web-axis-solutions/"
                                target="_blank"
                                aria-label="LinkedIn"
                                className="bg-white/5 hover:bg-brand-primary p-3 rounded-xl transition-all group border border-white/5 hover:border-brand-primary/50 text-white/70 hover:text-white"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-black uppercase text-[10px] tracking-widest italic opacity-50">Engineering</h4>
                        <div className="flex flex-col gap-3">
                            {["SaaS Products", "Mobile Apps", "Web Apps", "WordPress Sites"].map(link => (
                                <Link key={link} href="#offer" className="text-slate-400 hover:text-brand-primary text-xs transition-colors font-bold uppercase tracking-wider">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Agency Services */}
                    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-black uppercase text-[10px] tracking-widest italic opacity-50">Agency</h4>
                        <div className="flex flex-col gap-3">
                            {["Lead Transfers", "Rapid MVP", "Digital Marketing", "Social Media"].map(link => (
                                <Link key={link} href="#offer" className="text-slate-400 hover:text-brand-primary text-xs transition-colors font-bold uppercase tracking-wider">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company & Support */}
                    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-black uppercase text-[10px] tracking-widest italic opacity-50">Company</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/careers" className="text-slate-400 hover:text-brand-primary text-xs transition-colors font-bold uppercase tracking-wider">
                                Open Positions
                            </Link>
                            <Link href="/internships" className="text-slate-400 hover:text-brand-primary text-xs transition-colors font-bold uppercase tracking-wider">
                                Internships
                            </Link>
                            <Link href="https://www.goodfirms.co/company/web-axis-solutions" target="_blank" className="text-slate-400 hover:text-brand-primary text-xs transition-colors font-bold uppercase tracking-wider">
                                GoodFirms
                            </Link>
                            <a href="https://websitelaunches.com/site/webaxissolutions.com" target="_blank" rel="noopener" className="mt-2 block">
                                <img
                                    src="https://websitelaunches.com/badge/webaxissolutions.com.svg"
                                    alt="Established online - Public launch record"
                                    width="255"
                                    height="55"
                                    className="h-auto w-40 opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </a>
                            <a href="mailto:contact@webaxissolutions.com" className="text-white hover:text-brand-primary text-xs transition-colors font-black flex items-center gap-2 mt-2">
                                <Mail className="w-3 h-3 text-brand-primary" />
                                Support
                            </a>
                            <p className="text-slate-600 text-[10px] mt-2 uppercase tracking-tight font-bold">24/7 Global Operations</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                        © 2026 WEB AXIS SOLUTIONS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-[10px] font-black text-emerald-400/50 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                            Core Engine: Online
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
