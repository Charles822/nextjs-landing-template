"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden bg-[#2D5A3D] border-neutral-200 border-t pt-20 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A3D] to-[#1F4A2F]"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Info */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.05] mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-emerald-100 max-w-lg mb-10 font-light">
              Vous souhaitez évaluer votre niveau de maturité RSE ? Structurer votre démarche achats responsables ? Former vos équipes ?
            </p>
            <p className="text-emerald-100 mb-10">
              Nous prenons le temps d'échanger sur votre contexte spécifique avant de vous proposer un accompagnement adapté.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-emerald-200 uppercase tracking-wider font-medium">Email</div>
                  <div className="text-xl font-bold">contact@bonsensconseil.fr</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Envoyer une demande</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Nom</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#2D5A3D] focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Prénom</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#2D5A3D] focus:outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#2D5A3D] focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Entreprise</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#2D5A3D] focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Sujet</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#2D5A3D] focus:outline-none transition-all appearance-none">
                  <option>Diagnostic RSE</option>
                  <option>Accompagnement stratégique</option>
                  <option>Formation</option>
                  <option>Achats responsables</option>
                  <option>SQVT</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-[#2D5A3D] focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="rgpd" 
                  className="mt-1 w-4 h-4 text-[#2D5A3D] rounded border-slate-300 focus:ring-[#2D5A3D]"
                />
                <label htmlFor="rgpd" className="text-xs text-slate-500">
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande conformément à la politique de confidentialité.
                </label>
              </div>

              <button className="w-full bg-[#2D5A3D] hover:bg-[#1F4A2F] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-[#2D5A3D]/20 transition-all mt-4">
                Envoyer ma demande
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
