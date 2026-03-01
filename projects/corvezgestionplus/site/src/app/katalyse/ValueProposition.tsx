import { Target, Heart, Award, Handshake } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Engagement",
    description: "Nous nous engageons pleinement dans chaque mission. Si vous cherchez du consensus mou, ne nous sollicitez pas.",
  },
  {
    icon: Heart,
    title: "Sincérité",
    description: "Nous vous disons ce que vous devez entendre — pas ce que vous voulez entendre. Indépendance totale garantie.",
  },
  {
    icon: Award,
    title: "Exigence",
    description: "La rigueur n'est pas un vain mot chez nous. C'est une marque de fabrique visible dans chaque livrable.",
  },
  {
    icon: Handshake,
    title: "Solidarité",
    description: "Nos consultants sont toujours prêts à donner un coup de main, au-delà de leurs attributions strictes.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
          Un conseil direct, sans complaisance
        </h2>
        <p className="text-lg text-slate-500">
          36 ans d'accompagnement de PME et ETI françaises, avec une approche fondée sur quatre valeurs.
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
