"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-700 font-medium mb-3 tracking-wide uppercase text-sm">
              Contact
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-6">
              Parlons de vos priorités actuelles
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Un premier échange sans engagement pour faire le point sur votre situation 
              et identifier les quick wins possibles.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Téléphone</p>
                  <p className="font-medium text-neutral-900">À compléter</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="font-medium text-neutral-900">À compléter</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Zone d'intervention</p>
                  <p className="font-medium text-neutral-900">Intervention sur site (à définir)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form / CTA */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Prendre rendez-vous
            </h3>
            <p className="text-neutral-500 mb-8">
              Remplissez le formulaire ci-dessous et je vous recontacte sous 24h.
            </p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <textarea
                placeholder="Décrivez votre besoin..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-blue-500/30"
              >
                Envoyer ma demande
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-xs text-neutral-400 mt-6 text-center">
              Réponse garantie sous 24h ouvrées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
