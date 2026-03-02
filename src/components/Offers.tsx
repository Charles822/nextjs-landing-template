import type { ProjectConfig } from "@/types/project";
import { ArrowRight } from "lucide-react";

interface OffersProps {
  config: ProjectConfig;
}

export default function Offers({ config }: OffersProps) {
  const { brandColor, offers } = config;
  if (!offers?.items?.length) return null;

  return (
    <section id="offers" className="bg-white border-t border-slate-100 pt-20 pb-20 pr-6 pl-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {offers.sectionLabel && (
          <p
            className="text-sm font-medium uppercase tracking-[0.18em] mb-3"
            style={{ color: brandColor }}
          >
            {offers.sectionLabel}
          </p>
        )}
        {offers.headline && (
          <h2 className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight mb-12 font-display">
            {offers.headline}
          </h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.items.map((offer) => (
            <div
              key={offer.id}
              className="bg-slate-50/80 rounded-2xl border border-slate-100 p-6 flex flex-col hover:border-slate-200 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-6">
                {offer.description}
              </p>
              <a
                href={offer.href || "#contact"}
                className="inline-flex items-center gap-2 text-sm font-medium group"
                style={{ color: brandColor }}
              >
                {offer.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
