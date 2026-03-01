import Navigation from "./Navigation";
import Hero from "./Hero";
import Services from "./Services";
import ValueProposition from "./ValueProposition";
import Methodology from "./Methodology";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function CorvezGestionPlusPage() {
  return (
    <main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">
      <Navigation />
      <Hero />
      <Services />
      <ValueProposition />
      <Methodology />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
