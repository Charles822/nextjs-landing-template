import Image from "next/image";
import type { ProjectConfig } from "@/types/project";

interface PartnersProps {
  config: ProjectConfig;
}

export default function Partners({ config }: PartnersProps) {
  const { brandColor, partners } = config;
  if (!partners?.items?.length) return null;

  return (
    <section className="bg-white border-t border-slate-100 pt-20 pb-20 pr-6 pl-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {partners.sectionLabel && (
          <p
            className="text-sm font-medium uppercase tracking-[0.18em] mb-3"
            style={{ color: brandColor }}
          >
            {partners.sectionLabel}
          </p>
        )}
        {partners.headline && (
          <h2 className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight mb-12">
            {partners.headline}
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {partners.items.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-colors duration-300"
            >
              {partner.logo ? (
                partner.url ? (
                  <a
                    href={partner.url}
                    className="relative w-full h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={64}
                      className="object-contain max-h-14 w-auto"
                    />
                  </a>
                ) : (
                  <div className="relative w-full h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={64}
                      className="object-contain max-h-14 w-auto"
                    />
                  </div>
                )
              ) : (
                <span className="text-sm font-medium text-neutral-600">
                  {partner.name}
                </span>
              )}
              {partner.description && (
                <p className="text-xs text-neutral-500 mt-2 text-center line-clamp-2">
                  {partner.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
