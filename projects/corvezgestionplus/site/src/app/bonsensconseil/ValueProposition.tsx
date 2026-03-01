import { Target, Compass, Heart, Leaf } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Méthodologies reconnues",
    description: "Nous nous appuyons sur les référentiels internationaux éprouvés. Pas de jargon ni de concepts internes inédits — des standards que vos auditeurs connaissent.",
  },
  {
    icon: Target,
    title: "Expertise terrain",
    description: "Notre fondatrice a construit la stratégie RSE d'Accor à l'international. Notre équipe cumule 20 ans d'expérience dans la mise en œuvre opérationnelle.",
  },
  {
    icon: Leaf,
    title: "Agrément AFNOR",
    description: "Habilitation à réaliser vos évaluations ISO 26000 et à vous préparer aux labels. Cette accréditation garantit la qualité méthodologique.",
  },
  {
    icon: Heart,
    title: "Entreprise à mission",
    description: "Notre statut d'entreprise à mission et ESS traduit un alignement réel entre notre modèle et nos prestations, pas un argument marketing.",
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
          Ce qui nous différencie : une expertise concrète, des méthodologies reconnues, et un accompagnement sur-mesure.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] text-[#2D5A3D] flex items-center justify-center mb-4">
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
