"use client";

import { motion } from "framer-motion";

const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Node.js", "Supabase", "PostgreSQL", "Python",
    "Framer Motion", "Lucide React", "Vercel", "OpenAI",
    "Resend", "Cloudflare", "Docker", "Git", "Radix UI",
    "Zustand", "Prisma", "Redis"
];

export default function TechWaterfall() {
    // Duplicate the stack to create a seamless loop
    const tripleStack = [...techStack, ...techStack, ...techStack];

    return (
        <div className="fixed left-0 top-0 bottom-0 w-32 hidden xl:flex flex-col items-center pointer-events-none z-0 overflow-hidden">
            {/* Water Stream Background Effect */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 bg-blue-500/5 blur-[40px] animate-pulse" />

            <motion.div
                animate={{
                    y: [0, -1500]
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex flex-col gap-8 py-10"
            >
                {tripleStack.map((tech, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, 8, -8, 0],
                            rotate: [0, 2, -2, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="px-4 py-2 rounded-lg bg-slate-900/60 border border-brand-primary/20 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] flex flex-col items-center"
                    >
                        {/* Log Identity */}
                        <span className="text-[9px] font-mono text-brand-primary/40 block mb-1">
                            SYS_LOG_{i.toString().padStart(3, '0')}
                        </span>

                        <div className="text-[10px] font-black whitespace-nowrap text-white/90 uppercase tracking-[0.2em]">
                            {tech}
                        </div>

                        {/* Visual "Flow" lines on the log */}
                        <div className="mt-1 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Water Flow Overlay (Vertical lines) */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
                <div className="h-full w-[1px] bg-blue-400/30 absolute left-1/4 blur-[1px]" />
                <div className="h-full w-[1px] bg-blue-400/30 absolute left-1/2 blur-[1px]" />
                <div className="h-full w-[1px] bg-blue-400/30 absolute left-3/4 blur-[1px]" />
            </div>

            {/* Gradient Fade Overlay for seamless loop */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-20" />

            {/* Ambient Water Glow */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent z-30" />
        </div>
    );
}
