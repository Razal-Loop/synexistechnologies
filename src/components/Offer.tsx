"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Rocket, Smartphone, Globe, Megaphone, PenTool, Wrench, Layers, Layout } from "lucide-react";

export default function Offer() {


    return (
        <section id="offer" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">The Growth Ecosystem</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We don&apos;t just sell leads. We build the high-conversion infrastructure that powers your entire agency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {[
                        {
                            icon: <Zap className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "Lead Transfers",
                            description: "High-intent real-time live transfers connecting you with pre-qualified prospects instantly.",
                            features: [
                                "Pre-Qualified Prospects",
                                "Instant Connection Logic",
                                "Filtered by High-Intent"
                            ],
                            buttonText: "Start Scaling",
                            footerText: "Premium leads for high-performance teams."
                        },
                        {
                            icon: <Megaphone className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "Digital Marketing",
                            description: "Strategic SEO and campaign management to drive high-conversion organic and paid traffic.",
                            features: [
                                "Full Advanced SEO Audit",
                                "Multi-Channel Ad Management",
                                "Excl. Ad & Content Costs"
                            ],
                            buttonText: "Dominate Search",
                            footerText: "Aggressive growth for local agencies."
                        },
                        {
                            icon: <Rocket className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "Rapid MVP",
                            description: "Go from concept into a working product in 14 days with our specialized sprint.",
                            features: [
                                "14-Day Delivery Sprint",
                                "Scalable Cloud Setup",
                                "Modern Tech Architecture"
                            ],
                            buttonText: "Launch Now",
                            footerText: "Professional execution at startup speed."
                        },
                        {
                            icon: <Smartphone className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "Mobile Apps",
                            description: "Production-grade iOS and Android applications built for scale and high performance.",
                            features: [
                                "Cross-Platform Delivery",
                                "Premium UI/UX Workflow",
                                "App Store Submission"
                            ],
                            buttonText: "Build My App",
                            footerText: "Industry-standard mobile engineering."
                        },
                        {
                            icon: <Globe className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "Web Apps",
                            description: "Full-stack enterprise web applications designed for complex business logic and speed.",
                            features: [
                                "Custom Dashboard Engine",
                                "Enterprise-Grade Security",
                                "SEO & Performance Built"
                            ],
                            buttonText: "Build My Web App",
                            footerText: "Scalable web solutions for growth."
                        },
                        {
                            icon: <PenTool className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "Social Media",
                            description: "Professional handling and premium content creation to build a dominant brand presence.",
                            features: [
                                "Daily Content Creation",
                                "Engagement Management",
                                "Strategic Brand Voice"
                            ],
                            buttonText: "Build My Brand",
                            footerText: "Premium content for elite agencies."
                        },
                        {
                            icon: <Wrench className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "Maintenance",
                            description: "Reliable website and software upkeep including updates, bug fixes, and technical support.",
                            features: [
                                "Bug Fixing & Support",
                                "Software & Security Updates",
                                "Excl. Hosting Management"
                            ],
                            buttonText: "Get Support",
                            footerText: "Keep your infrastructure optimized."
                        },
                        {
                            icon: <Layers className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "SaaS Products",
                            description: "Comprehensive multi-tenant SaaS development including core architecture and billing systems.",
                            features: [
                                "Multi-Tenant Architecture",
                                "Stripe/Payment Integration",
                                "Full Administrative Suite"
                            ],
                            buttonText: "Build My SaaS",
                            footerText: "Enterprise-level product engineering."
                        },
                        {
                            icon: <Layout className="w-12 h-12 text-brand-primary opacity-20" />,
                            title: "WordPress",
                            description: "Professional WordPress websites optimized for performance, SEO, and easy management.",
                            features: [
                                "Custom Theme Customization",
                                "Speed & SEO Optimization",
                                "Full Content CMS Access"
                            ],
                            buttonText: "Build My Site",
                            footerText: "Fast delivery for local businesses."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative glass p-10 md:p-14 rounded-[3rem] border-brand-primary/30 flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 p-10">
                                {item.icon}
                            </div>

                            <div className="mb-10 min-h-[120px]">
                                <h3 className="text-3xl font-black text-white mb-3 italic tracking-tighter uppercase">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>



                            <div className="space-y-5 mb-12 flex-grow">
                                {item.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                        <span className="text-slate-300 font-bold text-sm tracking-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#lead-form"
                                className="block w-full py-5 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-black text-center text-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(37,99,235,0.3)] mb-6"
                            >
                                {item.buttonText}
                            </a>

                            <p className="text-center text-[10px] text-slate-500 font-black uppercase tracking-widest">
                                {item.footerText}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
