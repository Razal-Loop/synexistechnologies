import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Internships | Web Axis Solutions",
    description: "Start your professional journey with Web Axis Solutions. We offer high-impact internships in development, marketing, and sales operations.",
    alternates: {
        canonical: "/internships",
    },
    openGraph: {
        title: "Internships | Web Axis Solutions",
        description: "Start your professional journey with Web Axis Solutions. We offer high-impact internships in development, marketing, and sales operations.",
        url: "https://webaxissolutions.com/internships",
    },
};

export default function InternshipsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
