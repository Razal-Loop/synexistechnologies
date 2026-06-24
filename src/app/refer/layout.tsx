import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner Program | Web Axis Solutions",
    description: "Refer a project and earn 20% commission. Join the Web Axis Solutions partnership program today.",
    alternates: {
        canonical: "/refer",
    },
    openGraph: {
        title: "Partner Program | Web Axis Solutions",
        description: "Refer a project and earn 20% commission. Join the Web Axis Solutions partnership program today.",
        url: "https://webaxissolutions.com/refer",
    },
};

export default function ReferLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
