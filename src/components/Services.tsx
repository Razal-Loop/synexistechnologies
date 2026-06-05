"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, PhoneOutgoing, Rocket, PenTool, Wrench, Layers, Layout } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Code2 className="w-8 h-8 text-brand-primary" />,
            title: "Custom Software",
            description: "Production-grade Web and Mobile applications. High-performance enterprise solutions built to scale."
        },
        {
            icon: <Megaphone className="w-10 h-10" />,
            title: "Digital Marketing",
            description: "High-performance advertising campaigns that dominate social media and search engines to generate steady, quality leads."
        },
        {
            icon: <PhoneOutgoing className="w-8 h-8 text-brand-accent" />,
            title: "Live Transfers",
            description: "High-intent live transfers connecting agencies and solo licensing agents with pre-qualified prospects."
        },
        {
            icon: <Rocket className="w-8 h-8 text-brand-primary" />,
            title: "Rapid MVP Building",
            description: "Go from idea to execution in record time. Professional MVP development for startups and enterprises."
        },
        {
            icon: <PenTool className="w-8 h-8 text-brand-primary" />,
            title: "Social Media Handling",
            description: "Premium content creation and social media management. Build a dominant brand presence and engage your audience."
        },
        {
            icon: <Wrench className="w-8 h-8 text-brand-primary" />,
            title: "Maintenance & Support",
            description: "Technical support, bug fixing, and software updates. Keeping your systems at peak performance 24/7."
        },
        {
            icon: <Layers className="w-8 h-8 text-brand-primary" />,
            title: "SaaS Development",
            description: "Enterprise-grade multi-tenant SaaS platforms. Full-scale product architecture, security, and scaling."
        },
        {
            icon: <Layout className="w-8 h-8 text-brand-primary" />,
            title: "WordPress Sites",
            description: "Professional WordPress development optimized for speed, SEO, and business growth."
        }
    ];

    return (
        <section id="services" className="relative py-24 px-6 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
                >
                    <source src="/mixkit-traffic-in-an-underground-tunnel-4067-full-hd.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Services</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Advanced technology meets aggressive sales execution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-[2rem] bg-slate-950/80 backdrop-blur-xl border border-slate-800 hover:border-brand-primary/50 transition-all hover:translate-y-[-8px] relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative w-24 h-24 mb-8">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />

                                <div className="relative w-full h-full rounded-2xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                                    <div className="text-brand-primary filter drop-shadow-[0_0_8px_rgba(0,123,255,0.5)]">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            <h3 className="relative text-2xl font-black text-white mb-4 tracking-tight drop-shadow-md">{service.title}</h3>
                            <p className="relative text-slate-400 leading-relaxed font-medium drop-shadow-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
