import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0065c2] flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-slate-900">Acfaty</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#expertises" className="text-sm text-slate-600 hover:text-[#0065c2] transition-colors">
              Nos accompagnements
            </Link>
            <Link href="#methodologie" className="text-sm text-slate-600 hover:text-[#0065c2] transition-colors">
              Notre méthode
            </Link>
            <Link href="#contact" className="text-sm text-slate-600 hover:text-[#0065c2] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <Link 
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#0065c2] text-white text-sm font-medium rounded-lg hover:bg-[#0055a3] transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </nav>
  );
}
