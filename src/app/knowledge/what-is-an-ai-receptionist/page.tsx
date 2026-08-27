import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import {
  breadcrumbSchema,
  articleSchema,
  faqSchema,
  howToSchema,
} from "@/lib/schema";
import { Phone, CheckCircle2, ArrowRight, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is an AI Receptionist?",
  description:
    "An AI receptionist answers every incoming phone call, books appointments, qualifies leads, and integrates with CRM systems — automatically, 24 hours a day, 7 days a week.",
  alternates: {
    canonical: "https://webaxissolutions.com/knowledge/what-is-an-ai-receptionist",
  },
  openGraph: {
    title: "What Is an AI Receptionist? | Web Axis Solutions",
    description:
      "An AI receptionist answers calls, books appointments, and qualifies leads 24/7 — without a human operator.",
    url: "https://webaxissolutions.com/knowledge/what-is-an-ai-receptionist",
  },
};

const FAQS = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is software that answers incoming phone calls using voice AI, handles caller inquiries, books appointments, qualifies leads, and routes calls to humans when needed — all automatically and without a human operator.",
  },
  {
    question: "Can an AI receptionist answer calls 24/7?",
    answer:
      "Yes. An AI receptionist operates continuously, 24 hours a day, 7 days a week, including weekends and holidays. It never misses a call and responds instantly.",
  },
  {
    question: "Can an AI receptionist book appointments?",
    answer:
      "Yes. AI receptionists can integrate with calendar systems (Google Calendar, Calendly, GoHighLevel, etc.) and book appointments directly during the call, without human involvement.",
  },
  {
    question: "Can an AI receptionist transfer calls to humans?",
    answer:
      "Yes. When a caller's request requires a human agent — such as a complex complaint or a high-value deal — the AI receptionist can warm-transfer the call to a live team member in real time.",
  },
  {
    question: "Can it qualify leads during the call?",
    answer:
      "Yes. The AI asks qualification questions during the call (budget, timeline, service interest, location, etc.) and scores leads before routing or booking them. Only qualified prospects advance.",
  },
  {
    question: "Does it integrate with GoHighLevel?",
    answer:
      "Yes. Web Axis Solutions builds AI receptionist systems that integrate with GoHighLevel for CRM syncing, pipeline updates, and automated follow-up sequences triggered by call outcomes.",
  },
  {
    question: "Can it send SMS after a call?",
    answer:
      "Yes. After a call, the AI can automatically send confirmation SMS, follow-up messages, booking links, or nurture sequences via Twilio, GoHighLevel, or similar platforms.",
  },
  {
    question: "How much does an AI receptionist cost?",
    answer:
      "Pricing depends on call volume, integrations, and features. Basic implementations start around $300–$800/month. Custom enterprise builds with CRM integration and lead qualification can range from $2,000–$5,000 setup plus monthly fees.",
  },
  {
    question: "Is it secure to use voice AI for sensitive calls?",
    answer:
      "Yes. AI receptionist systems use encrypted calls, do not store personal data beyond what's required, and can be configured for HIPAA or GDPR compliance depending on the use case.",
  },
  {
    question: "What industries use AI receptionists?",
    answer:
      "AI receptionists are used in healthcare (clinics, dental offices), real estate, legal services, home services (HVAC, plumbing), insurance agencies, e-commerce, and any business that receives high call volume.",
  },
  {
    question: "Can it work with HubSpot?",
    answer:
      "Yes. AI receptionist call data — caller name, outcome, appointment scheduled, lead score — can be pushed to HubSpot via Zapier, n8n, or direct API integration.",
  },
  {
    question: "What voice does the AI receptionist use?",
    answer:
      "Modern AI receptionists use ultra-realistic voices from providers like ElevenLabs, OpenAI TTS, or PlayHT. The voice can be customized to match your brand tone — male, female, neutral, accent, etc.",
  },
  {
    question: "How long does it take to set up an AI receptionist?",
    answer:
      "A basic AI receptionist can be set up in 3–7 business days. A fully custom system with CRM integration, lead qualification logic, multi-location routing, and SMS follow-up typically takes 2–4 weeks.",
  },
  {
    question: "Can an AI receptionist handle HVAC company calls?",
    answer:
      "Yes. AI receptionists are particularly effective for HVAC companies — they handle seasonal call spikes, book service appointments, collect address and issue details, and route emergency calls to on-call technicians.",
  },
  {
    question: "Does Web Axis Solutions build AI receptionist systems?",
    answer:
      "Yes. Web Axis Solutions designs and builds custom AI receptionist systems using OpenAI Realtime API, ElevenLabs, Twilio, and n8n automation. Contact us at contact@webaxissolutions.com to discuss your requirements.",
  },
];

