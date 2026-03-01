"use client";

import { ArrowRight, Check, Award, Briefcase, Users } from "lucide-react";
import PartnersMarquee from "./PartnersMarquee";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 min-h-[640px]">
      {/* Left Content - EXACTLY like master template */}
      <div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center">
        <h1 className="text-5xl lg:text-7xl tracking-tighter leading-[1.05] mb-8 text-neutral-900">
          <span className="font-light block text-slate-600">
            Intégrez la RSE
          </span>
          <span className="font-serif-custom italic font-medium block text-[#2D5A3D]">
            dans votre stratégie
          </span>
          <span className="font-light block text-slate-600 text-3xl lg:text-5xl mt-2">
            opérationnelle.
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-10 font-normal">
          Depuis 2014, nous aidons entreprises et collectivités à structurer leur démarche RSE sur des bases méthodologiques reconnues. Agréés AFNOR, nous intervenons à chaque étape :{" "}
          <span className="font-medium text-neutral-800">
            diagnostic, plan d'action, formation, évaluation.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
          <a 
            href="#contact" 
            className="group shadow-[#2D5A3D]/30 hover:shadow-[#2D5A3D]/60 transition-all duration-300 overflow-hidden hover:bg-[#1F4A2F] font-medium text-white bg-[#2D5A3D] rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg"
            style={{
              boxShadow: '0 18px 40px -15px rgba(45, 90, 61, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
              borderRadius: '0.5rem'
            }}
          >
            <div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
            <span className="flex items-center gap-2 relative">
              Discuter de votre projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="text-xs font-medium text-neutral-600 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D]">
                  <Check className="w-4 h-4" />
                </div>
                <span>Agréé AFNOR<br/>ISO 26000</span>
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

        <PartnersMarquee />
      </div>

      {/* Right Visual - EXACTLY like master template structure */}
      <div 
        className="lg:col-span-5 lg:h-auto overflow-hidden bg-center w-full h-[500px] bg-cover relative"
        style={{
          backgroundImage: 'linear-gradient(135deg, #2D5A3D 0%, #1F4A2F 50%, #163820 100%)',
          backgroundColor: '#2D5A3D'
      }}
      >
        {/* Background Gradient Effect */}
        <div className="-translate-x-1/2 -translate-y-1/2 animate-pulse bg-gradient-to-br from-emerald-400 via-[#2D5A3D] to-green-800 opacity-80 mix-blend-multiply w-[500px] h-[500px] rounded-full absolute top-1/2 left-1/2 blur-3xl"></div>

        {/* Card Stack / Visual Element */}
        <div className="flex z-30 pointer-events-none pb-10 absolute right-0 bottom-2 left-0 items-end justify-center">
          <div className="w-80 h-64 relative">
            <div className="flex flex-col bg-gradient-to-b from-white/20 to-white/5 rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl justify-between border border-white/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-white/10 border-white/20 text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-white">
                      Agréé AFNOR
                    </h3>
                    <p className="text-xs text-emerald-100">ISO 26000 • ISO 20400</p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden border rounded-lg h-28 bg-slate-800 border-white/10">
                <div className="flex items-center justify-center h-full text-white/60 text-sm">
                  +80 organisations accompagnées
                </div>
              </div>

              <div className="w-full h-px mt-4 overflow-hidden rounded-full bg-white/20">
                <div className="h-full bg-white rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="flex pointer-events-none z-30 pb-2 absolute right-0 bottom-0 left-0 justify-center">
          <div className="bg-slate-900/60 backdrop-blur-md text-xs text-neutral-200 rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/10 shadow-lg">
            <span className="inline-flex w-1.5 h-1.5 rounded-full bg-green-400"></span>
            <span className="font-medium tracking-tight">
              Évaluation gratuite de votre maturité RSE
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
