import { ClipboardList, CheckCircle2, Search, Map, Users, LineChart } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Diagnostic et compréhension",
    description: "Nous commençons par une analyse approfondie de votre contexte, vos enjeux et votre maturité sur le sujet.",
  },
  {
    number: "2",
    icon: Map,
    title: "Conception et co-construction",
    description: "Nous élaborons avec vous les solutions adaptées à votre culture d'entreprise et vos contraintes opérationnelles.",
  },
  {
    number: "3",
    icon: Users,
    title: "Accompagnement au déploiement",
    description: "Nous restons à vos côtés pendant la mise en œuvre : formation, documentation, suivi des indicateurs.",
  },
  {
    number: "4",
    icon: LineChart,
    title: "Évaluation et pérennisation",
    description: "Nous mesurons les résultats et accompagnons la montée en autonomie de vos équipes.",
  },
];

export default function Methodology() {
  return (
    <section id="methode" className="overflow-hidden bg-[#FAFAFA] border-neutral-100 border-t pt-24 pb-24 relative">
      {/* Subtle Grid Background */}
      <div 
        className="bg-neutral-200 pointer-events-none absolute top-0 right-0 bottom-0 left-0"
        style={{ maskImage: 'radial-gradient(ellipse_at_center,black_40%,transparent_100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full gap-x-12 gap-y-12 items-center">
          
          {/* Left Column: Visual - Checklist */}
          <div className="lg:p-12 overflow-hidden flex flex-col min-h-[500px] bg-center bg-white border-neutral-200 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-xl items-center justify-center">
            <div className="absolute inset-0 bg-slate-50/50"></div>
            {/* Checklist visual */}
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-100 w-full max-w-sm z-10">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-50 pb-4">
                <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#00A651] flex items-center justify-center">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Notre méthode</div>
                  <div className="text-lg font-bold text-slate-900">Accompagnement structuré</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Diagnostic approfondi",
                  "Solutions co-construites",
                  "Déploiement terrain",
                  "Pérennisation",
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
                <div className="text-xs text-slate-400">Approche</div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">VALIDÉ</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#00A651]/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-8 justify-center">
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
              Notre méthode
              <br />
              <span className="text-[#00A651]">en 4 étapes.</span>
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#f0fdf4] text-[#00A651] border border-[#dcfce7] flex items-center justify-center font-bold text-sm shadow-sm">
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
