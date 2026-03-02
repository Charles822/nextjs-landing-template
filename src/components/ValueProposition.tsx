import type { ProjectConfig } from "@/types/project";
import { getIcon } from "@/lib/icons";

interface ValuePropositionProps {
  config: ProjectConfig;
}

export default function ValueProposition({ config }: ValuePropositionProps) {
  const { brandColor, valueProposition } = config;

  return (
    <section className="bg-[#FAFAFA] border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6 font-display">
          {valueProposition.headline}
        </h2>
        <p className="text-lg text-slate-500">{valueProposition.subheadline}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {valueProposition.features.map((feature, index) => {
          const Icon = getIcon(feature.icon);
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-100"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
              >
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
