import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

// Dynamic Imports for Below-the-Fold Content
// Loading placeholders prevent CLS (Cumulative Layout Shift)
const SocialProof = dynamic(
  () => import("@/components/social-proof").then((mod) => mod.SocialProof),
  {
    loading: () => <div className="h-32 bg-white" />,
  }
);

const About = dynamic(
  () => import("@/components/about").then((mod) => mod.About),
  {
    loading: () => <div className="h-[600px] bg-white" />,
  }
);

const Impact = dynamic(
  () => import("@/components/impact").then((mod) => mod.Impact),
  {
    loading: () => <div className="h-[600px] bg-[#31006F]" />,
  }
);

const Services = dynamic(
  () => import("@/components/services").then((mod) => mod.Services),
  {
    loading: () => <div className="h-[800px] bg-slate-50" />,
  }
);

const Cta = dynamic(() => import("@/components/cta").then((mod) => mod.Cta), {
  loading: () => <div className="h-[400px] bg-white" />,
});

const Faq = dynamic(() => import("@/components/faq").then((mod) => mod.Faq), {
  loading: () => <div className="h-[600px] bg-[#31006F]" />,
});

const ContactSection = dynamic(
  () =>
    import("@/components/contact-section").then((mod) => mod.ContactSection),
  {
    loading: () => <div className="h-[600px] bg-white" />,
  }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  {
    loading: () => <div className="h-64 bg-[#1a003d]" />,
  }
);

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      <Navbar />

      <section className="bg-white dark:bg-[#343232]">
        <Hero />
        <SocialProof />
        <About />
        <Impact />
        <Cta />
        <Services />
      </section>

      <Faq />

      <ContactSection />

      <Footer />
    </main>
  );
}
