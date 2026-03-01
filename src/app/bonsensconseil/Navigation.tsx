"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex lg:px-12 z-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-100">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Image 
          src="/logo.png" 
          alt="BonSens Conseil" 
          width={140} 
          height={47}
          className="h-12 w-auto"
        />
      </div>
      
      <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-neutral-500">
        <a href="#" className="hover:text-[#2D5A3D] transition-colors text-[#2D5A3D]">
          Accueil
        </a>
        <a href="#expertises" className="hover:text-[#2D5A3D] transition-colors">
          Nos Expertises
        </a>
        <a href="#approche" className="hover:text-[#2D5A3D] transition-colors">
          Notre Approche
        </a>
        <a href="#contact" className="hover:text-[#2D5A3D] transition-colors">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="mailto:contact@bonsensconseil.fr" 
          className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#2D5A3D] transition-colors"
        >
          contact@bonsensconseil.fr
        </a>
        <a 
          href="#contact" 
          className="hidden md:flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#2D5A3D] hover:bg-[#1F4A2F] rounded-lg transition-colors shadow-lg shadow-[#2D5A3D]/20"
        >
          Discuter de votre projet
        </a>
      </div>
    </nav>
  );
}
