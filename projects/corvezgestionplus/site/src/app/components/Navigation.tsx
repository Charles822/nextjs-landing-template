"use client";

import { Phone } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="flex lg:px-12 z-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-100">
      <div className="flex items-center gap-2">
        {/* Logo Recreation based on image */}
        <div 
          className="bg-[#0065c2] w-12 h-12 flex items-center justify-center text-white font-sans tracking-tight leading-none"
          style={{ padding: '2px' }}
        >
          <div className="text-center">
            <span className="block text-xl font-light">AG</span>
            <span className="block text-[8px] font-medium tracking-wide">conseil</span>
          </div>
        </div>
        <span className="font-semibold text-slate-800 tracking-tight ml-2 hidden sm:block">AG Conseil</span>
      </div>
      
      <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-neutral-500">
        <a href="#" className="hover:text-[#0065c2] transition-colors text-[#0065c2]">
          Accueil
        </a>
        <a href="#senior" className="hover:text-[#0065c2] transition-colors">
          Mutuelle Senior
        </a>
        <a href="#pro" className="hover:text-[#0065c2] transition-colors">
          Mutuelle Pro
        </a>
        <a href="#prevoyance" className="hover:text-[#0065c2] transition-colors">
          Prévoyance
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="tel:0147404505" 
          className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0065c2] transition-colors"
        >
          <Phone className="w-4 h-4" />
          01 47 40 45 05
        </a>
        <a 
          href="#contact" 
          className="hidden md:flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0065c2] hover:bg-[#0055a3] rounded-lg transition-colors shadow-lg shadow-[#0065c2]/20"
        >
          Devis Gratuit
        </a>
      </div>
    </nav>
  );
}
