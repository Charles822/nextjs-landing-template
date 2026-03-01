"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex lg:px-12 z-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-100">
      <div className="flex items-center gap-3">
        <Image 
          src="/logo.svg" 
          alt="GREEN Conseil" 
          width={140} 
          height={47}
          className="h-10 w-auto"
        />
        <span className="font-semibold text-slate-800 tracking-tight ml-2 hidden sm:block">GREEN Conseil</span>
      </div>
      
      <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-neutral-500">
        <a href="#" className="hover:text-[#00A651] transition-colors text-[#00A651]">
          Accueil
        </a>
        <a href="#expertises" className="hover:text-[#00A651] transition-colors">
          Nos Expertises
        </a>
        <a href="#methode" className="hover:text-[#00A651] transition-colors">
          Notre Approche
        </a>
        <a href="#contact" className="hover:text-[#00A651] transition-colors">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="tel:+33145581310" 
          className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#00A651] transition-colors"
        >
          <Phone className="w-4 h-4" />
          01 45 58 13 10
        </a>
        <a 
          href="#contact" 
          className="hidden md:flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#00A651] hover:bg-[#008f45] rounded-lg transition-colors shadow-lg shadow-[#00A651]/20"
        >
          Discuter de votre projet
        </a>
      </div>
    </nav>
  );
}
