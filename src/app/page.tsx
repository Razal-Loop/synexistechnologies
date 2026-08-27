import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Offer from "@/components/Offer";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ProjectTicker from "@/components/ProjectTicker";
import FAQSection from "@/components/FAQSection";

import type { Metadata } from "next";
import {
  breadcrumbSchema,
  howToSchema,
  aggregateRatingSchema,
  faqSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Custom Software, Digital Marketing & Business Automation",
  description:
    "Web Axis Solutions builds production-grade custom software, runs high-performance digital marketing campaigns, and delivers business process automation. Headquartered in Idaho, USA, serving US, UK, and global clients.",
  alternates: {
    canonical: "https://webaxissolutions.com",
  },
};

// ─── GEO-optimized FAQs ──────────────────────────────────────────────────────
const HOME_FAQS = [
  {
    question: "What services does Web Axis Solutions offer?",
    answer:
      "Web Axis Solutions provides custom software development, digital marketing, business process automation, SaaS development, mobile app development, rapid MVP building, social media management, WordPress development, and maintenance & support.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Custom software development typically ranges from $3,000 for MVPs to $50,000+ for enterprise-grade systems. The cost depends on complexity, technology stack, integrations required, and timeline. Contact us for a free project estimate.",
  },
  {
    question: "Can Web Axis Solutions integrate with GoHighLevel?",
    answer:
      "Yes. We build custom integrations with GoHighLevel (GHL) including CRM syncing, webhook automation, pipeline management, and two-way API connections for lead routing and follow-up workflows.",
  },
  {
    question: "Does Web Axis Solutions integrate with HubSpot?",
    answer:
      "Yes. We develop HubSpot integrations for contact syncing, deal automation, lead scoring, and custom CRM workflows. We also build custom HubSpot apps and portal extensions.",
  },
  {
    question: "Can you build AI automation for my business?",
    answer:
      "Yes. We build AI-powered automation workflows using n8n, Zapier, Make (Integromat), and custom APIs. This includes AI lead qualification, automated follow-up sequences, chatbots, and voice AI integrations.",
  },
  {
    question: "Where is Web Axis Solutions headquartered?",
    answer:
      "Web Axis Solutions is headquartered in Garden City, Idaho, USA, at 9169 W State St #2926, serving clients globally with round-the-clock operations.",
  },
  {
    question: "Does Web Axis Solutions work with international clients?",
    answer:
      "Yes. We serve clients across the United States, United Kingdom, Canada, Australia, UAE, and worldwide. Our operations run 24/7 to serve clients across all time zones.",
  },
  {
    question: "How long does it take to build a custom software product?",
    answer:
      "Timeline depends on scope. An MVP can be delivered in 14 days. A full SaaS platform typically takes 2–6 months. A mobile app takes 4–12 weeks. We provide accurate timelines after a discovery call.",
  },
  {
    question: "What technologies does Web Axis Solutions use?",
    answer:
      "We use React, Next.js, Node.js, Python, Flutter, React Native, PostgreSQL, MongoDB, AWS, Supabase, Vercel, Docker, and modern AI APIs including OpenAI, ElevenLabs, and Twilio for voice AI.",
  },
  {
    question: "Can Web Axis Solutions run my digital marketing campaigns?",
    answer:
      "Yes. We run performance marketing campaigns on Facebook, Instagram, Google, TikTok, and LinkedIn. Our services include audience research, ad creative production, A/B testing, and monthly reporting.",
  },
  {
    question: "What is business process automation?",
    answer:
      "Business process automation (BPA) uses software to handle repetitive tasks — such as lead follow-up, appointment booking, invoice generation, and data entry — without human intervention. Web Axis Solutions builds these workflows using tools like n8n, Zapier, and custom APIs.",
  },
  {
    question: "Can you build a SaaS product from scratch?",
    answer:
      "Yes. We build multi-tenant SaaS platforms including user authentication, role-based access, billing (Stripe), admin dashboards, API layers, and deployment infrastructure. We handle everything from architecture to launch.",
  },
  {
    question: "Do you offer maintenance and support after project delivery?",
    answer:
      "Yes. We offer ongoing maintenance plans including bug fixes, security updates, performance optimization, and technical support. Plans are available monthly or annually.",
  },
  {
    question: "Can Web Axis Solutions build a mobile app?",
    answer:
      "Yes. We build cross-platform iOS and Android applications using React Native and Flutter. Our process includes UI/UX design, development, testing, and App Store / Google Play submission.",
  },
  {
    question: "How does Web Axis Solutions handle data security?",
    answer:
      "We follow industry security standards including encrypted data storage, HTTPS enforcement, role-based access control, regular security audits, and GDPR-compliant data handling practices.",
  },
  {
    question: "What is a Rapid MVP and how quickly can it be built?",
    answer:
      "A Rapid MVP is a working, deployable version of your software product with core features only. Web Axis Solutions delivers MVPs in 14 days using a structured sprint process — from requirements to live deployment.",
  },
  {
    question: "Does Web Axis Solutions do SEO?",
    answer:
      "Yes. Our digital marketing service includes technical SEO audits, on-page optimization, content strategy, backlink building, and Core Web Vitals performance improvements.",
  },
  {
    question: "Can Web Axis Solutions build WordPress websites?",
    answer:
      "Yes. We build professional WordPress websites with custom theme development, WooCommerce integration, speed optimization, SEO setup, and full content management system access.",
  },
  {
    question: "How do I get started with Web Axis Solutions?",
    answer:
      "Fill out the contact form on our website or email contact@webaxissolutions.com. We'll schedule a free discovery call to understand your requirements and provide a project proposal within 24 hours.",
  },
  {
    question: "Does Web Axis Solutions offer social media management?",
    answer:
      "Yes. We provide full social media management including content creation, scheduling, community engagement, and strategic brand voice development for Instagram, LinkedIn, Facebook, and TikTok.",
  },
];

