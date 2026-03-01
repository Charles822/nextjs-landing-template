"use client";

import { TrendingUp, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15h",
    label: "temps gagné",
    sublabel: "par mois en moyenne",
  },
  {
    icon: TrendingUp,
    value: "-40%",
    label: "de retards",
    sublabel: "de paiement clients",
  },
  {
    icon: Shield,
    value: "2-5",
    label: "jours",
    sublabel: "délai de démarrage",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-700 font-medium mb-3 tracking-wide uppercase text-sm">
              Résultats concrets
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-6">
              Une consultante opérationnelle qui intervient directement chez vous
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Pas de conseils théoriques. Je travaille dans vos locaux (ou à distance si vous préférez), 
              je m'adapte à vos outils existants, et je vous rendez un administratif organisé et à jour.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5 shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <p className="text-neutral-600">Intervention sur site ou à distance selon vos besoins</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5 shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <p className="text-neutral-600">Adaptation à tous vos logiciels existants</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5 shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <p className="text-neutral-600">Missions urgentes résolues en 24h si nécessaire</p>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 flex items-center gap-6 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-700 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-neutral-900 font-medium">{stat.label}</div>
                  <div className="text-neutral-500 text-sm">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
