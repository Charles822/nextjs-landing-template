import { Users, Trophy, FileText, GraduationCap } from "lucide-react";

const businessUnits = [
  {
    id: "relation-client",
    icon: Users,
    title: "Relation Client & Digital",
    subtitle: "Transformer votre expérience client en levier de compétitivité",
    description: "La révolution numérique oblige les organisations à repenser leur stratégie et leurs parcours clients. Nous plaçons la relation client au cœur de votre transformation digitale.",
    deliverables: [
      "Conception et optimisation des parcours clients multicanaux",
      "Transformation digitale alignée sur votre business model",
      "Accompagnement au changement pour fédérer les équipes",
      "Innovation via notre département R&D dédié"
    ],
    target: "Directions Marketing, Service Client, DSI"
  },
  {
    id: "sport",
    icon: Trophy,
    title: "Monde du Sport",
    subtitle: "Accompagner les fédérations sportives dans leurs mutations",
    description: "Les acteurs du sport font face à des défis structurants : modernisation des systèmes d'information, développement des communautés de pratiquants, industrialisation des métiers de la DTN.",
    deliverables: [
      "Modernisation des écosystèmes SI au service de la pratique",
      "Industrialisation des métiers de la Direction Technique Nationale",
      "Développement et fidélisation des communautés",
      "Modes de travail collaboratifs dans les organisations déconcentrées"
    ],
    target: "Fédérations sportives, clubs professionnels, institutions"
  },
  {
    id: "contract",
    icon: FileText,
    title: "Sphère Juridique et Contractuelle",
    subtitle: "Optimiser la valeur de vos contrats par le Contract Management",
    description: "Nous positionnons l'intelligence contractuelle comme levier stratégique pour accompagner vos projets, sécuriser vos relations fournisseurs et améliorer votre performance économique.",
    deliverables: [
      "Mise en place ou optimisation du processus Contract Management",
      "Digitalisation de la fonction juridique",
      "Cartographie des acteurs et structuration de la chaîne contrat",
      "Accompagnement au changement pour faire adhérer les métiers"
    ],
    target: "Directions Juridiques, Achats, Contrats",
    highlight: "N°1 des facilitateurs de projets juridiques informatisés"
  },
  {
    id: "formation",
    icon: GraduationCap,
    title: "Formation sur mesure",
    subtitle: "Monter en compétences avec des formations opérationnelles",
    description: "Nous concevons des parcours de formation adaptés à vos besoins terrain, de la transmission des connaissances à l'accompagnement à la mise en œuvre.",
    deliverables: [
      "Formations intra-entreprise sur mesure (QUALIOPI certifié)",
      "Formation AFEST innovante en Contract Management (1ère France)",
      "Interventions écoles et universités",
      "Accompagnement pédagogique intégré aux projets"
    ],
    target: "Directions RH, Responsables Formation",
    stats: "98,3/100 de satisfaction — +1218 élèves formés"
  }
];

export default function BusinessUnits() {
  return (
    <section id="expertises" className="bg-[#FAFAFA] border-slate-100 border-t">
      <div className="lg:px-12 pt-20 pr-6 pb-20 pl-6">
        <div className="max-w-4xl mb-12">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#00A651] mb-4">
            Nos domaines d'expertise
          </h3>
          <h2 className="text-3xl lg:text-4xl font-medium text-neutral-900 leading-snug tracking-tight">
            4 Business Units pour accompagner votre transformation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl">
          {businessUnits.map((bu) => {
            const Icon = bu.icon;
            return (
              <div 
                key={bu.id}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col hover:border-[#00A651]/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex text-[#00A651] bg-[#f0fdf4] w-12 h-12 rounded-xl items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-neutral-900 leading-tight">
                      {bu.title}
                    </h4>
                    <p className="text-sm text-[#00A651] font-medium mt-1">{bu.subtitle}</p>
                  </div>
                </div>
                
                {bu.highlight && (
                  <div className="mb-4 px-3 py-2 bg-[#f0fdf4] rounded-lg text-sm text-[#00A651] font-medium">
                    ★ {bu.highlight}
                  </div>
                )}
                
                {bu.stats && (
                  <div className="mb-4 px-3 py-2 bg-[#f0fdf4] rounded-lg text-sm text-[#00A651] font-medium">
                    {bu.stats}
                  </div>
                )}
                
                <p className="text-neutral-600 mb-4">{bu.description}</p>
                
                <div className="space-y-2 mb-6">
                  {bu.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A651]"></span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-2">Pour : {bu.target}</p>
                  <a 
                    href="#contact" 
                    className="text-sm font-semibold text-[#00A651] flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    En savoir plus
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
