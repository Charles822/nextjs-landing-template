"use client";

import { ArrowRight, Award, Briefcase, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 min-h-[640px]">
      {/* Left Content */}
      <div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0fdf4] text-[#00A651] rounded-full text-sm font-medium mb-6 w-fit">
          <Award className="w-4 h-4" />
          Certifiés QUALIOPI — +400 missions depuis 2015
        </div>

        <h1 className="text-4xl lg:text-6xl tracking-tighter leading-[1.05] mb-6 text-neutral-900">
          <span className="font-semibold block">
            Cabinet de conseil en
          </span>
          <span className="font-serif-custom italic font-medium block text-[#00A651]">
            transformation des organisations
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-8 font-normal">
          De la stratégie à la mise en œuvre opérationnelle. Nous accompagnons entreprises, 
          fédérations sportives et institutions dans leurs projets de transformation digitale 
          et organisationnelle.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
          <a 
            href="#contact" 
            className="group shadow-[#00A651]/30 hover:shadow-[#00A651]/60 transition-all duration-300 overflow-hidden hover:bg-[#008f45] font-medium text-white bg-[#00A651] rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg"
            style={{
              boxShadow: '0 18px 40px -15px rgba(0, 166, 81, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
              borderRadius: '0.5rem'
            }}
          >
            <span className="flex items-center gap-2 relative">
              Discuter de votre projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          <a 
            href="#expertises" 
            className="text-sm font-medium text-[#00A651] hover:text-[#008f45] transition-colors"
          >
            Découvrir nos expertises →
          </a>
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
          <div className="text-xs font-medium text-neutral-600 flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00A651]">
                <Briefcase className="w-4 h-4" />
              </div>
              <span>+400 missions<br/>réalisées</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00A651]">
                <Award className="w-4 h-4" />
              </div>
              <span>98,3% de satisfaction<br/>formation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00A651]">
                <Users className="w-4 h-4" />
              </div>
              <span>+18 ans<br/>d'expertise</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div 
        className="lg:col-span-5 lg:h-auto overflow-hidden bg-center w-full h-[500px] bg-cover relative"
        style={{
          backgroundImage: 'linear-gradient(135deg, #00A651 0%, #008f45 100%)',
          backgroundColor: '#00A651'
      }}
      >
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Content Card */}
        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] flex items-center justify-center text-[#00A651] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-slate-900 mb-1">N°1 des facilitateurs de projets juridiques</p>
              <p className="text-sm text-slate-500">Reconnus pour notre expertise en Contract Management à coloration informatique.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
