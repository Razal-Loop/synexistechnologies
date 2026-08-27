/**
 * Schema.org structured data utilities for Web Axis Solutions
 * Single source of truth for all JSON-LD markup across the site.
 * https://webaxissolutions.com
 */

export const SITE = {
  name: "Web Axis Solutions",
  legalName: "Web Axis Solutions",
  url: "https://webaxissolutions.com",
  logo: "https://webaxissolutions.com/logo.png",
  email: "contact@webaxissolutions.com",
  telephone: "+1-208-000-0000",
  description:
    "Web Axis Solutions builds custom software, runs high-performance digital marketing campaigns, and delivers business process automation for agencies and enterprises globally.",
  addressCountry: "US",
  addressLocality: "Garden City",
  addressRegion: "ID",
  streetAddress: "9169 W State St #2926",
  postalCode: "83714",
  sameAs: [
    "https://www.linkedin.com/company/web-axis-solutions/",
    "https://www.instagram.com/webaxis_solutions/",
    "https://www.goodfirms.co/company/web-axis-solutions",
  ],
} as const;

// ─── Organization ───────────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 200,
      height: 200,
    },
    image: SITE.logo,
    description: SITE.description,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE.addressCountry,
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      streetAddress: SITE.streetAddress,
      postalCode: SITE.postalCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: ["US", "GB", "PK", "AE", "CA", "AU"],
    },
    sameAs: SITE.sameAs,
    foundingDate: "2023",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "10-50" },
    knowsAbout: [
      "Custom Software Development",
      "Digital Marketing",
      "Business Process Automation",
      "SaaS Development",
      "Mobile App Development",
      "SEO",
      "AI Integration",
      "Web Application Development",
    ],
  };
}

// ─── WebSite with SearchAction ───────────────────────────────────────────────

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/knowledge?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── WebPage ────────────────────────────────────────────────────────────────

export function webPageSchema({
  url,
  name,
  description,
  breadcrumb,
}: {
  url: string;
  name: string;
  description: string;
  breadcrumb?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    publisher: { "@id": `${SITE.url}/#organization` },
    ...(breadcrumb && {
      breadcrumb: breadcrumbSchema(breadcrumb),
    }),
  };
}

// ─── Service ────────────────────────────────────────────────────────────────

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
}

export function serviceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    serviceType: service.serviceType,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: service.areaServed ?? ["US", "GB", "PK", "AE", "CA", "AU"],
    audience: {
      "@type": "Audience",
      audienceType: "Businesses, Agencies, Enterprises",
    },
  };
}

export function servicesListSchema() {
  const services: ServiceSchemaInput[] = [
    {
      name: "Custom Software Development",
      description:
        "Production-grade web and mobile applications built for enterprise scale. High-performance solutions tailored to complex business logic.",
      url: `${SITE.url}/services#custom-software`,
      serviceType: "Software Development",
    },
    {
      name: "Digital Marketing",
      description:
        "High-performance advertising campaigns that dominate social media and search engines. Strategic SEO, paid ads, and multi-channel campaign management.",
      url: `${SITE.url}/services#digital-marketing`,
      serviceType: "Digital Marketing",
    },
    {
      name: "Business Process Automation",
      description:
        "Automate repetitive tasks and streamline workflows using n8n, Zapier, and custom integrations. Increase efficiency and reduce operational costs.",
      url: `${SITE.url}/services#automation`,
      serviceType: "Business Process Automation",
    },
    {
      name: "Rapid MVP Development",
      description:
        "Go from idea to a working product in 14 days. Professional MVP development using modern tech stacks for startups and enterprises.",
      url: `${SITE.url}/services#mvp`,
      serviceType: "MVP Development",
    },
    {
      name: "Mobile App Development",
      description:
        "Production-grade iOS and Android applications. Cross-platform delivery with premium UI/UX and App Store submission.",
      url: `${SITE.url}/services#mobile-apps`,
      serviceType: "Mobile Application Development",
    },
    {
      name: "SaaS Development",
      description:
        "Enterprise-grade multi-tenant SaaS platforms. Full-scale product architecture, billing integration, and administrative dashboards.",
      url: `${SITE.url}/services#saas`,
      serviceType: "SaaS Development",
    },
    {
      name: "Social Media Management",
      description:
        "Premium content creation and social media management. Build a dominant brand presence and engage your target audience.",
      url: `${SITE.url}/services#social-media`,
      serviceType: "Social Media Marketing",
    },
    {
      name: "WordPress Development",
      description:
        "Professional WordPress websites optimized for speed, SEO, and business growth. Custom theme development and plugin integration.",
      url: `${SITE.url}/services#wordpress`,
      serviceType: "Web Design & Development",
    },
  ];
  return services.map(serviceSchema);
}

// ─── SoftwareApplication ────────────────────────────────────────────────────

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Web Axis Solutions Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Custom software, automation, and digital marketing platform for agencies and enterprises.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Contact for custom pricing",
    },
    provider: { "@id": `${SITE.url}/#organization` },
  };
}

// ─── Product ────────────────────────────────────────────────────────────────

export function productSchema({
  name,
  description,
  url,
  image,
  ratingValue,
  reviewCount,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  ratingValue?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image: image ?? SITE.logo,
    brand: { "@id": `${SITE.url}/#organization` },
    ...(ratingValue &&
      reviewCount && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
      }),
  };
}

// ─── FAQPage ─────────────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── HowTo ───────────────────────────────────────────────────────────────────

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export function howToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601, e.g. "PT30M"
  estimatedCost?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: estimatedCost,
      },
    }),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}

// ─── Article ─────────────────────────────────────────────────────────────────

export function articleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    image: image ?? SITE.logo,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: authorName ?? SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SITE.logo,
      },
    },
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

// ─── Review / AggregateRating ────────────────────────────────────────────────

export function aggregateRatingSchema({
  ratingValue,
  reviewCount,
  itemName,
}: {
  ratingValue: number;
  reviewCount: number;
  itemName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@id": `${SITE.url}/#organization`,
      name: itemName,
    },
    ratingValue,
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

export function reviewSchema({
  reviewBody,
  ratingValue,
  authorName,
  datePublished,
  itemName,
}: {
  reviewBody: string;
  ratingValue: number;
  authorName: string;
  datePublished: string;
  itemName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
    },
    author: { "@type": "Person", name: authorName },
    datePublished,
    itemReviewed: {
      "@id": `${SITE.url}/#organization`,
      name: itemName,
    },
  };
}

// ─── BreadcrumbList ──────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── JobPosting ──────────────────────────────────────────────────────────────

export interface JobPostingInput {
  title: string;
  description: string;
  datePosted: string;
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "INTERN";
  addressLocality: string;
  baseSalary?: { minValue: number; maxValue: number; currency: string };
}

export function jobPostingSchema(job: JobPostingInput) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.name,
      sameAs: SITE.url,
      logo: SITE.logo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.addressLocality,
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    ...(job.baseSalary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: job.baseSalary.currency,
        value: {
          "@type": "QuantitativeValue",
          minValue: job.baseSalary.minValue,
          maxValue: job.baseSalary.maxValue,
          unitText: "MONTH",
        },
      },
    }),
  };
}

// ─── ItemList (for portfolio/collections) ────────────────────────────────────

export function itemListSchema(
  items: { name: string; url: string; description: string; image?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: item.name,
        url: item.url,
        description: item.description,
        ...(item.image && { image: item.image }),
      },
    })),
  };
}
