"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-white border-slate-100 border-t py-20 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#5489a3] mb-4">
              Contact
            </h3>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Vous avez un projet de création, de rénovation ou d'extension d'une cuisine professionnelle ?
            </p>
            <p className="text-slate-600 mb-8">
              Prenons le temps d'échanger sur vos besoins et vos contraintes. Le premier rendez-vous de diagnostic est gratuit.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-[#e8f4f8] flex items-center justify-center text-[#5489a3]">
                  <Mail className="w-5 h-5" />
                </div>
                <span>secretariat@restauconseil.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-[#e8f4f8] flex items-center justify-center text-[#5489a3]">
                  <Phone className="w-5 h-5" />
                </div>
                <span>01.46.70.15.12</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#5489a3] focus:ring-1 focus:ring-[#5489a3] outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#5489a3] focus:ring-1 focus:ring-[#5489a3] outline-none transition-colors"
                    placeholder="vous@entreprise.fr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Secteur d'activité
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#5489a3] focus:ring-1 focus:ring-[#5489a3] outline-none transition-colors bg-white"
                >
                  <option value="">Sélectionnez votre secteur</option>
                  <option value="restauration">Restauration commerciale</option>
                  <option value="scolaire">Collectivités & Scolaire</option>
                  <option value="hospitalier">Hospitalier & Médico-social</option>
                  <option value="hotellerie">Hôtellerie</option>
                  <option value="commerce">Commerces alimentaires</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Votre projet
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#5489a3] focus:ring-1 focus:ring-[#5489a3] outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet (création, rénovation, extension...)..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#5489a3] text-white font-medium rounded-lg hover:bg-[#437a8f] transition-colors"
              >
                <Send className="w-5 h-5" />
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
