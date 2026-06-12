"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";
import OpenApplyModal from "@/components/OpenApplyModal";
import TechWaterfall from "@/components/TechWaterfall";

export default function Internships() {
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [isOpenApplyOpen, setIsOpenApplyOpen] = useState(false);

    const positions = [
        {
            title: "Digital Marketing Intern",
            team: "Marketing Operations",
            location: "On-site (Rawalpindi)",
            openings: "1 Seat",
            type: "Internship (3 Months)",
            description: "Learn and execute high-performance digital marketing campaigns, SEO strategies, and content management in a fast-paced agency environment."
        },
        {
            title: "Software Development Intern",
            team: "Engineering",
            location: "On-site (Rawalpindi)",
            openings: "1 Seat",
            type: "Internship (3 Months)",
            description: "Work with modern tech stacks (React, Next.js, Node.js) to build scalable web applications. Help engineering the most aggressive sales and technology engines."
        },
    ];

    return (
        <main className="bg-background min-h-screen text-white relative overflow-hidden">
            <Navbar />
            <TechWaterfall />

            {/* Technical Illustration Background with Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                    scale: [1, 1.05, 1],
                    x: [0, 20, 0],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url('/careers_background_glowing.png')`,
                    backgroundSize: '1200px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right bottom'
                }}
            />

            <div className="pt-32 pb-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold mb-6"
                        >
                            <GraduationCap size={16} />
                            <span>Launch Your Career</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                            Engineering <span className="text-brand-primary">Next-Gen</span> Talent
                        </h1>
                        <p className="text-slate-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                            Join our intensive internship program and work on real-world projects that power hundreds of businesses globally.
                        </p>
                    </div>

                    {/* Positions Grid */}
                    <div className="space-y-6">
                        {positions.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:border-brand-primary/40 backdrop-blur-xl transition-all hover:bg-slate-900/60"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-bold text-slate-300">
                                                {job.team}
                                            </span>
                                            <div className="flex items-center gap-1 text-slate-500 text-xs">
                                                <Clock size={14} />
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-black mb-3 group-hover:text-brand-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <p className="text-slate-200 mb-6 max-w-xl font-medium">
                                            {job.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                                            <div className="flex items-center gap-1">
                                                <MapPin size={16} />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-brand-primary">
                                                <Briefcase size={16} />
                                                <span>{job.openings}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedPosition(job.title)}
                                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-black hover:bg-brand-primary hover:text-white transition-all group/btn shrink-0"
                                    >
                                        Apply for Internship
                                        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Placeholder for no more jobs */}
                    <div className="mt-16 p-12 rounded-3xl border-2 border-dashed border-slate-800 text-center">
                        <h4 className="text-xl font-bold mb-2">Want to learn something else?</h4>
                        <p className="text-slate-300 mb-8 font-medium">We occasionally offer custom internship paths for exceptional students.</p>
                        <button
                            onClick={() => setIsOpenApplyOpen(true)}
                            className="text-brand-primary font-black hover:underline underline-offset-4"
                        >
                            Tell us what you want to learn →
                        </button>
                    </div>
                </div>
            </div>

            <ApplyModal
                isOpen={!!selectedPosition}
                onClose={() => setSelectedPosition(null)}
                position={selectedPosition || ""}
            />

            <OpenApplyModal
                isOpen={isOpenApplyOpen}
                onClose={() => setIsOpenApplyOpen(false)}
            />

            <Footer />
        </main>
    );
}
