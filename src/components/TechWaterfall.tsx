"use client";

import { motion } from "framer-motion";

const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Node.js", "Supabase", "PostgreSQL", "Python",
    "Framer Motion", "Lucide React", "Vercel", "OpenAI",
    "Resend", "Cloudflare", "Docker", "Git", "Radix UI",
    "Zustand", "Prisma", "Redis"
];

const WaterParticle = () => (
    <motion.div
        initial={{ y: -100, x: Math.random() * 100 + "%", opacity: 0 }}
        animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 0.4, 0],
            scale: [1, 1.5, 1]
        }}
        transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
        }}
        className="absolute w-[2px] h-[40px] bg-gradient-to-b from-transparent via-blue-400 to-transparent blur-[1px]"
    />
);

const TechLog = ({ tech, index }: { tech: string; index: number }) => (
    <motion.div
        initial={{ y: -200, x: (Math.random() - 0.5) * 40 }}
        animate={{
            y: ["0vh", "120vh"],
            rotate: [index % 2 === 0 ? 5 : -5, index % 2 === 0 ? -5 : 5],
            x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 60]
        }}
        transition={{
            y: {
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: index * 2
            },
            rotate: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            },
            x: {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }}
        className="absolute group"
    >
        <div className="relative px-5 py-3 rounded-xl bg-blue-900/30 border border-blue-400/20 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)] flex flex-col items-center">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />

            <span className="text-[8px] font-mono text-blue-300/40 mb-1 tracking-tighter">0xINFRA_{index}</span>
            <span className="text-xs font-black text-white/90 tracking-widest uppercase">{tech}</span>

            {/* Water "Drip" effect on the log */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-blue-400/30 blur-[1px]" />
        </div>
    </motion.div>
);

export default function TechWaterfall() {
    return (
        <div className="fixed left-0 top-0 bottom-0 w-[300px] hidden xl:block pointer-events-none z-0 overflow-hidden">
            {/* The "Main Channel" of the Waterfall */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.03] via-blue-500/[0.05] to-transparent" />

            {/* Cascading Water Streaks */}
            <div className="absolute inset-0 opacity-40">
                {[...Array(30)].map((_, i) => (
                    <WaterParticle key={`p-${i}`} />
                ))}
            </div>

            {/* Tech Logs Floating in the Stream */}
            <div className="absolute inset-0 flex justify-center">
                {techStack.map((tech, i) => (
                    <TechLog key={tech} tech={tech} index={i} />
                ))}
            </div>

            {/* Waterfall Mist/Splash at the top */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-xl" />

            {/* Gradient Fades for Content Blending */}
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-10" />
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Vertical Flow Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] bg-repeat" />
        </div>
    );
}
