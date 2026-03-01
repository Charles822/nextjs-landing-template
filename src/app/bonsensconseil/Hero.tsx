"use client";

import { ArrowRight, Check, Leaf, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 min-h-[640px]">
      {/* Left Content */}
      <div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0fdf4] text-[#2D5A3D] rounded-full text-sm font-medium mb-6 w-fit">
          <Award className="w-4 h-4" />
          Agréés AFNOR — ISO 26000 • ISO 20400 • BNQ 9700
        </div>

        <h1 className="text-4xl lg:text-6xl tracking-tighter leading-[1.05] mb-6 text-neutral-900">
          <span className="font-semibold block">
            Intégrez la RSE dans votre
          </span>
          <span className="font-serif-custom italic font-medium block text-[#2D5A3D]">
            stratégie opérationnelle
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-8 font-normal">
          Conseil et accompagnement concret pour organisations qui veulent passer des intentions aux actions. 
          Depuis 2014, nous aidons entreprises et collectivités à structurer leur démarche RSE.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
          <a 
            href="#contact" 
            className="group shadow-[#2D5A3D]/30 hover:shadow-[#2D5A3D]/60 transition-all duration-300 overflow-hidden hover:bg-[#1F4A2F] font-medium text-white bg-[#2D5A3D] rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg"
            style={{
              boxShadow: '0 18px 40px -15px rgba(45, 90, 61, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
              borderRadius: '0.5rem'
            }}
          >
            <span className="flex items-center gap-2 relative">
              Discuter de votre projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          <a 
            href="#approche" 
            className="text-sm font-medium text-[#2D5A3D] hover:text-[#1F4A2F] transition-colors"
          >
            Découvrir notre approche →
          </a>
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
          <div className="text-xs font-medium text-neutral-600 flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D]">
                <Check className="w-4 h-4" />
              </div>
              <span>+80 organisations<br/>accompagnées</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D]">
                <Check className="w-4 h-4" />
              </div>
              <span>95% de satisfaction<br/>client</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D]">
                <Check className="w-4 h-4" />
              </div>
              <span>+20 ans<br/>d'expérience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div 
        className="lg:col-span-5 lg:h-auto overflow-hidden bg-center w-full h-[500px] bg-cover relative"
        style={{
          backgroundImage: 'url(/hero-slide-1.jpg)',
          backgroundColor: 'rgba(45, 90, 61, 0.1)'
      }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A3D]/30 to-transparent"></div>
        
        {/* Content Card */}
        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D] shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-slate-900 mb-1">Mieux vous comprendre, pour mieux vous épauler</p>
              <p className="text-sm text-slate-500">Notre volonté : vous accompagner dans la conduite du changement, pas vous aider à verdir votre discours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
