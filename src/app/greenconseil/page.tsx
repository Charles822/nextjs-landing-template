import Navigation from "./Navigation";
import Hero from "./Hero";
import BusinessUnits from "./BusinessUnits";
import Methodology from "./Methodology";
import Partners from "./Partners";
import Contact from "./Contact";
import Footer from "./Footer";

export default function GreenConseilPage() {
  return (
    <main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">
      <Navigation />
      <Hero />
      <BusinessUnits />
      <Methodology />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
