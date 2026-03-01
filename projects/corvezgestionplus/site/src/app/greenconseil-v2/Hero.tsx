"use client";

import Image from "next/image";
import { ArrowRight, Check, Award, Briefcase, Users } from "lucide-react";
import PartnersMarquee from "./PartnersMarquee";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 min-h-[640px]">
      {/* Left Content - EXACTLY like master template */}
      <div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center">
        <h1 className="text-5xl lg:text-7xl tracking-tighter leading-[1.05] mb-8 text-neutral-900">
          <span className="font-light block text-slate-600">
            Cabinet de conseil en
          </span>
          <span className="font-serif-custom italic font-medium block text-[#00A651]">
            transformation digitale
          </span>
          <span className="font-light block text-slate-600 text-3xl lg:text-5xl mt-2">
            et organisationnelle.
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-10 font-normal">
          Depuis 2015, nous accompagnons entreprises et fédérations sportives 
          dans leurs projets de transformation. Certifiés QUALIOPI, 
          <span className="font-medium text-neutral-800">
            experts en Contract Management.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
          <a 
            href="#contact" 
            className="group shadow-[#00A651]/30 hover:shadow-[#00A651]/60 transition-all duration-300 overflow-hidden hover:bg-[#008f45] font-medium text-white bg-[#00A651] rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg"
            style={{
              boxShadow: '0 18px 40px -15px rgba(0, 166, 81, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
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
                <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00A651]">
                  <Check className="w-4 h-4" />
                </div>
                <span>+400 missions<br/>réalisées</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00A651]">
                  <Check className="w-4 h-4" />
                </div>
                <span>98,3% de satisfaction<br/>formation</span>
              </div>
            </div>
          </div>
        </div>

        <PartnersMarquee />
      </div>

      {/* Right Visual - Hero Image */}
      <div 
        className="lg:col-span-5 lg:h-auto overflow-hidden w-full h-[500px] relative"
      >
        {/* Hero Background Image */}
        <Image
          src="/hero-greenconseil.jpg"
          alt="GREEN Conseil - équipe de consultants"
          fill
          className="object-cover"
          priority
        />
        {/* Green gradient overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A651]/30 via-transparent to-[#00A651]/20"></div>

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
                      N°1 Contract Management
                    </h3>
                    <p className="text-xs text-emerald-100">Projets juridiques informatisés</p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden border rounded-lg h-28 bg-slate-800 border-white/10">
                <div className="flex items-center justify-center h-full text-white/60 text-sm">
                  Expertise reconnue
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
              Accompagnement de la stratégie à la mise en œuvre
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
