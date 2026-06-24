import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SaaS Tools | Web Axis Solutions",
    description: "High-performance software tools designed to scale your business. Explore our SaaS offerings and productivity engines.",
    alternates: {
        canonical: "/saas-tools",
    },
    openGraph: {
        title: "SaaS Tools | Web Axis Solutions",
        description: "High-performance software tools designed to scale your business. Explore our SaaS offerings and productivity engines.",
        url: "https://webaxissolutions.com/saas-tools",
    },
};

export default function SaasToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
