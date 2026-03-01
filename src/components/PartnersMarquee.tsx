import type { ProjectConfig } from "@/types/project";

interface PartnersMarqueeProps {
  config: ProjectConfig;
}

export default function PartnersMarquee({ config }: PartnersMarqueeProps) {
  const { brandColor, partnersMarquee } = config;

  return (
    <div className="w-full overflow-hidden">
      <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Expertises</p>
      <div className="flex gap-8 animate-marquee">
        {[...partnersMarquee, ...partnersMarquee].map((partner, index) => (
          <span
            key={index}
            className="text-sm font-medium text-slate-500 whitespace-nowrap flex items-center gap-2"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: brandColor }}
            />
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
