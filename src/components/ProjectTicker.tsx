"use client";

import { motion } from "framer-motion";

const projects = [
    "MyMeds Pharmacy",
    "Speckles Limited",
    "Speckles CareHomes",
    "Armour Apparels",
    "XtraProfit",
    "Global Reach Ads",
    "Telehealth Logic",
    "CareSector AI",
    "E-com Scale",
];

export default function ProjectTicker() {
    return (
        <div className="py-16 border-y border-slate-900 bg-slate-950/80 backdrop-blur-sm overflow-hidden relative">
            <div className="max-w-7xl mx-auto text-center mb-10 px-6">
                <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Proven Deployments</span>
                <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter drop-shadow-lg">
                    Powering <span className="text-brand-primary">Global</span> Infrastructures
                </h2>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-16 whitespace-nowrap px-6"
                >
                    {[...projects, ...projects].map((project, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 px-8 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl transition-transform hover:scale-105"
                        >
                            <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_12px_rgba(37,99,235,1)]" />
                            <span className="text-white text-sm md:text-base font-black uppercase tracking-[0.15em] italic">
                                {project}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
