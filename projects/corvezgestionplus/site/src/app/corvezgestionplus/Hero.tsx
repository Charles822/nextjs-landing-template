"use client";

import { ArrowRight, Clock, Star, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 min-h-[640px]">
      {/* Left Content */}
      <div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 w-fit">
          <Star className="w-4 h-4" />
          ⭐️ 5/5 sur Google — 6 avis clients vérifiés
        </div>

        <h1 className="text-4xl lg:text-6xl tracking-tighter leading-[1.05] mb-6 text-neutral-900">
          <span className="font-semibold block">
            Finies les nuits à
          </span>
          <span className="font-serif-custom italic font-medium block text-blue-700">
            rattraper l'administratif
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-8 font-normal">
          Gestion administrative et pré-comptabilité pour PME et artisans.
          Intervention rapide sur site — vous récupérez 15h par mois en moyenne.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
          <a 
            href="#contact" 
            className="group shadow-blue-500/30 hover:shadow-blue-500/60 transition-all duration-300 overflow-hidden hover:bg-blue-800 font-medium text-white bg-blue-700 rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg"
            style={{
              boxShadow: '0 18px 40px -15px rgba(37, 99, 235, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
              borderRadius: '0.5rem'
            }}
          >
            <span className="flex items-center gap-2 relative">
              📅 Prendre rendez-vous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          <a 
            href="#services" 
            className="text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            Découvrir les services →
          </a>
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
          <div className="text-xs font-medium text-neutral-600 flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                <Clock className="w-4 h-4" />
              </div>
              <span>Démarrage<br/>2-5 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                <Star className="w-4 h-4" />
              </div>
              <span>15h/mois<br/>gagnées</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                <Phone className="w-4 h-4" />
              </div>
              <span>Intervention<br/>sur site</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div 
        className="lg:col-span-5 lg:h-auto overflow-hidden bg-center w-full h-[500px] bg-cover relative"
        style={{
          backgroundImage: 'url(/hero-corvez.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
      }}
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Content Card */}
        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-slate-900 mb-1">Réactivité garantie</p>
              <p className="text-sm text-slate-500">Démarrage en 48h-5 jours. Missions urgentes résolues en 24h.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
