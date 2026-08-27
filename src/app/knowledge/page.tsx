import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { breadcrumbSchema } from "@/lib/schema";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Base — AI, Software & Automation Guides",
  description:
    "Explore Web Axis Solutions' knowledge base. Find clear answers to questions about AI receptionists, voice AI, business automation, custom software costs, and more.",
  alternates: {
    canonical: "https://webaxissolutions.com/knowledge",
  },
  openGraph: {
    title: "Knowledge Base | Web Axis Solutions",
    description:
      "Structured, factual guides on AI automation, voice AI, custom software, and business process automation.",
    url: "https://webaxissolutions.com/knowledge",
  },
};

const ARTICLES = [
  {
    href: "/knowledge/what-is-an-ai-receptionist",
    title: "What Is an AI Receptionist?",
    description:
      "An AI receptionist answers every incoming phone call, books appointments, qualifies leads, and integrates with CRM systems — automatically, 24/7.",
    tag: "Voice AI",
  },
  {
    href: "/knowledge/what-is-voice-ai",
    title: "What Is Voice AI?",
    description:
      "Voice AI is software that understands spoken language and responds intelligently — enabling hands-free automation of phone calls, support, and scheduling.",
    tag: "Voice AI",
  },
  {
    href: "/knowledge/what-is-business-process-automation",
    title: "What Is Business Process Automation?",
    description:
      "Business process automation (BPA) uses software to execute repetitive tasks — like follow-ups, data entry, and routing — without human involvement.",
    tag: "Automation",
  },
  {
    href: "/knowledge/how-does-missed-call-recovery-work",
    title: "How Does Missed-Call Recovery Work?",
    description:
      "Missed-call recovery automatically detects unanswered calls and triggers an SMS or callback workflow to re-engage the lead before they go elsewhere.",
    tag: "Automation",
  },
  {
    href: "/knowledge/ai-vs-traditional-call-centers",
    title: "AI vs Traditional Call Centers",
    description:
      "A direct comparison of AI-powered call handling versus traditional human call centers — cost, speed, availability, and accuracy.",
    tag: "AI",
  },
  {
    href: "/knowledge/how-much-does-custom-software-cost",
    title: "How Much Does Custom Software Development Cost?",
    description:
      "Custom software typically costs $3,000–$150,000+ depending on scope, tech stack, integrations, and timeline. This guide breaks down every factor.",
    tag: "Software",
  },
];

const PAGE_SCHEMAS = [
  breadcrumbSchema([
    { name: "Home", url: "https://webaxissolutions.com" },
    { name: "Knowledge Base", url: "https://webaxissolutions.com/knowledge" },
  ]),
];

export default function KnowledgeIndexPage() {
  return (
    <main className="pt-32 pb-20 px-6 relative z-10">
      {PAGE_SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Knowledge Base", href: "/knowledge" },
          ]}
          className="mb-8"
        />

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">
              Knowledge Base
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            AI, Software &{" "}
            <span className="text-brand-primary">Automation Guides</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl font-medium leading-relaxed">
            Structured, factual answers to the questions businesses ask most.
            Written for humans — and cited by AI assistants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group p-8 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-brand-primary/40 backdrop-blur-sm transition-all hover:-translate-y-1 block"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest">
                  {article.tag}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
              <h2 className="text-lg font-black text-white mb-3 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
