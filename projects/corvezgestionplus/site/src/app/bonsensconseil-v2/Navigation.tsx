import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2D5A3D] flex items-center justify-center">
              <span className="text-white font-bold text-sm">BS</span>
            </div>
            <span className="font-semibold text-slate-900">BonSens Conseil</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#expertises" className="text-sm text-slate-600 hover:text-[#2D5A3D] transition-colors">
              Nos expertises
            </Link>
            <Link href="#methodologie" className="text-sm text-slate-600 hover:text-[#2D5A3D] transition-colors">
              Notre méthode
            </Link>
            <Link href="#contact" className="text-sm text-slate-600 hover:text-[#2D5A3D] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <Link 
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] text-white text-sm font-medium rounded-lg hover:bg-[#1F4A2F] transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </nav>
  );
}
