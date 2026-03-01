import { Award, Users, ClipboardCheck, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "45 ans d'expérience",
    description: "Depuis 1978, nous concevons et réalisons des cuisines professionnelles avec une expertise reconnue sur le long terme.",
  },
  {
    icon: Lightbulb,
    title: "Spécialistes techniques",
    description: "Ingénierie de la restauration uniquement. Pas de généralistes, que des experts maîtrisant les contraintes techniques.",
  },
  {
    icon: Users,
    title: "Interlocuteur unique",
    description: "De l'étude de faisabilité à la réception des travaux, une équipe dédiée qui connaît votre projet dans les moindres détails.",
  },
  {
    icon: ClipboardCheck,
    title: "Respect des normes",
    description: "Hygiène alimentaire, sécurité incendie, accessibilité PMR, réglementation thermique. Conformité garantie.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
          Une expertise technique au service de votre projet
        </h2>
        <p className="text-lg text-slate-500">
          Le secteur de la restauration est complexe. Notre métier est de gérer cette complexité pour vous.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#e8f4f8] text-[#5489a3] flex items-center justify-center mb-4">
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
