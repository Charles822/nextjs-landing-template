import { Shield, FileCheck, Users, Route } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Expertise réglementaire",
    description: "Maîtrise parfaite de la Loi Granguillaume, ADS, cartes professionnelles, capacité de transport.",
  },
  {
    icon: FileCheck,
    title: "Dossiers complets",
    description: "Constitution rigoureuse de tous les dossiers administratifs pour maximiser vos chances d'acceptation.",
  },
  {
    icon: Users,
    title: "Accompagnement humain",
    description: "Un conseiller dédié qui suit votre projet de A à Z. Pas de plateforme automatisée impersonnelle.",
  },
  {
    icon: Route,
    title: "De l'idée à l'exploitation",
    description: "Nous vous accompagnons à chaque étape : formation, examens, immatriculation, choix du véhicule.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
          Un accompagnement complet pour créer votre entreprise
        </h2>
        <p className="text-lg text-slate-500">
          Le secteur du transport est réglementé et complexe. Notre expertise vous guide à travers les démarches.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#dbeafe] text-[#0065c2] flex items-center justify-center mb-4">
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
