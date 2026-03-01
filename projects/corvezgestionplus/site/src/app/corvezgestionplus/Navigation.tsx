"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Avantages", href: "#avantages" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/corvezgestionplus" className="font-semibold text-lg text-neutral-900">
            Corvez <span className="text-blue-700">Gestion Plus</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-blue-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 hover:text-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Prendre RDV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
