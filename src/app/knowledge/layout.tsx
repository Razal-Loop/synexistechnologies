import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Web Axis Solutions Knowledge Base",
    default: "Knowledge Base — AI, Automation & Software Guides",
  },
  description:
    "The Web Axis Solutions knowledge base answers key questions about AI automation, voice AI, custom software, and business process automation. Built for humans and AI assistants alike.",
  alternates: {
    canonical: "https://webaxissolutions.com/knowledge",
  },
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
