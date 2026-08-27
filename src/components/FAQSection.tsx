"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  className?: string;
  /** Column layout: 1 or 2 (default: 1) */
  columns?: 1 | 2;
}

function FAQItem({
  faq,
  index,
  headingId,
  panelId,
}: {
  faq: FAQ;
  index: number;
  headingId: string;
  panelId: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/60 backdrop-blur-sm hover:border-brand-primary/30 transition-colors"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        id={headingId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 rounded-2xl"
      >
        <span
          itemProp="name"
          className="text-white font-semibold text-sm md:text-base leading-snug"
        >
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-primary shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              itemProp="text"
              className="px-6 pb-5 text-slate-300 text-sm leading-relaxed font-medium"
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  className = "",
  columns = 1,
}: FAQSectionProps) {
  const uid = useId();

  const half = Math.ceil(faqs.length / 2);
  const col1 = columns === 2 ? faqs.slice(0, half) : faqs;
  const col2 = columns === 2 ? faqs.slice(half) : [];

  return (
    <section
      className={`py-20 px-6 ${className}`}
      aria-label="Frequently Asked Questions"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-5xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {columns === 2 ? (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {col1.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  index={i}
                  headingId={`${uid}-q-${i}`}
                  panelId={`${uid}-a-${i}`}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {col2.map((faq, i) => (
                <FAQItem
                  key={i + half}
                  faq={faq}
                  index={i + half}
                  headingId={`${uid}-q-${i + half}`}
                  panelId={`${uid}-a-${i + half}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {col1.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                headingId={`${uid}-q-${i}`}
                panelId={`${uid}-a-${i}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
