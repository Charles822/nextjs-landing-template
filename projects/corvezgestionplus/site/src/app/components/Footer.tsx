export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-neutral-200 pt-14 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white border border-neutral-200 rounded-3xl px-6 py-10 lg:px-10 lg:py-12 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Brand */}
            <div className="lg:w-1/3 space-y-5">
              <div 
                className="bg-[#0065c2] w-10 h-10 flex items-center justify-center text-white font-sans tracking-tight leading-none rounded"
                style={{ padding: '2px' }}
              >
                <div className="text-center">
                  <span className="block text-lg font-light">AG</span>
                  <span className="block text-[6px] font-medium tracking-wide">conseil</span>
                </div>
              </div>
              <p className="text-sm text-neutral-500 max-w-sm">
                Courtier indépendant spécialisé en assurances de personnes : Santé Senior, Santé Pro et Prévoyance.
              </p>
              <div className="text-sm text-neutral-600">
                <p>Lun-Vend 9h00-18h00</p>
                <p>01 47 40 45 05</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div className="space-y-3">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                  Offres
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <a href="#senior" className="hover:text-[#0065c2] transition-colors">
                      Mutuelle Senior
                    </a>
                  </li>
                  <li>
                    <a href="#pro" className="hover:text-[#0065c2] transition-colors">
                      Mutuelle Pro
                    </a>
                  </li>
                  <li>
                    <a href="#prevoyance" className="hover:text-[#0065c2] transition-colors">
                      Prévoyance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                  Informations
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <a href="#contact" className="hover:text-[#0065c2] transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#0065c2] transition-colors">
                      Mentions Légales
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 border-t border-neutral-100 pt-6 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-neutral-400">
              © 2024 AG Conseil. Tous droits réservés. ORIAS n° [à compléter]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
