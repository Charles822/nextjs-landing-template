import Navigation from "./Navigation";
import Hero from "./Hero";
import Services from "./Services";
import ValueProposition from "./ValueProposition";
import Methodology from "./Methodology";
import Contact from "./Contact";
import Footer from "./Footer";

export default function BonSensConseil() {
  return (
    <main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Services />
      <Methodology />
      <Contact />
      <Footer />
    </main>
  );
}
