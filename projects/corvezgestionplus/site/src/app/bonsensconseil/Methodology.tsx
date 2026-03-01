import { Search, Map, Users, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Comprendre votre contexte",
    description: "Chaque organisation a son histoire, sa culture, ses contraintes. Nous commençons par un diagnostic approfondi pour comprendre votre écosystème et vos enjeux prioritaires.",
  },
  {
    number: "02",
    icon: Map,
    title: "Définir une feuille de route",
    description: "Nous construisons avec vous un plan d'action adapté à vos ressources. Pas de plan théorique impossible à tenir — des actions concrètes, datées et responsabilisées.",
  },
  {
    number: "03",
    icon: Users,
    title: "Accompagner le déploiement",
    description: "Nous restons à vos côtés pendant la mise en œuvre : formation, documentation, suivi des indicateurs, ajustements. Vous n'êtes pas livrés à vous-mêmes après le diagnostic.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Évaluer et pérenniser",
    description: "Nous mesurons les progrès réalisés et préparons les étapes suivantes. La RSE est un parcours, pas une destination.",
  },
];

export default function Methodology() {
  return (
    <section id="approche" className="overflow-hidden bg-white border-neutral-100 border-t pt-24 pb-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-16">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2D5A3D] mb-4">
            Notre méthode
          </h3>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
            Comment nous travaillons
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[#f0fdf4] absolute -top-6 -left-2 select-none">
                  {step.number}
                </div>
                <div className="relative pt-8">
                  <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#2D5A3D] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
