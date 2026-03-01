import { Search, ClipboardList, HandshakeIcon, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit de votre projet",
    description: "Nous analysons votre situation personnelle (permis, casier judiciaire, expérience), votre projet professionnel et vos contraintes pour identifier la meilleure voie d'accès.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Plan d'action",
    description: "Nous établissons un plan détaillé : étapes administratives, formations à suivre, délais, budget prévisionnel. Vous savez exactement où vous allez.",
  },
  {
    number: "03",
    icon: HandshakeIcon,
    title: "Accompagnement opérationnel",
    description: "Nous vous accompagnons dans la réalisation concrète : constitution des dossiers, préparation aux examens, relations avec les administrations.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lancement et suivi",
    description: "Nous restons à vos côtés pour les premiers pas : mise en conformité finale, conseils de démarrage, questions post-création.",
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
