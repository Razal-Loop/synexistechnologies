"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ── Engineering & Dev Stack ──────────────────────────────────────
const techStack = [
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "tech" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "tech" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "tech" },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "tech" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "tech" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", category: "tech" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "tech" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "tech" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tech" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tech" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "tech" },
    { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", category: "tech" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", category: "tech" },
    { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg", category: "tech" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", category: "tech" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tech" },
    // ── Social Media & Digital Marketing ──────────────────────────
    { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/E4405F", category: "social" },
    { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook/1877F2", category: "social" },
    { name: "TikTok", logo: "https://cdn.simpleicons.org/tiktok/ffffff", category: "social" },
    { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube/FF0000", category: "social" },
    { name: "X / Twitter", logo: "https://cdn.simpleicons.org/x/ffffff", category: "social" },
    { name: "LinkedIn", logo: "https://cdn.simpleicons.org/linkedin/0A66C2", category: "social" },
    { name: "Meta Ads", logo: "https://cdn.simpleicons.org/meta/0467DF", category: "social" },
    { name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads/4285F4", category: "social" },
    { name: "Snapchat", logo: "https://cdn.simpleicons.org/snapchat/FFFC00", category: "social" },
    { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp/25D366", category: "social" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96BF48", category: "social" },
    { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/FFE01B", category: "social" },
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

const TechLog = ({ tech, index }: { tech: { name: string; logo: string; category: string }; index: number }) => (
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
        <div className="flex flex-col items-center gap-1.5">
            {/* Technology Logo */}
            <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    sizes="36px"
                    className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    unoptimized
                />
            </div>

            {/* Technology Name */}
            <span className="text-[7px] font-black tracking-widest uppercase whitespace-nowrap text-white/50">
                {tech.name}
            </span>
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
                    <TechLog key={tech.name} tech={tech} index={i} />
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
