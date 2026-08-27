export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  stats: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Synexis Digital Tools",
    category: "Software",
    description:
      "High-performance, privacy-first developer toolkit ecosystem. 100% client-side browser tools for JSON formatting, code beautification, security utilities, encoding, and more.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    tags: ["Developer Tools", "Client-Side", "Privacy-First"],
    stats: "50+ Free Tools",
    link: "https://www.synexisdigital.com/",
  },
  {
    title: "ComplDoc",
    category: "Software",
    description:
      "Expert technical compliance and regulatory documentation platform for the EU AI Act, government tenders, and aviation operating manuals.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
    tags: ["Regulatory", "Compliance", "Documentation"],
    stats: "Audit-Ready Expositions",
    link: "https://www.compldoc.com/",
  },
  {
    title: "MyMeds Pharmacy",
    category: "Software",
    description:
      "A full-scale pharmaceutical e-commerce and telehealth platform. Engineered for secure prescription handling, real-time inventory, and seamless patient onboarding.",
    image: "/portfolio_pharmacy_mockup.png",
    tags: ["Web App", "E-commerce", "HIPAA Logic"],
    stats: "Enterprise Telehealth Launch",
    link: "https://mymedspharmacyinc.com",
  },
  {
    title: "Speckles Limited",
    category: "Software",
    description:
      "A premium corporate website for a UK care home group. Designed to convey trust, heritage, and excellence in residential care services.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    tags: ["Web Design", "UI/UX", "Corporate"],
    stats: "UK Market Expansion",
    link: "https://speckleslimited.co.uk",
  },
  {
    title: "Speckles CareHomes",
    category: "Software",
    description:
      "An AI-integrated enterprise web application for managing patient trajectories and institutional intelligence in the care sector.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000",
    tags: ["AI Integration", "SaaS", "Data Intelligence"],
    stats: "AI-Driven Efficiency",
    link: "https://specklescarehomes.co.uk",
  },
  {
    title: "Armour Apparels",
    category: "Digital Marketing",
    description:
      "A high-performance e-commerce WordPress website for a premium apparel brand. Focused on conversion-centric design and mobile-first experience.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2000",
    tags: ["WordPress", "E-commerce", "Branding"],
    stats: "Conversion Optimized",
    link: "https://armourapparels.com",
  },
  {
    title: "XtraProfit",
    category: "Digital Marketing",
    description:
      "A high-conversion financial growth platform. Built with advanced funnel logic to capture high-net-worth investors and trading prospects.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000",
    tags: ["FinTech", "Lead Gen", "Marketing"],
    stats: "Finance Vertical Scale",
    link: "https://xtraprofit.com",
  },
  {
    title: "Global Reach Ads",
    category: "Digital Marketing",
    description:
      "Scale-focused marketing funnel for a major insurance aggregator. Optimized for low CPL and high-intent lead generation.",
    image: "/portfolio_marketing_mockup.png",
    tags: ["Meta Ads", "Google Ads", "Conversion Optimization"],
    stats: "$2.4M Generated Revenue",
    link: "#",
  },
  {
    title: "ZAAR",
    category: "Software",
    description:
      "Bringing Greenery to Every Home in Pakistan. A sustainable plant e-commerce platform promoting eco-friendly living — from sourcing to doorstep delivery — with integrated plant care education.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=2000",
    tags: ["E-commerce", "Sustainability", "Pakistan"],
    stats: "Nationwide Green Launch",
    link: "https://zaarpk.com",
  },
];
