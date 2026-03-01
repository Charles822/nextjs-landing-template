"use client";

import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Corvez Gestion Plus</h3>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              Gestion administrative et pré-comptabilité pour PME et artisans.
              Intervention sur site, réactivité garantie.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">Gestion administrative</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pré-comptabilité</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Suivi de facturation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Préparation de la paie</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Gwenaëlle Corvez</li>
              <li>Consultante opérationnelle</li>
              <li className="pt-2">
                <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Prendre rendez-vous →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Corvez Gestion Plus. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
