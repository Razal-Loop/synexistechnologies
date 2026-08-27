import type { Metadata } from "next";
import { jobPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers — Join Web Axis Solutions",
  description:
    "Explore career opportunities at Web Axis Solutions. Join our team of experts in software engineering, sales, and digital marketing. Open positions in Rawalpindi, Pakistan.",
  alternates: {
    canonical: "https://webaxissolutions.com/careers",
  },
  openGraph: {
    title: "Careers — Join Web Axis Solutions",
    description:
      "Open positions at Web Axis Solutions — software engineers, sales closers, appointment setters, and digital marketers.",
    url: "https://webaxissolutions.com/careers",
  },
};

// ─── JobPosting schemas ───────────────────────────────────────────────────────
const JOB_SCHEMAS = [
  jobPostingSchema({
    title: "Software Project Closer (Sales)",
    description:
      "Expert negotiation and closing skills required for managing high-value software project deals and enterprise solutions. You will own the full sales cycle from qualification to close for custom software, SaaS, and marketing engagements.",
    datePosted: "2026-01-01",
    employmentType: "FULL_TIME",
    addressLocality: "Rawalpindi",
  }),
  jobPostingSchema({
    title: "Appointment Setter",
    description:
      "Engage with prospects, manage scheduling, and set up qualified appointments for our closing team. Strong communication skills required. Multiple positions available.",
    datePosted: "2026-01-01",
    employmentType: "FULL_TIME",
    addressLocality: "Rawalpindi",
  }),
];

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {JOB_SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
