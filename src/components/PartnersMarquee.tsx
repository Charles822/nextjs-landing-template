import Image from "next/image";
import type { ProjectConfig } from "@/types/project";

const PLACEHOLDER_LOGOS = [
  "/placeholders/logo-1.svg",
  "/placeholders/logo-2.svg",
  "/placeholders/logo-3.svg",
  "/placeholders/logo-4.svg",
  "/placeholders/logo-5.svg",
  "/placeholders/logo-6.svg",
];

interface PartnersMarqueeProps {
  config: ProjectConfig;
}

export default function PartnersMarquee({ config }: PartnersMarqueeProps) {
  const { brandColor, partners } = config;
  const hasPartners = (partners?.items?.length ?? 0) > 0;

  const label = hasPartners ? "Ils nous font confiance" : "Expertises";

  const items = hasPartners
    ? partners!.items.filter((p) => p.logo || p.name).map((p) => ({ type: "partner" as const, partner: p }))
    : PLACEHOLDER_LOGOS.map((src) => ({ type: "placeholder" as const, src }));

  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden group/marquee">
      <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">{label}</p>
      <div className="flex gap-8 animate-marquee items-center group-hover/marquee:[animation-play-state:paused]">
        {marqueeItems.map((item, index) =>
          item.type === "partner" ? (
            <div
              key={`partner-${index}`}
              className="flex-shrink-0 h-12 w-24 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {item.partner.logo ? (
                <Image
                  src={item.partner.logo}
                  alt={item.partner.name}
                  width={96}
                  height={48}
                  className="object-contain max-h-10 w-auto"
                />
              ) : (
                <span className="text-sm font-medium text-slate-500">{item.partner.name}</span>
              )}
            </div>
          ) : (
            <div
              key={`placeholder-${index}`}
              className="flex-shrink-0 h-12 w-24 flex items-center justify-center grayscale opacity-70"
            >
              <Image
                src={item.src}
                alt=""
                width={96}
                height={48}
                className="object-contain max-h-10 w-auto"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
