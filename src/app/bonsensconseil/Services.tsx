import { Compass, ClipboardCheck, GraduationCap, ShoppingCart, Heart } from "lucide-react";

const services = [
  {
    id: "conseil",
    icon: Compass,
    title: "Conseil stratégique RSE",
    shortDesc: "Définir une feuille de route RSE cohérente avec votre stratégie métier",
    description: "Nous ne considérons pas la RSE comme un enjeu isolé. Nous l'intégrons à votre plan stratégique en lien avec vos priorités : conformité, appels d'offres, cohésion interne.",
    deliverables: ["Cartographie parties prenantes", "Priorisation des enjeux ESG", "Plan d'action avec indicateurs", "Conduite du changement"],
    cta: "Voir un exemple de mission",
  },
  {
    id: "diagnostic",
    icon: ClipboardCheck,
    title: "Diagnostic et évaluation",
    shortDesc: "Évaluez votre niveau de maturité et identifiez vos leviers de progrès",
    description: "Un diagnostic factuel est la base de toute démarche RSE structurée. Nous évaluons votre positionnement par rapport aux référentiels reconnus.",
    deliverables: ["Évaluation ISO 26000 agréée AFNOR", "Diagnostic achats responsables", "Matrice de matérialité", "Feuille de route chiffrée"],
    cta: "Demander un diagnostic",
  },
  {
    id: "formation",
    icon: GraduationCap,
    title: "Formations sur mesure",
    shortDesc: "Monter en compétence interne sur les enjeux RSE",
    description: "Nous formons vos équipes à la maîtrise des concepts et outils RSE. Formation aux fondamentaux ou préparation aux certifications.",
    deliverables: ["Formation ISO 26000 (2-4 jours)", "Préparation label RFAR", "Ateliers Fresque écologique", "Team building RSE"],
    cta: "Voir les programmes",
  },
  {
    id: "achats",
    icon: ShoppingCart,
    title: "Achats responsables",
    shortDesc: "Structurer votre démarche et préparer le label RFAR",
    description: "Les achats représentent souvent 60-80% de l'empreinte ESG. Nous structurons votre démarche alignée sur ISO 20400.",
    deliverables: ["Charte achats responsables", "Critères RSE dans les CDC", "Évaluation fournisseurs", "Préparation certification RFAR"],
    cta: "En savoir plus",
  },
  {
    id: "sqvt",
    icon: Heart,
    title: "Santé et Qualité de Vie au Travail",
    shortDesc: "Agir sur les facteurs de bien-être et réduire les risques psychosociaux",
    description: "Déploiement de la démarche Entreprise en Santé fondée sur la norme BNQ 9700, reconnue par le Label Groupe Entreprises en Santé.",
    deliverables: ["Diagnostic SQVT", "Plan d'action bien-être", "Préparation Label", "Animation groupes de travail"],
    cta: "Découvrir l'approche",
  },
];

export default function Services() {
  return (
    <section id="expertises" className="bg-[#FAFAFA] border-slate-100 border-t">
      <div className="lg:px-12 pt-20 pr-6 pb-20 pl-6">
        <div className="max-w-4xl mb-12">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2D5A3D] mb-4">
            Nos domaines d'intervention
          </h3>
          <h2 className="text-3xl lg:text-4xl font-medium text-neutral-900 leading-snug tracking-tight">
            Des prestations adaptées à vos besoins spécifiques
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col hover:border-[#2D5A3D]/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex text-[#2D5A3D] bg-[#f0fdf4] w-12 h-12 rounded-xl items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 leading-tight">
                      {service.title}
                  </h4>
                    <p className="text-sm text-[#2D5A3D] font-medium mt-1">{service.shortDesc}</p>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D]"></span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <a 
                    href="#contact" 
                    className="text-sm font-semibold text-[#2D5A3D] flex items-center gap-1 hover:gap-2 transition-all"
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
    </section>
  );
}
