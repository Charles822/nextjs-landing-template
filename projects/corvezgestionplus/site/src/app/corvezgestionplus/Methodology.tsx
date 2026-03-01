"use client";

import { Eye, Heart, Zap } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Visibilité",
    description: "Un administratif clair et structuré. Vous voyez enfin où vous en êtes. Fini la recherche de documents.",
  },
  {
    icon: Heart,
    title: "Sérénité",
    description: "Plus d'urgences de dernière minute. Vos échéances sont anticipées et gérées à temps.",
  },
  {
    icon: Zap,
    title: "Efficacité",
    description: "Du temps pour développer votre activité. Vous vous concentrez sur votre cœur de métier, pas sur le papier.",
  },
];

const differentiators = [
  {
    title: "Réactivité",
    description: "Démarrage en 48h-5 jours. Une urgence administrative ? J'interviens rapidement pour vous débloquer.",
  },
  {
    title: "Flexibilité totale",
    description: "Je m'adapte à vos outils. Pas besoin de changer de logiciel. Je travaille avec ce que vous avez déjà.",
  },
  {
    title: "Terrain",
    description: "Intervention sur site. Je viens chez vous, je comprends votre organisation, je l'optimise.",
  },
  {
    title: "Relationnel",
    description: "Vos interlocuteurs sont mes interlocuteurs. Clients, fournisseurs, cabinet comptable — je gère les échanges pour vous.",
  },
];

export default function Methodology() {
  return (
    <section id="avantages" className="py-24 px-6 lg:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Benefits Section */}
        <div className="text-center mb-20">
          <p className="text-blue-700 font-medium mb-3 tracking-wide uppercase text-sm">
            Bénéfices
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Ce que vous retrouvez
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 mx-auto mb-6">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Differentiators Section */}
        <div className="bg-blue-700 rounded-3xl p-8 lg:p-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Pourquoi travailler avec moi ?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Une approche pragmatique et terrain pour des résultats concrets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{diff.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
