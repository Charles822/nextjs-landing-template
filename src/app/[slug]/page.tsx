import { notFound } from "next/navigation";
import {
  getProjectConfig,
  getAllProjectSlugs,
  isValidSlug,
} from "@/lib/getProjectConfig";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionReveal from "@/components/SectionReveal";
import Services from "@/components/Services";
import ValueProposition from "@/components/ValueProposition";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestimonialsEnhanced from "@/components/TestimonialsEnhanced";
import Offers from "@/components/Offers";
import Blog from "@/components/Blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const config = getProjectConfig(slug);
  if (!config) {
    notFound();
  }

  return (
    <main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">
      <Navigation config={config} />
      <Hero config={config} />
      {config.offers && (
        <SectionReveal delay={0}>
          <Offers config={config} />
        </SectionReveal>
      )}
      <SectionReveal delay={0.05}>
        <ValueProposition config={config} />
      </SectionReveal>
      {config.testimonials && (
        <SectionReveal delay={0.1}>
          <TestimonialsEnhanced config={config} />
        </SectionReveal>
      )}
      <SectionReveal delay={0}>
        <Services config={config} />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <Methodology config={config} />
      </SectionReveal>
      {config.blog && (
        <SectionReveal delay={0.1}>
          <Blog config={config} />
        </SectionReveal>
      )}
      <SectionReveal delay={0}>
        <Contact config={config} />
      </SectionReveal>
      <Footer config={config} />
    </main>
  );
}
