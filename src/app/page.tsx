import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Offer from "@/components/Offer";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ProjectTicker from "@/components/ProjectTicker";

export default function Home() {
  return (
    <main className="relative">
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
