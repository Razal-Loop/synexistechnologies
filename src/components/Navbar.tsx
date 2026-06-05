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
        { name: "Portfolio", href: "/portfolio" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/#lead-form" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass mx-4 mt-4 rounded-2xl"
            >
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="SYNEXIS Logo"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-black tracking-tighter text-white leading-none">SYNEXIS</span>
                        <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-brand-primary uppercase">Technologies</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="#lead-form"
                        className="hidden md:block px-5 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                    >
                        Reserve Spot
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
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
