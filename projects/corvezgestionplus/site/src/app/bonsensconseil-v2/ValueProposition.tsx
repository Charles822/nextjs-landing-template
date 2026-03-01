import { Search, FileCheck, UserCheck, Leaf } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Méthodologies reconnues",
    description: "ISO 26000, ISO 20400, BNQ 9700. Pas de jargon ni concepts internes — des standards que vos auditeurs connaissent.",
  },
  {
    icon: FileCheck,
    title: "Agrément AFNOR",
    description: "Habilités à réaliser vos évaluations ISO 26000 et à vous préparer aux labels. Garantie de qualité méthodologique.",
  },
  {
    icon: UserCheck,
    title: "Expertise terrain",
    description: "Notre fondatrice a construit la stratégie RSE d'Accor à l'international. 20 ans d'expérience opérationnelle.",
  },
  {
    icon: Leaf,
    title: "Entreprise à mission",
    description: "Statut ESS et entreprise à mission — un alignement réel entre notre modèle économique et nos prestations.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
          Une approche RSE pragmatique et opérationnelle
        </h2>
        <p className="text-lg text-slate-500">
          Nous nous appuyons sur les référentiels internationaux éprouvés pour structurer votre démarche sur des bases solides.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] text-[#2D5A3D] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
