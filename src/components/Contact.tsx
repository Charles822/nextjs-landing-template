"use client";

import { useState } from "react";
import { Send, Mail, Phone } from "lucide-react";
import type { ProjectConfig } from "@/types/project";

interface ContactProps {
  config: ProjectConfig;
}

export default function Contact({ config }: ContactProps) {
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

  const { brandColor, contact } = config;

  return (
    <section id="contact" className="bg-white border-slate-100 border-t py-20 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3
              className="text-sm font-medium uppercase tracking-[0.18em] mb-4"
              style={{ color: brandColor }}
            >
              {contact.sectionLabel}
            </h3>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              {contact.headline}
            </h2>
            <p className="text-lg text-slate-500 mb-8">{contact.intro}</p>
            {contact.introBold && (
              <p className="text-slate-600 mb-8">{contact.introBold}</p>
            )}

            {(contact.email || contact.phone) && (
              <div className="space-y-4">
                {contact.email && (
                  <div className="flex items-center gap-3 text-slate-600">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                    >
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>{contact.email}</span>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex items-center gap-3 text-slate-600">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                    >
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>{contact.phone}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 transition-colors"
                    placeholder="Votre nom"
                    style={{
                      ["--tw-ring-color" as string]: brandColor,
                      ["--tw-border-color" as string]: "rgb(226 232 240)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 transition-colors"
                    placeholder="vous@entreprise.fr"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Sujet
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 bg-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="info">Demande d'information</option>
                  <option value="rdv">Prendre rendez-vous</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 resize-none"
                  placeholder="Décrivez votre projet ou vos questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-medium rounded-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: brandColor }}
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
