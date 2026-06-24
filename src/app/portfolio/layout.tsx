import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Our Work at Web Axis Solutions",
    description: "Explore the successful projects and case studies by Web Axis Solutions in software development and digital marketing.",
    alternates: {
        canonical: "/portfolio",
    },
    openGraph: {
        title: "Portfolio | Our Work at Web Axis Solutions",
        description: "Explore the successful projects and case studies by Web Axis Solutions in software development and digital marketing.",
        url: "https://webaxissolutions.com/portfolio",
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
