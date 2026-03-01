import type { ProjectConfig } from "@/types/project";
import { getIcon } from "@/lib/icons";
import { ClipboardList, CheckCircle2 } from "lucide-react";

interface MethodologyProps {
  config: ProjectConfig;
}

export default function Methodology({ config }: MethodologyProps) {
  const { brandColor, methodology } = config;
  const isChecklist = methodology.variant === "checklist";

  if (isChecklist) {
    return (
      <section
        id="methode"
        className="overflow-hidden bg-[#FAFAFA] border-neutral-100 border-t pt-24 pb-24 relative"
      >
        <div
          className="bg-neutral-200 pointer-events-none absolute top-0 right-0 bottom-0 left-0"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full gap-x-12 gap-y-12 items-center">
            <div className="lg:p-12 overflow-hidden flex flex-col min-h-[500px] bg-center bg-white border-neutral-200 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-xl items-center justify-center">
              <div className="absolute inset-0 bg-slate-50/50" />
              <div
                className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-100 w-full max-w-sm z-10"
                style={{ borderColor: "rgb(241 245 249)" }}
              >
                <div className="flex items-center gap-4 mb-6 border-b border-slate-50 pb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
                  >
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium">
                      {methodology.sectionLabel}
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      Accompagnement structuré
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {(methodology.checklistItems || []).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                      <span style={{ color: brandColor }}>
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <div className="text-xs text-slate-400">Approche</div>
                  <div
                    className="px-2 py-1 text-xs font-bold rounded"
                    style={{
                      backgroundColor: `${brandColor}20`,
                      color: brandColor,
                    }}
                  >
                    VALIDÉ
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-2xl"
                style={{ backgroundColor: `${brandColor}20` }}
              />
              <div
                className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-2xl"
                style={{ backgroundColor: `${brandColor}20` }}
              />
            </div>

            <div className="flex flex-col gap-8 justify-center">
              <h2 className="text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
                {methodology.headline.includes(" en ") ? (
                  <>
                    {methodology.headline.split(" en ")[0]}
                    <br />
                    <span style={{ color: brandColor }}>
                      en {methodology.headline.split(" en ")[1]}
                    </span>
                  </>
                ) : (
                  methodology.headline
                )}
              </h2>
              <div className="space-y-8">
                {methodology.steps.map((step, index) => (
                  <div key={index} className="flex gap-5">
                    <div
                      className="w-10 h-10 shrink-0 rounded-full border flex items-center justify-center font-bold text-sm shadow-sm"
                      style={{
                        backgroundColor: `${brandColor}15`,
                        color: brandColor,
                        borderColor: `${brandColor}40`,
                      }}
                    >
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

  return (
    <section
      id="methodologie"
      className="bg-[#FAFAFA] border-slate-100 border-t py-20 lg:px-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3
            className="text-sm font-medium uppercase tracking-[0.18em] mb-4"
            style={{ color: brandColor }}
          >
            {methodology.sectionLabel}
          </h3>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900">
            {methodology.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.steps.map((step, index) => {
            const Icon = getIcon(step.icon);
            return (
              <div key={index} className="relative">
                <div
                  className="text-6xl font-bold mb-4 opacity-10"
                  style={{ color: brandColor }}
                >
                  {step.number}
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
