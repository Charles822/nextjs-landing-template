import { Leaf, Award, TreePine, BookOpen } from "lucide-react";

const services = [
  {
    id: "conseil",
    icon: Leaf,
    title: "Conseil stratégique RSE",
    description: "Définir une feuille de route RSE cohérente avec votre stratégie métier. Intégration de la RSE à votre plan stratégique, cartographie des parties prenantes, plan d'action avec indicateurs.",
    cta: "En savoir plus",
  },
  {
    id: "diagnostic",
    icon: Award,
    title: "Diagnostic et évaluation",
    description: "Évaluez votre niveau de maturité et identifiez vos leviers de progrès. Évaluation ISO 26000 agréée AFNOR, diagnostic achats responsables, matrice de matérialité ESG.",
    cta: "Demander un diagnostic",
  },
  {
    id: "formation",
    icon: BookOpen,
    title: "Formations sur mesure",
    description: "Monter en compétence interne sur les enjeux RSE. Formations pour COMEX, responsables RSE, équipes opérationnelles. Préparation aux labels certifiants.",
    cta: "Voir les programmes",
  },
];

const benefits = [
  {
    color: "green",
    title: "Agrément AFNOR",
    description: "Évaluations ISO 26000 et formations certifiantes réalisées par des auditeurs agréés.",
  },
  {
    color: "emerald",
    title: "20 ans d'expérience",
    description: "Expertise terrain construite avec la stratégie RSE d'Accor international et +80 organisations accompagnées.",
  },
  {
    color: "teal",
    title: "Approche opérationnelle",
    description: "Solutions concrètes et réalisables, pas que du conseil. Accompagnement jusqu'à la mise en œuvre.",
  },
];

export default function Services() {
  return (
    <section id="expertises" className="bg-[#FAFAFA] border-slate-100 border-t">
      <div className="grid lg:grid-cols-12 gap-12 lg:px-12 pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12">
        {/* Services Column - 7 columns */}
        <div className="lg:col-span-7 overflow-hidden space-y-12">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2D5A3D]">Nos Expertises</h3>
          <p className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight max-w-3xl">
            3 domaines d'intervention pour structurer votre démarche{" "}
            <span className="text-[#2D5A3D] font-medium">
              de l'évaluation au déploiement.
            </span>
          </p>

          <div className="w-full mask-gradient no-scrollbar" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
            <div className="flex gap-6 w-full gap-x-6 gap-y-6 items-stretch pb-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="flex-1 min-w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col hover:border-[#2D5A3D]/30 transition-colors duration-300"
                  >
                    <div className="flex text-[#2D5A3D] bg-[#f0fdf4] w-12 h-12 rounded-lg mb-0 items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 leading-tight mt-6 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-auto w-full pt-4 border-t border-slate-50">
                      <a 
                        href="#contact" 
                        className="text-xs font-semibold text-[#2D5A3D] flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {service.cta}
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
        </div>

        {/* Stats/Info Column - 5 columns */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Pourquoi BonSens Conseil ?</h3>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#2D5A3D] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
