"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, Loader2, CheckCircle } from "lucide-react";
import type { ProjectConfig } from "@/types/project";

interface ContactProps {
  config: ProjectConfig;
}

type SubmitStatus = "idle" | "success" | "error";

export default function Contact({ config }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6 font-display">
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

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md shadow-slate-200/50">
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

              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 text-white font-medium rounded-lg"
                  style={{ backgroundColor: brandColor }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Message envoyé
                </motion.div>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-medium rounded-lg transition-colors hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: brandColor }}
                  whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                  whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer ma demande
                    </>
                  )}
                </motion.button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
