import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Mic, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is Voice AI?",
  description:
    "Voice AI is software that understands spoken language and responds intelligently — enabling businesses to automate phone calls, handle customer support, book appointments, and qualify leads without human operators.",
  alternates: {
    canonical: "https://webaxissolutions.com/knowledge/what-is-voice-ai",
  },
  openGraph: {
    title: "What Is Voice AI? | Web Axis Solutions",
    description:
      "Voice AI automates phone calls, support, and appointment booking using natural language understanding and speech synthesis.",
    url: "https://webaxissolutions.com/knowledge/what-is-voice-ai",
  },
};

const FAQS = [
  {
    question: "What is Voice AI?",
    answer:
      "Voice AI is software that can understand spoken human language (via Automatic Speech Recognition) and respond in natural-sounding speech (via Text-to-Speech). It enables machines to hold real conversations over phone calls, smart speakers, and voice interfaces.",
  },
  {
    question: "What is Voice AI used for in business?",
    answer:
      "Businesses use Voice AI for automated phone answering, appointment booking, lead qualification, customer support, IVR replacement, outbound call campaigns, and missed-call recovery. It reduces staff workload while maintaining 24/7 availability.",
  },
  {
    question: "How does Voice AI understand what someone is saying?",
    answer:
      "Voice AI uses Automatic Speech Recognition (ASR) to convert speech to text, then Natural Language Understanding (NLU) to determine intent and extract key information from the transcript. Models like OpenAI Whisper or Google Speech-to-Text handle this layer.",
  },
  {
    question: "How does Voice AI respond?",
    answer:
      "Once the AI understands the caller's intent, it generates a response using a Large Language Model (LLM) like GPT-4, then converts that response to speech using Text-to-Speech (TTS) engines like ElevenLabs or OpenAI TTS. The result sounds like a natural human voice.",
  },
  {
    question: "What is latency in Voice AI?",
    answer:
      "Latency is the delay between when a caller finishes speaking and when the AI responds. Modern voice AI systems achieve sub-500ms response latency using streaming ASR and TTS pipelines, making conversations feel natural rather than robotic.",
  },
  {
    question: "Can Voice AI replace a human receptionist?",
    answer:
      "For structured, high-volume tasks — answering calls, booking appointments, qualifying leads — yes. Voice AI handles these better than humans at scale. For complex empathy-heavy situations, it can warm-transfer to a human agent.",
  },
  {
    question: "What APIs are used to build Voice AI systems?",
    answer:
      "Common APIs include: OpenAI Realtime API or GPT-4 (LLM layer), ElevenLabs or OpenAI TTS (voice synthesis), Deepgram or Whisper (speech recognition), and Twilio or Vonage (telephony/call routing).",
  },
  {
    question: "Is Voice AI secure?",
    answer:
      "Reputable Voice AI systems use encrypted calls (TLS), minimal data retention policies, and can be configured for HIPAA compliance (healthcare) or GDPR compliance (EU). Always verify data handling policies with your vendor.",
  },
  {
    question: "Can Voice AI make outbound calls?",
    answer:
      "Yes. Voice AI can be configured for outbound calling — such as appointment reminders, lead follow-up campaigns, payment reminders, or survey calls. Outbound campaigns require compliance with TCPA (US) or similar regulations.",
  },
  {
    question: "How much does Voice AI cost?",
    answer:
      "Voice AI costs include API fees (per-minute for LLM + TTS + ASR), telephony costs (per-minute for calls), and development/integration costs. Ongoing costs typically range from $0.05–$0.25 per call-minute. Custom builds from Web Axis Solutions start around $1,500.",
  },
  {
    question: "What is the OpenAI Voice API?",
    answer:
      "The OpenAI Realtime API enables real-time voice conversations with GPT-4 with low latency. It handles both speech input and output in a single streaming pipeline, making it ideal for AI receptionist and call automation applications.",
  },
  {
    question: "Does Web Axis Solutions build Voice AI systems?",
    answer:
      "Yes. Web Axis Solutions builds custom Voice AI systems using OpenAI Realtime API, ElevenLabs, Twilio, and n8n. We handle design, integration, and deployment. Contact contact@webaxissolutions.com.",
  },
];

const PAGE_SCHEMAS = [
  breadcrumbSchema([
    { name: "Home", url: "https://webaxissolutions.com" },
    { name: "Knowledge Base", url: "https://webaxissolutions.com/knowledge" },
    { name: "What Is Voice AI?", url: "https://webaxissolutions.com/knowledge/what-is-voice-ai" },
  ]),
  articleSchema({
    headline: "What Is Voice AI?",
    description:
      "Voice AI is software that understands spoken language and responds intelligently — enabling businesses to automate phone calls, support, and appointment booking.",
    url: "https://webaxissolutions.com/knowledge/what-is-voice-ai",
    datePublished: "2026-01-15",
    dateModified: "2026-07-30",
  }),
  faqSchema(FAQS),
];

const STACK = [
  { layer: "Telephony", example: "Twilio, Vonage", desc: "Routes incoming/outgoing calls to the AI" },
  { layer: "Speech-to-Text (ASR)", example: "Deepgram, Whisper", desc: "Converts caller's speech to text" },
  { layer: "AI Brain (LLM)", example: "GPT-4, Llama", desc: "Understands intent and generates response" },
  { layer: "Text-to-Speech (TTS)", example: "ElevenLabs, OpenAI TTS", desc: "Converts AI response back to speech" },
  { layer: "Automation", example: "n8n, Zapier", desc: "Triggers CRM updates, SMS, bookings" },
];

export default function WhatIsVoiceAIPage() {
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
            { label: "What Is Voice AI?", href: "/knowledge/what-is-voice-ai" },
          ]}
          className="mb-8"
        />

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
              <Mic className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">
              Voice AI
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            What Is <span className="text-brand-primary">Voice AI?</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed font-medium">
            Voice AI is software that understands spoken human language and
            responds with natural-sounding speech — enabling businesses to
            automate phone calls, customer support, appointment booking, and
            lead qualification without human operators.
          </p>
        </header>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">
            How Voice AI Works (The Tech Stack)
          </h2>
          <div className="space-y-3">
            {STACK.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 text-brand-primary text-xs font-black">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-bold text-sm">{item.layer}</span>
                    <span className="text-slate-500 text-xs">({item.example})</span>
                  </div>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Use Cases */}
        <section className="mb-12 p-8 rounded-3xl bg-slate-950/60 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-2xl font-black text-white mb-4">
            Business Use Cases for Voice AI
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "24/7 phone answering — no missed calls",
              "Appointment booking via voice",
              "Lead qualification during calls",
              "Outbound reminder campaigns",
              "Missed-call recovery automation",
              "Customer support IVR replacement",
              "Insurance lead intake calls",
              "Healthcare appointment scheduling",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/20 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Build a Voice AI System for Your Business
          </h2>
          <p className="text-slate-300 mb-6 font-medium">
            Web Axis Solutions designs and deploys custom Voice AI call systems using OpenAI,
            ElevenLabs, and Twilio.
          </p>
          <Link
            href="/#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold transition-all hover:scale-105"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        <FAQSection faqs={FAQS} title="Voice AI FAQs" columns={1} className="px-0" />

        <nav aria-label="Related articles" className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-lg font-black text-white mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "What Is an AI Receptionist?", href: "/knowledge/what-is-an-ai-receptionist" },
              { label: "AI vs Call Centers", href: "/knowledge/ai-vs-traditional-call-centers" },
              { label: "Missed-Call Recovery", href: "/knowledge/how-does-missed-call-recovery-work" },
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