// ─── Page-level schemas ───────────────────────────────────────────────────────
const PAGE_SCHEMAS = [
  breadcrumbSchema([{ name: "Home", url: "https://webaxissolutions.com" }]),
  howToSchema({
    name: "How to Get Started with Web Axis Solutions",
    description:
      "Start your software, marketing, or automation project with Web Axis Solutions in 3 steps.",
    steps: [
      {
        name: "Submit Your Project Brief",
        text: "Fill out the contact form with your project requirements, timeline, and goals. You can also email contact@webaxissolutions.com.",
      },
      {
        name: "Free Discovery Call",
        text: "Our team schedules a free 30-minute discovery call to understand your requirements, answer questions, and assess technical feasibility.",
      },
      {
        name: "Receive a Proposal",
        text: "Within 24 hours of the call, you receive a detailed project proposal including scope, timeline, technology stack, and pricing.",
      },
      {
        name: "Project Kickoff",
        text: "Upon agreement, we begin your project with a structured kickoff meeting, assign a dedicated team, and establish your communication channel.",
      },
    ],
    totalTime: "PT48H",
  }),
  aggregateRatingSchema({
    ratingValue: 4.9,
    reviewCount: 47,
    itemName: "Web Axis Solutions",
  }),
  faqSchema(HOME_FAQS),
];

export default function Home() {
  return (
    <main className="relative">
      {/* Page-level JSON-LD schemas */}
      {PAGE_SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />
      <Hero />
      <ProjectTicker />
      <div className="relative z-10 bg-background">
        <AboutUs />
        <Offer />
        <Services />
        <LeadForm />
        <FAQSection
          faqs={HOME_FAQS}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Web Axis Solutions."
          columns={2}
          className="bg-slate-950/50"
        />
      </div>
      <Footer />

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(139,92,246,0.05)_0%,transparent_50%)]" />
      </div>
    </main>
  );
}
