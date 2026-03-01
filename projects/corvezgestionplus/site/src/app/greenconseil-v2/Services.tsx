import Image from "next/image";
import { Users, Trophy, FileText, GraduationCap, Check } from "lucide-react";

const services = [
  {
    id: "relation-client",
    icon: Users,
    image: "/service-digital.jpg",
    title: "Relation Client & Digital",
    description: "Transformer votre expérience client en levier de compétitivité. Parcours multicanaux et transformation digitale.",
    cta: "En savoir plus",
  },
  {
    id: "sport",
    icon: Trophy,
    image: "/service-sport.jpg",
    title: "Monde du Sport",
    description: "Accompagner les fédérations sportives dans leurs mutations. Modernisation SI et industrialisation des métiers DTN.",
    cta: "En savoir plus",
  },
  {
    id: "contract",
    icon: FileText,
    image: "/service-juridique.jpg",
    title: "Sphère Juridique",
    description: "Optimiser la valeur de vos contrats par le Contract Management. N°1 des facilitateurs de projets juridiques informatisés.",
    cta: "En savoir plus",
  },
  {
    id: "formation",
    icon: GraduationCap,
    image: "/service-formation.jpg",
    title: "Formation sur mesure",
    description: "Monter en compétences avec des formations opérationnelles. Certifié QUALIOPI, 98,3% de satisfaction.",
    cta: "En savoir plus",
  },
];

const benefits = [
  {
    color: "green",
    title: "Indépendance",
    description: "Cabinet indépendant à taille humaine, sans conflit d'intérêt. Approche partenariale sur le long terme.",
  },
  {
    color: "emerald",
    title: "Expertise reconnue",
    description: "+400 missions réalisées depuis 2015. Références probantes auprès de grandes organisations.",
  },
  {
    color: "teal",
    title: "Approche terrain",
    description: "Du conseil à la mise en œuvre. Nous restons à vos côtés pendant le déploiement, pas juste en phase de diagnostic.",
  },
];

export default function Services() {
  return (
    <section id="expertises" className="bg-[#FAFAFA] border-slate-100 border-t">
      <div className="grid lg:grid-cols-12 gap-12 lg:px-12 pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12">
        {/* Services Column - 7 columns */}
        <div className="lg:col-span-7 overflow-hidden space-y-12">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#00A651]">Nos Expertises</h3>
          <p className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight max-w-3xl">
            4 Business Units pour accompagner votre transformation{" "}
            <span className="text-[#00A651] font-medium">
              de la stratégie à la mise en œuvre.
            </span>
          </p>

          <div className="w-full mask-gradient no-scrollbar" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
            <div className="flex gap-6 w-full gap-x-6 gap-y-6 items-stretch pb-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="flex-1 min-w-[280px] shrink-0 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col hover:border-[#00A651]/30 transition-colors duration-300 overflow-hidden"
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
                      <div className="absolute bottom-3 right-3 flex text-[#00A651] bg-white/90 backdrop-blur-sm w-10 h-10 rounded-lg items-center justify-center shadow-lg">
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
                          className="text-xs font-semibold text-[#00A651] flex items-center gap-1 hover:gap-2 transition-all"
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
          <h3 className="text-xl font-semibold text-slate-900">Pourquoi GREEN Conseil ?</h3>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#00A651] flex items-center justify-center shrink-0 mt-1">
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
