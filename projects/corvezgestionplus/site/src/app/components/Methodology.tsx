import { ClipboardList, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Étude de vos besoins",
    description: "Nous analysons votre situation personnelle ou professionnelle : profil de santé, budget, priorités de couverture.",
  },
  {
    number: "2",
    title: "Comparaison ciblée",
    description: "Nous interrogeons nos partenaires assureurs et sélectionnons les contrats les plus adaptés, en toute transparence.",
  },
  {
    number: "3",
    title: "Négociation et conseil",
    description: "Nous négocions les conditions tarifaires et vous expliquons clairement les différences entre les offres retenues.",
  },
  {
    number: "4",
    title: "Suivi dans la durée",
    description: "Une fois assuré, nous restons votre contact privilégié pour toute question, modification ou évolution de votre contrat.",
  },
];

export default function Methodology() {
  return (
    <section className="overflow-hidden bg-[#FAFAFA] border-neutral-100 border-t pt-24 pb-24 relative">
      {/* Subtle Grid Background */}
      <div 
        className="bg-neutral-200 pointer-events-none absolute top-0 right-0 bottom-0 left-0"
        style={{ maskImage: 'radial-gradient(ellipse_at_center,black_40%,transparent_100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full gap-x-12 gap-y-12 items-center">
          
          {/* Left Column: Visual */}
          <div className="lg:p-12 overflow-hidden flex flex-col min-h-[500px] bg-center bg-white border-neutral-200 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-xl items-center justify-center">
            <div className="absolute inset-0 bg-slate-50/50"></div>
            {/* Checklist visual */}
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-100 w-full max-w-sm z-10">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-50 pb-4">
                <div className="w-12 h-12 rounded-full bg-[#dbeafe] text-[#0065c2] flex items-center justify-center">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Dossier Client</div>
                  <div className="text-lg font-bold text-slate-900">Étude Personnalisée</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Analyse Besoins",
                  "Comparatif 10+ assureurs",
                  "Sélection Meilleur Tarif",
                  "Accompagnement Suivi",
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                    <span className="text-green-500">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="text-xs text-slate-400">Statut</div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">VALIDÉ</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#0065c2]/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-8 justify-center">
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
              Un accompagnement
              <br />
              <span className="text-[#0065c2]">en 4 étapes claires.</span>
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#eff6ff] text-[#0065c2] border border-[#dbeafe] flex items-center justify-center font-bold text-sm shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
