import { Target, Compass, Users, Award } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Expertise terrain",
    description: "Du conseil à la mise en œuvre opérationnelle. Nous accompagnons nos clients sur toute la chaîne de valeur, pas seulement en phase de recommandation.",
  },
  {
    icon: Target,
    title: "Contract Management",
    description: "Reconnus comme n°1 des facilitateurs de projets juridiques à coloration informatique. Notre formation AFEST est la première de France sur catalogue.",
  },
  {
    icon: Award,
    title: "Certification QUALIOPI",
    description: "Notre organisme de formation est certifié QUALIOPI avec un taux de satisfaction de 98,3%. Garantie de qualité pour vos parcours de formation.",
  },
  {
    icon: Users,
    title: "Partenariats solides",
    description: "Collaborations établies avec PBZ Avocat, Lefebvre Dalloz et Francis Lefèbvre Formation pour une offre complète et crédible.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
          Une approche partenariale, de la stratégie à l'implémentation
        </h2>
        <p className="text-lg text-slate-500">
          Ce qui nous différencie : une expertise concrète, des méthodologies reconnues, et un accompagnement sur-mesure.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] text-[#00A651] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-sm text-slate-500">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
