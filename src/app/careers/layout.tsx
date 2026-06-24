import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Join Web Axis Solutions",
    description: "Explore career opportunities at Web Axis Solutions. Join our team of experts in Software Engineering, Sales, and Digital Marketing.",
    alternates: {
        canonical: "/careers",
    },
    openGraph: {
        title: "Careers | Join Web Axis Solutions",
        description: "Explore career opportunities at Web Axis Solutions. Join our team of experts in Software Engineering, Sales, and Digital Marketing.",
        url: "https://webaxissolutions.com/careers",
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
