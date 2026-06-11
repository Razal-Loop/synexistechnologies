"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "The Ecosystem", href: "/#offer" },
        { name: "SaaS Tools", href: "/saas-tools" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Referral", href: "/refer" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/#lead-form" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-lg mx-4 mt-4 rounded-2xl border border-slate-200"
            >
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="SYNEXIS DIGITAL Logo"
                        width={600}
                        height={200}
                        className="h-12 md:h-16 w-auto object-contain"
                        priority
                        unoptimized
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

                <div className="flex items-center gap-4">
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
