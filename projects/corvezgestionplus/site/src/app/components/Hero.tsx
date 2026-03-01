"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, HeartHandshake, Briefcase, ShieldCheck } from "lucide-react";
import PartnersMarquee from "./PartnersMarquee";

const cards = [
  {
    id: 1,
    title: "Santé Senior",
    subtitle: "Retraite & pré-retraite",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
    alt: "Couple Senior",
  },
  {
    id: 2,
    title: "Santé Pro",
    subtitle: "TNS & Indépendants",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    alt: "Bureau Pro",
  },
  {
    id: 3,
    title: "Prévoyance",
    subtitle: "Protection revenus",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    alt: "Famille protégée",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + cards.length) % cards.length;
    if (offset === 0) return "active";
    if (offset === 1) return "next";
    return "last";
  };

  return (
    <section className="grid lg:grid-cols-12 min-h-[640px]">
      {/* Left Content */}
      <div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center">
        <h1 className="text-5xl lg:text-7xl tracking-tighter leading-[1.05] mb-8 text-neutral-900">
          <span className="font-light block text-slate-600">
            Votre complémentaire
          </span>
          <span className="font-serif-custom italic font-medium block text-[#0065c2]">
            adaptée à vos besoins réels
          </span>
          <span className="font-light block text-slate-600 text-3xl lg:text-5xl mt-2">
            sans surpayer.
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-10 font-normal">
          Courtier indépendant, nous comparons les offres de nos partenaires pour vous orienter vers la solution la plus pertinente,{" "}
          <span className="font-medium text-neutral-800">
            sans option inutile.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
          <a 
            href="#contact" 
            className="group shadow-[#0065c2]/30 hover:shadow-[#0065c2]/60 transition-all duration-300 overflow-hidden hover:bg-[#0055a3] font-medium text-white bg-[#0065c2] rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg"
            style={{
              boxShadow: '0 18px 40px -15px rgba(0, 101, 194, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
              borderRadius: '0.5rem'
            }}
          >
            <div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
            <span className="flex items-center gap-2 relative">
              Demander un devis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="text-xs font-medium text-neutral-600 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#0065c2]">
                  <Check className="w-4 h-4" />
                </div>
                <span>Comparaison<br />indépendante</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#0065c2]">
                  <Check className="w-4 h-4" />
                </div>
                <span>0€ de frais<br />ajoutés</span>
              </div>
            </div>
          </div>
        </div>

        <PartnersMarquee />
      </div>

      {/* Right Visual (Abstract Glassmorphism) */}
      <div 
        className="lg:col-span-5 lg:h-auto overflow-hidden bg-center w-full h-[500px] bg-cover relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop)',
          backgroundColor: 'rgba(239, 246, 255, 0.5)'
      }}
      >
        {/* Background Gradient Sphere */}
        <div className="-translate-x-1/2 -translate-y-1/2 animate-pulse bg-gradient-to-br from-blue-400 via-[#0065c2] to-indigo-600 opacity-80 mix-blend-multiply w-[500px] h-[500px] rounded-full absolute top-1/2 left-1/2 blur-3xl"></div>

        {/* Dark Glass Fanned Cards Carousel */}
        <div className="flex z-30 pointer-events-none pb-10 absolute right-0 bottom-2 left-0 items-end justify-center">
          <div className="w-80 h-64 relative" id="card-stack">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const cardClass = getCardClass(index);
              return (
                <div 
                  key={card.id}
                  className={`stack-card ${cardClass} flex flex-col bg-gradient-to-b from-white/20 to-white/5 rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl justify-between border border-white/20`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-white/10 border-white/20 text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold tracking-tight text-white">
                          {card.title}
                        </h3>
                        <p className="text-xs text-blue-100">{card.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-full overflow-hidden border rounded-lg h-28 bg-slate-800 border-white/10">
                    <img 
                      src={card.image} 
                      className="object-cover w-full h-full opacity-80" 
                      alt={card.alt}
                    />
                  </div>

                  <div className="w-full h-px mt-4 overflow-hidden rounded-full bg-white/20 progress-track">
                    <div className="h-full bg-white rounded-full w-0 progress-fill"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Caption Text for cards */}
        <div className="flex pointer-events-none z-30 pb-2 absolute right-0 bottom-0 left-0 justify-center">
          <div className="bg-slate-900/60 backdrop-blur-md text-xs text-neutral-200 rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/10 shadow-lg">
            <span className="inline-flex w-1.5 h-1.5 rounded-full bg-green-400"></span>
            <span className="font-medium tracking-tight">
              Analyse gratuite de vos contrats actuels
            </span>
          </div>
        </div>

        {/* Glass Stripes Overlay */}
        <div className="absolute inset-0 flex pointer-events-none">
          <div className="w-1/4 h-full border-r border-white/10 backdrop-blur-[1px]"></div>
          <div className="w-1/4 h-full border-r border-white/10 backdrop-blur-[2px]"></div>
          <div className="w-1/4 h-full border-r border-white/10 backdrop-blur-[4px] bg-white/5"></div>
          <div className="w-1/4 h-full backdrop-blur-[8px] bg-white/10"></div>
        </div>
      </div>
    </section>
  );
}
