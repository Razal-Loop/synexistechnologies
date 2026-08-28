"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            when: "beforeChildren" as const,
            staggerChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.25,
            staggerChildren: 0.05,
            staggerDirection: -1 as const,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 260, damping: 25 },
    },
    exit: { opacity: 0, y: -10 },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "About Us", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "The Ecosystem", href: "/#offer" },
        { name: "SaaS Tools", href: "/saas-tools" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Referral", href: "/refer" },
        { name: "Careers", href: "/careers" },
        { name: "Internships", href: "/internships" },
        { name: "Book Call", href: "/book" },
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
                        aria-label="Instagram"
                        className="hidden md:flex bg-slate-50 hover:bg-brand-primary p-2 rounded-lg transition-all group border border-slate-200/50 hover:border-brand-primary/50 text-slate-700 hover:text-white"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/company/web-axis-solutions/"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="hidden md:flex bg-slate-50 hover:bg-brand-primary p-2 rounded-lg transition-all group border border-slate-200/50 hover:border-brand-primary/50 text-slate-700 hover:text-white"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </Link>

                    <Link
                        href="/book"
                        className="hidden md:block px-5 py-2 bg-brand-primary hover:bg-slate-900 text-white rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-primary/20"
                    >
                        Book Call
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden overflow-y-auto max-h-screen pt-28 pb-12 px-6 flex flex-col justify-between border-b border-brand-primary/10"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-primary/15 blur-[80px] rounded-full pointer-events-none -z-10" />

                        <div className="flex flex-col gap-6 items-center text-center mt-6">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={itemVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-black text-white hover:text-brand-primary transition-all tracking-tight block py-1.5 uppercase hover:scale-105 active:scale-95 duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-6 items-center w-full max-w-sm mx-auto">
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://www.instagram.com/webaxis_solutions/"
                                    target="_blank"
                                    aria-label="Instagram"
                                    className="bg-white/10 hover:bg-brand-primary p-3 rounded-xl transition-all group border border-white/10 text-white/80 hover:text-white hover:scale-105 active:scale-95 duration-200"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/web-axis-solutions/"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    className="bg-white/10 hover:bg-brand-primary p-3 rounded-xl transition-all group border border-white/10 text-white/80 hover:text-white hover:scale-105 active:scale-95 duration-200"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </Link>
                            </div>
                            <Link
                                href="/book"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-brand-primary hover:bg-slate-900 text-white rounded-2xl font-black text-lg text-center transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg shadow-brand-primary/20"
                            >
                                Book Consultation
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
