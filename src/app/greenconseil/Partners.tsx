import { Award, Users, BookOpen } from "lucide-react";

const partners = [
  {
    name: "PBZ Avocat",
    description: "Partenaire juridique nous permettant de proposer une offre complète de Contract Management.",
  },
  {
    name: "Lefebvre Dalloz",
    description: "Partenaire de notre formation AFEST innovante en Contract Management, première de France sur catalogue.",
  },
  {
    name: "Francis Lefèbvre Formation",
    description: "Nous sommes intervenants référents sur les programmes de digitalisation de la fonction juridique.",
  },
];

const credentials = [
  {
    icon: Award,
    title: "QUALIOPI",
    description: "Certification qualité formation (98,3% satisfaction)",
  },
  {
    icon: Users,
    title: "AFCM",
    description: "Membres de l'Association Française de Contract Management",
  },
  {
    icon: BookOpen,
    title: "E2CM",
    description: "Diplômés Expert en Contract Management",
  },
];

export default function Partners() {
  return (
    <section className="bg-[#f0fdf4] border-neutral-100 border-t pt-20 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
            Reconnus et accompagnés par des acteurs de référence
          </h2>
        </div>

        {/* Partners */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-[#dcfce7]">
              <h3 className="font-semibold text-slate-900 mb-2">{partner.name}</h3>
              <p className="text-sm text-slate-500">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div key={index} className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00A651] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{cred.title}</h4>
                  <p className="text-sm text-slate-500">{cred.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
