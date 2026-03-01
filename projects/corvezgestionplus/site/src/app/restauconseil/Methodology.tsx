import { Search, PencilRuler, HardHat, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Comprendre votre projet",
    description: "Nous analysons vos besoins, vos contraintes (normatives, architecturales, budgétaires) et vos objectifs de performance. Chaque projet est unique.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Concevoir la solution",
    description: "Nous élaborons les études techniques, les plans et les choix d'équipements adaptés. Optimisation des flux, ergonomie, respect des normes.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Coordonner la réalisation",
    description: "Nous pilotons les travaux et coordonnons les différents corps de métier. Respect des délais, du budget et des normes.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Livrer et accompagner",
    description: "Nous réceptionnons les travaux, formons vos équipes et vous laissons une documentation complète. Votre cuisine est opérationnelle.",
  },
];

export default function Methodology() {
  return (
    <section id="methodologie" className="bg-[#FAFAFA] border-slate-100 border-t py-20 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#5489a3] mb-4">
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
                <div className="text-6xl font-bold text-[#5489a3]/10 mb-4">{step.number}</div>
                <div className="w-12 h-12 rounded-xl bg-[#e8f4f8] text-[#5489a3] flex items-center justify-center mb-4">
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
