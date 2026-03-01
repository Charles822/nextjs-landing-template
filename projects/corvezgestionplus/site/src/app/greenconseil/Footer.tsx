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
                src="/logo.svg" 
                alt="GREEN Conseil" 
                width={140} 
                height={47}
                className="h-10 w-auto"
              />
              <p className="text-sm text-neutral-500 max-w-sm">
                Cabinet de conseil en transformation des organisations. De la stratégie à la mise en œuvre opérationnelle.
              </p>
              <div className="text-sm text-neutral-600">
                <p>10 avenue Jean Moulin</p>
                <p>75014 PARIS</p>
                <p>+33 1 45 58 13 10 / 18</p>
              </div>
              <div className="flex gap-2 text-xs text-[#00A651] font-medium flex-wrap">
                <span className="px-2 py-1 bg-[#f0fdf4] rounded">QUALIOPI</span>
                <span className="px-2 py-1 bg-[#f0fdf4] rounded">Membre AFCM</span>
                <span className="px-2 py-1 bg-[#f0fdf4] rounded">Diplômés E2CM</span>
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
                    <a href="#expertises" className="hover:text-[#00A651] transition-colors">
                      Relation Client & Digital
                    </a>
                  </li>
                  <li>
                    <a href="#expertises" className="hover:text-[#00A651] transition-colors">
                      Monde du Sport
                    </a>
                  </li>
                  <li>
                    <a href="#expertises" className="hover:text-[#00A651] transition-colors">
                      Juridique & Contractuel
                    </a>
                  </li>
                  <li>
                    <a href="#expertises" className="hover:text-[#00A651] transition-colors">
                      Formation
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
                    <a href="#" className="hover:text-[#00A651] transition-colors">
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a href="#methode" className="hover:text-[#00A651] transition-colors">
                      Notre méthode
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-[#00A651] transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00A651] transition-colors">
                      Mentions légales
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                  Partenaires
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>PBZ Avocat</li>
                  <li>Lefebvre Dalloz</li>
                  <li>Francis Lefèbvre Formation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 border-t border-neutral-100 pt-6 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-neutral-400">
              © 2024 GREEN Conseil. Tous droits réservés.
            </p>
            <p className="text-xs text-neutral-400">
              Certifié QUALIOPI • Membre AFCM • Diplômés E2CM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
