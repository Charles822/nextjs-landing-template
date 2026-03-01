import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-neutral-200 pt-14 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white border border-neutral-200 rounded-3xl px-6 py-10 lg:px-10 lg:py-12 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Brand */}
            <div className="lg:w-1/3 space-y-5">
              <Image 
                src="/logo.png" 
                alt="BonSens Conseil" 
                width={140} 
                height={47}
                className="h-10 w-auto"
              />
              <p className="text-sm text-neutral-500 max-w-sm">
                Cabinet de conseil en RSE et développement durable. Accompagnement stratégique et opérationnel pour entreprises et collectivités.
              </p>
              <div className="text-sm text-neutral-600">
                <p>contact@bonsensconseil.fr</p>
              </div>
              <div className="flex gap-2 text-xs text-[#2D5A3D] font-medium">
                <span className="px-2 py-1 bg-[#f0fdf4] rounded">Agréé AFNOR</span>
                <span className="px-2 py-1 bg-[#f0fdf4] rounded">ESS</span>
                <span className="px-2 py-1 bg-[#f0fdf4] rounded">Entreprise à Mission</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div className="space-y-3">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                  Expertises
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <a href="#expertises" className="hover:text-[#2D5A3D] transition-colors">
                      Conseil stratégique
                    </a>
                  </li>
                  <li>
                    <a href="#expertises" className="hover:text-[#2D5A3D] transition-colors">
                      Diagnostic / Évaluation
                    </a>
                  </li>
                  <li>
                    <a href="#expertises" className="hover:text-[#2D5A3D] transition-colors">
                      Formations
                    </a>
                  </li>
                  <li>
                    <a href="#expertises" className="hover:text-[#2D5A3D] transition-colors">
                      Achats responsables
                    </a>
                  </li>
                  <li>
                    <a href="#expertises" className="hover:text-[#2D5A3D] transition-colors">
                      SQVT
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
                    <a href="#" className="hover:text-[#2D5A3D] transition-colors">
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a href="#approche" className="hover:text-[#2D5A3D] transition-colors">
                      Notre approche
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-[#2D5A3D] transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#2D5A3D] transition-colors">
                      Mentions légales
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                  Accréditations
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>ISO 26000</li>
                  <li>ISO 20400</li>
                  <li>BNQ 9700</li>
                  <li>Label RFAR</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 border-t border-neutral-100 pt-6 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-neutral-400">
              © 2024 BonSens Conseil. Tous droits réservés.
            </p>
            <p className="text-xs text-neutral-400">
              Entreprise à mission • Qualité ESS • Agréé AFNOR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
