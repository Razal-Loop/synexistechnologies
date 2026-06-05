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
    const doubleStack = [...techStack, ...techStack, ...techStack];

    return (
        <div className="fixed left-0 top-0 bottom-0 w-24 hidden lg:flex flex-col items-center pointer-events-none z-0 overflow-hidden opacity-10">
            <motion.div
                animate={{
                    y: [0, -1000] // Adjust based on total height
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex flex-col gap-12 py-10"
            >
                {doubleStack.map((tech, i) => (
                    <div
                        key={i}
                        className="vertical-text text-xl font-black whitespace-nowrap tracking-[0.5em] text-brand-primary uppercase"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        {tech}
                    </div>
                ))}
            </motion.div>

            {/* Gradient Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
    );
}
