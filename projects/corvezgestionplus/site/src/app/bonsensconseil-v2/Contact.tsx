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
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-white border-slate-100 border-t py-20 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2D5A3D] mb-4">
              Contact
            </h3>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Vous souhaitez évaluer votre niveau de maturité RSE ? Structurer votre démarche achats responsables ? Former vos équipes ?
            </p>
            <p className="text-slate-600 mb-8">
              Nous prenons le temps d'échanger sur votre contexte spécifique avant de vous proposer un accompagnement adapté.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D]">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@bonsensconseil.fr</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D]">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+33 (0)1 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Paris, France</span>
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2D5A3D] focus:ring-1 focus:ring-[#2D5A3D] outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2D5A3D] focus:ring-1 focus:ring-[#2D5A3D] outline-none transition-colors"
                    placeholder="vous@entreprise.fr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2D5A3D] focus:ring-1 focus:ring-[#2D5A3D] outline-none transition-colors"
                  placeholder="Nom de votre organisation"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2D5A3D] focus:ring-1 focus:ring-[#2D5A3D] outline-none transition-colors bg-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="diagnostic">Diagnostic RSE</option>
                  <option value="strategie">Accompagnement stratégique</option>
                  <option value="formation">Formation</option>
                  <option value="achats">Achats responsables</option>
                  <option value="sqvt">Santé et QVT</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2D5A3D] focus:ring-1 focus:ring-[#2D5A3D] outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#2D5A3D] text-white font-medium rounded-lg hover:bg-[#1F4A2F] transition-colors"
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
