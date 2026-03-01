import Image from "next/image";
import { ClipboardList, PencilRuler, HardHat, CheckCircle } from "lucide-react";

const services = [
  {
    id: "conseil",
    icon: ClipboardList,
    image: "/service-conseil.jpg",
    title: "Conseil & Études",
    description: "De l'idée à la faisabilité technique. Étude de faisabilité, analyse des flux, dimensionnement des espaces et des équipements, budget prévisionnel.",
    cta: "En savoir plus",
  },
  {
    id: "ingenierie",
    icon: PencilRuler,
    image: "/service-ingenierie.jpg",
    title: "Ingénierie & Conception",
    description: "Conception technique de votre cuisine professionnelle. Plans d'exécution, choix des équipements, coordination technique avec les corps d'état.",
    cta: "En savoir plus",
  },
  {
    id: "realisation",
    icon: HardHat,
    image: "/service-realisation.jpg",
    title: "Réalisation & Suivi",
    description: "De la conception à la livraison clé en main. Suivi de chantier, contrôle qualité, réception, mise en service et formation des équipes.",
    cta: "En savoir plus",
  },
];

const benefits = [
  {
    color: "teal",
    title: "45 ans d'expérience",
    description: "Depuis 1978, nous concevons et réalisons des cuisines professionnelles avec une expertise reconnue.",
  },
  {
    color: "lime",
    title: "Spécialistes techniques",
    description: "Ingénierie de la restauration uniquement. Pas de généralistes, que des experts du secteur.",
  },
  {
    color: "slate",
    title: "Bureau d'étude complet",
    description: "De l'étude de faisabilité à la réception des travaux. Un interlocuteur unique pour votre projet.",
  },
];

export default function Services() {
  return (
    <section id="expertises" className="bg-[#FAFAFA] border-slate-100 border-t">
      <div className="grid lg:grid-cols-12 gap-12 lg:px-12 pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12">
        {/* Services Column - 7 columns */}
        <div className="lg:col-span-7 overflow-hidden space-y-12">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#5489a3]">Nos Missions</h3>
          <p className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight max-w-3xl">
            Une expertise technique au service de votre projet{" "}
            <span className="text-[#5489a3] font-medium">
              de l'étude à la réalisation.
            </span>
          </p>

          <div className="w-full mask-gradient no-scrollbar" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
            <div className="flex gap-6 w-full gap-x-6 gap-y-6 items-stretch pb-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="flex-1 min-w-[280px] shrink-0 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col hover:border-[#5489a3]/30 transition-colors duration-300 overflow-hidden"
                  >
                    {/* Service Image */}
                    <div className="relative w-full h-40 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      {/* Icon overlay */}
                      <div className="absolute bottom-3 right-3 flex text-[#5489a3] bg-white/90 backdrop-blur-sm w-10 h-10 rounded-lg items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-lg font-semibold text-neutral-900 leading-tight mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-neutral-500 mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <div className="mt-auto w-full pt-4 border-t border-slate-50">
                        <a 
                          href="#contact" 
                          className="text-xs font-semibold text-[#5489a3] flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          {service.cta}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats/Info Column - 5 columns */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Pourquoi Restauconseil ?</h3>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#e8f4f8] text-[#5489a3] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
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
