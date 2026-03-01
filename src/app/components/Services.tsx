import { Glasses, Building2, Umbrella, Check } from "lucide-react";

const services = [
  {
    id: "senior",
    icon: Glasses,
    title: "Complémentaire Senior",
    description: "Vos besoins évoluent : optique, dentaire, audio, hospitalisation. Nous sélectionnons les contrats qui renforcent ces garanties sans options superflues.",
    cta: "Demander une étude Senior",
  },
  {
    id: "pro",
    icon: Building2,
    title: "Complémentaire Pro",
    description: "Dirigeants, TNS, libéraux : vous avez besoin d'une couverture modulable et fiscalement optimisée (Madelin). Un contrat adapté à votre statut.",
    cta: "Demander une étude Pro",
  },
  {
    id: "prevoyance",
    icon: Umbrella,
    title: "Prévoyance",
    description: "Protégez vos revenus en cas d'arrêt de travail, invalidité ou décès. Essentiel pour les indépendants. Nous calibrons les garanties justes.",
    cta: "Demander une étude Prévoyance",
  },
];

const benefits = [
  {
    color: "green",
    title: "Indépendance",
    description: "Nous travaillons avec un large panel d'assureurs reconnus, sans exclusivité.",
  },
  {
    color: "blue",
    title: "Transparence tarifaire",
    description: "Nos services ne vous coûtent rien de plus que si vous souscriviez en direct.",
  },
  {
    color: "indigo",
    title: "Expertise métier",
    description: "Nous connaissons les spécificités de chaque profil et les évolutions réglementaires.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#FAFAFA] border-slate-100 border-t">
      <div className="grid lg:grid-cols-12 gap-12 lg:px-12 pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12">
        {/* Services Column */}
        <div className="lg:col-span-7 overflow-hidden space-y-12">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#0065c2]">
            Nos Expertises
          </h3>
          <p className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight max-w-3xl">
            Nous accompagnons trois types de clients avec des{" "}
            <span className="text-[#0065c2] font-medium">
              besoins distincts
            </span>{" "}
            pour une protection optimale.
          </p>

          <div className="w-full mask-gradient no-scrollbar" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
            <div className="flex gap-6 w-full gap-x-6 gap-y-6 items-stretch pb-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    id={service.id}
                    className="flex-1 min-w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col hover:border-[#0065c2]/30 transition-colors duration-300"
                  >
                    <div className="flex text-[#0065c2] bg-[#eff6ff] w-12 h-12 rounded-lg mb-0 items-center justify-center">
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
                        className="text-xs font-semibold text-[#0065c2] flex items-center gap-1 hover:gap-2 transition-all"
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

        {/* Stats/Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Pourquoi AG Conseil ?</h3>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className={`w-8 h-8 rounded-full bg-${benefit.color}-50 text-${benefit.color}-600 flex items-center justify-center shrink-0 mt-1`}>
                  <Check className="w-4 h-4" />
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
