import { Search, HandCoins, UserCheck, Tag } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Analyse réelle",
    description: "Nous étudions votre situation (âge, besoins, budget) avant de comparer.",
  },
  {
    icon: HandCoins,
    title: "Négociation",
    description: "Nous négocions avec nos partenaires assureurs pour obtenir les meilleures conditions.",
  },
  {
    icon: UserCheck,
    title: "Interlocuteur unique",
    description: "Nous restons votre contact dédié, même après la souscription.",
  },
  {
    icon: Tag,
    title: "Même prix",
    description: "Vous payez le même prix qu'en direct, sans frais de dossier supplémentaires.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
          Pourquoi passer par un courtier plutôt qu&apos;un comparateur en ligne ?
        </h2>
        <p className="text-lg text-slate-500">
          Un comparateur affiche des tarifs. Un courtier analyse vos besoins, négocie pour vous et vous accompagne dans la durée.
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
