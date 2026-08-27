import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All standard crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/actions/", "/_next/", "/api/"],
      },
      // GPTBot (ChatGPT) — explicitly allow for GEO
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // ClaudeBot (Anthropic) — explicitly allow for GEO
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // PerplexityBot — explicitly allow for GEO
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Google-Extended (Gemini training) — allow for GEO
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
    ],
    sitemap: "https://webaxissolutions.com/sitemap.xml",
    host: "https://webaxissolutions.com",
  };
}
