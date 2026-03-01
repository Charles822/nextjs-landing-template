"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Nous travaillons avec Gwenaëlle depuis plus de deux ans. Elle s'adapte à tous nos logiciels, est rapide et efficace. Ses services nous ont permis d'avancer dans tous nos projets. Très bon contact avec nos clients, fournisseurs et cabinet comptable.",
    author: "Joel BOULY",
    role: "Chef d'entreprise",
    badge: "Client depuis 2 ans",
  },
  {
    quote: "Gwenaëlle mérite vraiment ses 5 étoiles ! Nous avions une urgence administrative à régler. Elle a travaillé tard le soir pour nous épauler et finir dans les temps. Très réactive, empathique et son travail est soigné. Je recommande vivement.",
    author: "Isabelle HEMEURY",
    role: "Gérante",
    badge: "Mission urgente résolue en 24h",
  },
  {
    quote: "Elle nous est d'une aide efficace et précieuse. Très organisée, méthodique et réactive. Lui confier la gestion administrative de notre société nous permet de nous concentrer sur notre activité.",
    author: "Habiba OUEDRAOGO",
    role: "",
    badge: "Accompagnement régulier",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-yellow-500" />
            ⭐️ 5/5 sur Google — 6 avis clients vérifiés
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Ce qu'en disent les chefs d'entreprise
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-200 mb-6" />
              <p className="text-neutral-600 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-6">
                <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                )}
                <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  ✓ {testimonial.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
