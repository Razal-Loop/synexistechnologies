"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About Us", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "The Ecosystem", href: "/#offer" },
        { name: "SaaS Tools", href: "/saas-tools" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Referral", href: "/refer" },
        { name: "Careers", href: "/careers" },
        { name: "Internships", href: "/internships" },
        { name: "Contact", href: "/#lead-form" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 bg-white shadow-lg mx-4 mt-4 rounded-2xl border border-slate-200"
            >
                <Link href="/" className="flex items-center gap-3 md:ml-6 ml-2">
                    <Image
                        src="/logo.png"
                        alt="Web Axis Solutions Logo"
                        width={168}
                        height={96}
                        className="h-14 md:h-24 w-auto object-contain"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-slate-900 hover:text-brand-primary transition-colors uppercase tracking-tight"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3 md:mr-6 mr-2">
                    <Link
                        href="https://www.instagram.com/webaxis_solutions/"
                        target="_blank"
                        className="hidden md:flex bg-slate-50 hover:bg-brand-primary p-2 rounded-lg transition-all group border border-slate-200/50 hover:border-brand-primary/50"
                    >
                        <img
                            src="https://cdn.simpleicons.org/instagram/000000"
                            alt="Instagram"
                            className="w-4 h-4 group-hover:invert transition-all opacity-70 group-hover:opacity-100"
                        />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/company/web-axis-solutions/"
                        target="_blank"
                        className="hidden md:flex bg-slate-50 hover:bg-brand-primary p-2 rounded-lg transition-all group border border-slate-200/50 hover:border-brand-primary/50"
                    >
                        <img
                            src="https://cdn.simpleicons.org/linkedin/000000"
                            alt="LinkedIn"
                            className="w-4 h-4 group-hover:invert transition-all opacity-70 group-hover:opacity-100"
                        />
                    </Link>

                    <Link
                        href="#lead-form"
                        className="hidden md:block px-5 py-2 bg-brand-primary hover:bg-slate-900 text-white rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-primary/20"
                    >
                        Reserve Spot
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-brand-primary transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -20, pointerEvents: "none" }}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-32 px-6"
            >
                <div className="flex flex-col gap-8 items-center text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-black text-white hover:text-brand-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://www.instagram.com/webaxis_solutions/"
                            target="_blank"
                            className="bg-white/10 hover:bg-brand-primary p-3 rounded-xl transition-all group border border-white/10"
                        >
                            <img
                                src="https://cdn.simpleicons.org/instagram/ffffff"
                                alt="Instagram"
                                className="w-6 h-6 opacity-80 group-hover:opacity-100"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/web-axis-solutions/"
                            target="_blank"
                            className="bg-white/10 hover:bg-brand-primary p-3 rounded-xl transition-all group border border-white/10"
                        >
                            <img
                                src="https://cdn.simpleicons.org/linkedin/ffffff"
                                alt="LinkedIn"
                                className="w-6 h-6 opacity-80 group-hover:opacity-100"
                            />
                        </Link>
                    </div>
                    <Link
                        href="#lead-form"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-5 bg-brand-primary text-white rounded-2xl font-black text-xl text-center"
                    >
                        Reserve Your Spot
                    </Link>
                </div>
            </motion.div>
        </>
    );
}
