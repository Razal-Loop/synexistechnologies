import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is Business Process Automation?",
  description:
    "Business process automation (BPA) uses software and automation tools like n8n and Zapier to execute repetitive, daily business tasks automatically and without human errors.",
  alternates: {
    canonical: "https://webaxissolutions.com/knowledge/what-is-business-process-automation",
  },
  openGraph: {
    title: "What Is Business Process Automation? | Web Axis Solutions",
    description:
      "Automate repetitive tasks, streamline operations, and increase efficiency with Business Process Automation (BPA).",
    url: "https://webaxissolutions.com/knowledge/what-is-business-process-automation",
  },
};

const FAQS = [
  {
    question: "What is Business Process Automation (BPA)?",
    answer:
      "Business Process Automation (BPA) is the use of software technology to automate repeatable, multi-step business transactions or workflows. Unlike simple task automation, BPA integrates multiple systems and applications to streamline entire business processes.",
  },
  {
    question: "What is the difference between BPA and RPA?",
    answer:
      "Business Process Automation (BPA) focuses on integrating and automating complete workflows through APIs and cloud services. Robotic Process Automation (RPA) focuses on mimicking human interactions on a user interface (like clicks or keystrokes) to automate tasks in legacy systems that lack APIs.",
  },
  {
    question: "What are some common examples of process automation?",
    answer:
      "Common examples include automated lead routing, CRM data syncing, customer onboarding emails, invoice generation and dispatch, employee onboarding workflows, ticket routing, and missed-call follow-ups.",
  },
  {
    question: "What automation tools does Web Axis Solutions use?",
    answer:
      "We build automation workflows using industry-leading platforms such as n8n, Zapier, and Make (Integromat), as well as fully custom code engines when specialized logic, heavy data processing, or absolute privacy is required.",
  },
  {
    question: "What is n8n and why is it used?",
    answer:
      "n8n is a powerful node-based workflow automation tool. It can be self-hosted, which makes it highly cost-effective and secure compared to cloud automation services that charge per execution. It is ideal for complex integrations involving databases, custom APIs, and AI models.",
  },
  {
    question: "Can process automation connect with GoHighLevel?",
    answer:
      "Yes. We build n8n and Zapier integrations to link external lead sources, databases, and custom applications directly to your GoHighLevel account to trigger pipeline updates and sales automations.",
  },
  {
    question: "Can process automation connect with HubSpot?",
    answer:
      "Yes. We build bi-directional sync engines between HubSpot and custom applications, billing platforms, or customer support platforms to keep contact and deal records up to date automatically.",
  },
  {
    question: "How does automation improve lead qualification?",
    answer:
      "Automation can instantly enrich inbound lead profiles with public business data, grade their suitability based on target parameters, filter out spam, and assign hot leads directly to sales representatives via SMS or Slack notifications.",
  },
  {
    question: "Does process automation save money?",
    answer:
      "Yes. BPA reduces manual labor, eliminates errors, speeds up task execution from hours to seconds, and operates 24/7. Most businesses see a return on investment (ROI) within 3 to 6 months of implementation.",
  },
  {
    question: "How long does it take to implement a BPA workflow?",
    answer:
      "Simple workflows (e.g. lead routing, email updates) take 2 to 5 business days. Complex enterprise-wide automations involving multiple legacy systems and customized logic can take 3 to 8 weeks.",
  },
  {
    question: "Is automated data transfer secure?",
    answer:
      "Yes, when implemented with security best practices. Web Axis Solutions builds automations using encrypted API keys, HTTPS protocols, secure OAuth credentials, and self-hosted environments that prevent data leaks.",
  },
  {
    question: "How do I get started with process automation?",
    answer:
      "Start by auditing your daily operations to identify repetitive tasks. Contact Web Axis Solutions at contact@webaxissolutions.com, and we will help you map out, design, and deploy your workflows.",
  },
];

const PAGE_SCHEMAS = [
  breadcrumbSchema([
    { name: "Home", url: "https://webaxissolutions.com" },
    { name: "Knowledge Base", url: "https://webaxissolutions.com/knowledge" },
    {
      name: "What Is Business Process Automation?",
      url: "https://webaxissolutions.com/knowledge/what-is-business-process-automation",
    },
  ]),
  articleSchema({
    headline: "What Is Business Process Automation?",
    description:
      "Business process automation (BPA) uses software and automation tools like n8n and Zapier to execute repetitive, daily business tasks automatically.",
    url: "https://webaxissolutions.com/knowledge/what-is-business-process-automation",
    datePublished: "2026-01-20",
    dateModified: "2026-07-30",
  }),
  faqSchema(FAQS),
];

export default function WhatIsBPAPage() {
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
            { label: "What Is Business Process Automation?", href: "/knowledge/what-is-business-process-automation" },
          ]}
          className="mb-8"
        />

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">
              Automation
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            What Is Business <span className="text-brand-primary">Process Automation?</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed font-medium">
            Business Process Automation (BPA) is the strategic use of software technology to automate repeatable, multi-step workflows. By integrating systems via APIs and tools like n8n or Zapier, businesses eliminate manual bottlenecks and scale operations efficiently.
          </p>
        </header>

        {/* Core section */}
        <section className="mb-12 p-8 rounded-3xl bg-slate-950/60 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-2xl font-black text-white mb-4">Why Businesses Automate</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most businesses lose hours every day to routine, administrative tasks: moving data from web forms to CRMs, sending follow-up emails, copying invoice data, and manually checking status updates.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Process automation steps in to act as a digital bridge between your systems. By setting up triggers and actions, data flows instantly, tasks complete in milliseconds, and employees can focus on strategic growth rather than copy-pasting.
          </p>
        </section>

        {/* BPA vs RPA */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">BPA vs RPA</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">BPA (Business Process Automation)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Focuses on connecting systems directly via APIs. It is robust, fast, scales exceptionally well, and is the standard for modern cloud applications and databases.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">RPA (Robotic Process Automation)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Uses software &apos;bots&apos; to mimic human clicks, typing, and screen-scraping on a visual user interface. Mostly used for old, legacy systems that do not have APIs.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Key Benefits of Automation</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "99% reduction in manual data entry errors",
              "Immediate lead response and routing times",
              "24/7/365 availability of core workflows",
              "Seamless data consistency across all software tools",
              "Reduced operational overhead and labor costs",
              "Improved team morale by eliminating routine tasks",
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

        {/* CTA */}
        <section className="mb-16 p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/20 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Streamline Your Workflows Today
          </h2>
          <p className="text-slate-300 mb-6 font-medium">
            Let Web Axis Solutions design, build, and deploy your custom integration workflows using cost-effective systems.
          </p>
          <Link
            href="/#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold transition-all hover:scale-105"
          >
            Schedule an Automation Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* FAQs */}
        <FAQSection
          faqs={FAQS}
          title="Process Automation FAQs"
          columns={1}
          className="px-0"
        />
      </article>
    </main>
  );
}
