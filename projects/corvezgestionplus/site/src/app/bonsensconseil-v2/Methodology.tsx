import { Search, Map, Users, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Comprendre votre contexte",
    description: "Diagnostic approfondi de votre écosystème, parties prenantes et enjeux prioritaires. Chaque organisation a son histoire et ses contraintes.",
  },
  {
    number: "02",
    icon: Map,
    title: "Définir une feuille de route",
    description: "Plan d'action adapté à vos ressources et calendrier. Pas de plan théorique impossible à tenir — des actions concrètes, datées et responsabilisées.",
  },
  {
    number: "03",
    icon: Users,
    title: "Accompagner le déploiement",
    description: "Formation des équipes, documentation, suivi des indicateurs, ajustements. Vous n'êtes pas livrés à vous-mêmes après le diagnostic.",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Évaluer et pérenniser",
    description: "Mesure des progrès réalisés et préparation des étapes suivantes. La RSE est un parcours, pas une destination.",
  },
];

export default function Methodology() {
  return (
    <section id="methodologie" className="bg-[#FAFAFA] border-slate-100 border-t py-20 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2D5A3D] mb-4">
            Notre Méthode
          </h3>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900">
            Comment nous travaillons
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[#2D5A3D]/10 mb-4">{step.number}</div>
                <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#2D5A3D] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