const PAGE_SCHEMAS = [
  breadcrumbSchema([
    { name: "Home", url: "https://webaxissolutions.com" },
    { name: "Knowledge Base", url: "https://webaxissolutions.com/knowledge" },
    {
      name: "What Is an AI Receptionist?",
      url: "https://webaxissolutions.com/knowledge/what-is-an-ai-receptionist",
    },
  ]),
  articleSchema({
    headline: "What Is an AI Receptionist?",
    description:
      "An AI receptionist answers every incoming phone call, books appointments, qualifies leads, and integrates with CRM systems — automatically and 24/7.",
    url: "https://webaxissolutions.com/knowledge/what-is-an-ai-receptionist",
    datePublished: "2026-01-15",
    dateModified: "2026-07-30",
  }),
  faqSchema(FAQS),
  howToSchema({
    name: "How an AI Receptionist Handles a Phone Call",
    description:
      "Step-by-step breakdown of how an AI receptionist processes an inbound call from answer to CRM update.",
    steps: [
      {
        name: "Call Is Received",
        text: "When a customer calls, the AI receptionist answers within 1–2 seconds — no hold music, no voicemail.",
      },
      {
        name: "AI Identifies Intent",
        text: "The AI uses natural language processing to understand what the caller wants — appointment, quote, support, or information.",
      },
      {
        name: "Qualification Questions",
        text: "The AI asks qualifying questions to assess budget, location, urgency, and service need.",
      },
      {
        name: "Action Is Taken",
        text: "Based on responses, the AI books an appointment, transfers to a human, or captures lead data and schedules a callback.",
      },
      {
        name: "CRM Is Updated",
        text: "Call outcome, lead data, and booking details are automatically pushed to the CRM (GoHighLevel, HubSpot, Salesforce, etc.).",
      },
      {
        name: "Follow-Up Is Sent",
        text: "The caller receives a confirmation SMS or email. Automated follow-up sequences may also be triggered.",
      },
    ],
  }),
];

export default function WhatIsAIReceptionistPage() {
  return (
    <main className="pt-32 pb-20 px-6 relative z-10">
      {PAGE_SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/8 blur-[130px] rounded-full pointer-events-none -z-10" />

      <article className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Knowledge Base", href: "/knowledge" },
            { label: "What Is an AI Receptionist?", href: "/knowledge/what-is-an-ai-receptionist" },
          ]}
          className="mb-8"
        />

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">
              Voice AI
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            What Is an{" "}
            <span className="text-brand-primary">AI Receptionist?</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed font-medium">
            An AI receptionist is software that answers every incoming phone
            call, books appointments, qualifies leads, and integrates with CRM
            systems — automatically, 24 hours a day, 7 days a week, without a
            human operator.
          </p>
        </header>

        {/* Definition Block */}
        <section className="mb-12 p-8 rounded-3xl bg-slate-950/60 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-2xl font-black text-white mb-4">The Short Answer</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Traditional receptionist: a human who answers the phone during
            business hours, takes messages, and books appointments manually.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            AI receptionist: software that does the same thing — instantly,
            at scale, with zero wait time — at any hour of the day.
          </p>
          <p className="text-slate-300 leading-relaxed">
            It uses <strong className="text-white">Voice AI</strong> (natural
            language processing + text-to-speech) to have real conversations
            with callers, understand their intent, and take action — booking,
            qualifying, routing, or following up.
          </p>
        </section>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">
            What an AI Receptionist Does
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Answers every call within 2 seconds",
              "Books appointments directly on your calendar",
              "Qualifies leads with custom questions",
              "Routes calls to human agents when needed",
              "Sends confirmation SMS to callers",
              "Syncs all data to your CRM",
              "Handles call spikes without wait times",
              "Operates 24/7 including weekends",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-slate-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-12 p-8 rounded-3xl bg-slate-950/60 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-2xl font-black text-white mb-4">
            Industries That Use AI Receptionists
          </h2>
          <ul className="text-slate-300 space-y-2 leading-relaxed">
            {[
              "HVAC & home services — handle seasonal call spikes",
              "Healthcare & dental — HIPAA-compliant appointment booking",
              "Real estate — qualify buyer/seller intent, book showings",
              "Legal services — intake calls, conflict checks",
              "Insurance agencies — lead qualification & callback scheduling",
              "E-commerce — order status, returns, and support routing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16 p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/20 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Want an AI Receptionist for Your Business?
          </h2>
          <p className="text-slate-300 mb-6 font-medium">
            Web Axis Solutions builds custom AI receptionist systems with CRM
            integration, lead qualification, and SMS follow-up.
          </p>
          <Link
            href="/#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold transition-all hover:scale-105"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* FAQs */}
        <FAQSection
          faqs={FAQS}
          title="AI Receptionist FAQs"
          columns={1}
          className="px-0"
        />

        {/* Related Articles */}
        <nav aria-label="Related articles" className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-lg font-black text-white mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "What Is Voice AI?", href: "/knowledge/what-is-voice-ai" },
              {
                label: "How Missed-Call Recovery Works",
                href: "/knowledge/how-does-missed-call-recovery-work",
              },
              {
                label: "AI vs Call Centers",
                href: "/knowledge/ai-vs-traditional-call-centers",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:text-brand-primary hover:border-brand-primary/40 text-sm font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </article>
    </main>
  );
}
