import { Search, Lightbulb, Users, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic et compréhension",
    description: "Nous commençons par une analyse approfondie de votre contexte, vos enjeux et votre maturité sur le sujet. Cette phase permet d'identifier les leviers d'amélioration prioritaires.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Conception et co-construction",
    description: "Nous élaborons avec vous les solutions adaptées à votre culture d'entreprise et vos contraintes opérationnelles. Nos recommandations sont toujours actionnables.",
  },
  {
    number: "03",
    icon: Users,
    title: "Accompagnement au déploiement",
    description: "Nous restons à vos côtés pendant la mise en œuvre : formation des équipes, documentation, suivi des indicateurs, ajustements en cours de route.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Évaluation et pérennisation",
    description: "Nous mesurons les résultats obtenus et accompagnons la montée en autonomie de vos équipes. L'objectif est de pérenniser les pratiques installées.",
  },
];

export default function Methodology() {
  return (
    <section id="methode" className="overflow-hidden bg-white border-neutral-100 border-t pt-24 pb-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-16">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#00A651] mb-4">
            Notre méthode
          </h3>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
            Du diagnostic à la pérennisation
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
                  <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#00A651] flex items-center justify-center mb-4">
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
