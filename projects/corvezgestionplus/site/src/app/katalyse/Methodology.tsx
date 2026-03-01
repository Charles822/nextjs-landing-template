import { Search, Lightbulb, Users, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic",
    description: "Analyse approfondie de votre situation, de vos marchés, de vos forces et faiblesses. Nous prenons le temps de comprendre avant de recommander.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Recommandations",
    description: "Préconisations claires et argumentées, directement actionnables. Pas de rapport théorique, des solutions concrètes pour vos équipes.",
  },
  {
    number: "03",
    icon: Users,
    title: "Accompagnement",
    description: "Mise en œuvre aux côtés de vos équipes. Conduite du changement, formation, ajustements en cours de route.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Déploiement",
    description: "Suivi des résultats et pérennisation. Nous restons mobilisés jusqu'à ce que la stratégie porte ses fruits.",
  },
];

export default function Methodology() {
  return (
    <section id="methodologie" className="bg-[#FAFAFA] border-slate-100 border-t py-20 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#0065c2] mb-4">
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
                <div className="text-6xl font-bold text-[#0065c2]/10 mb-4">{step.number}</div>
                <div className="w-12 h-12 rounded-xl bg-[#eff6ff] text-[#0065c2] flex items-center justify-center mb-4">
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
