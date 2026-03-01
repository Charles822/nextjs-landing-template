import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0065c2] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-white">Acfaty</span>
            </div>
            <p className="text-sm mb-4 max-w-sm">
              Cabinet conseil spécialisé dans l'accompagnement à la création d'entreprises VTC, Taxi et transport de personnes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#expertises" className="hover:text-white transition-colors">
                  Nos accompagnements
                </Link>
              </li>
              <li>
                <Link href="#methodologie" className="hover:text-white transition-colors">
                  Notre méthode
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Acfaty. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
