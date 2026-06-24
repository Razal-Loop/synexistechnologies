import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Offer from "@/components/Offer";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ProjectTicker from "@/components/ProjectTicker";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Axis Solutions",
    "url": "https://webaxissolutions.com",
    "logo": "https://webaxissolutions.com/logo.png",
    "description": "Custom software development, high-performance Digital Marketing, and high-intent live transfers for agencies and solo agents.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@webaxissolutions.com",
      "contactType": "customer service"
    }
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Web Axis Solutions",
    "url": "https://webaxissolutions.com"
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <Navbar />
      <Hero />
      <ProjectTicker />
      <div className="relative z-10 bg-background">
        <AboutUs />
        <Offer />
        <Services />
        <LeadForm />
      </div>
      <Footer />

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(139,92,246,0.05)_0%,transparent_50%)]" />
      </div>
    </main>
  );
}
