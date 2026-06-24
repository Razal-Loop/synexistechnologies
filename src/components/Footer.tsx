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
                            <Link href="/#lead-form" className="text-white hover:text-brand-primary text-xs transition-colors font-black flex items-center gap-2 mt-2">
                                <Mail className="w-3 h-3 text-brand-primary" />
                                Support
                            </Link>
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
