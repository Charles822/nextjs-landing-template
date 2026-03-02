import Image from "next/image";
import type { ProjectConfig } from "@/types/project";
import { getIcon } from "@/lib/icons";

interface ServicesProps {
  config: ProjectConfig;
}

export default function Services({ config }: ServicesProps) {
  const { brandColor, services } = config;
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : "0, 101, 194";
  };
  const rgb = hexToRgb(brandColor);

  return (
    <section id="services" className="bg-[#FAFAFA] border-slate-100 border-t">
      <div className="grid lg:grid-cols-12 gap-12 lg:px-12 pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12">
        <div className="lg:col-span-7 overflow-hidden space-y-12">
          <h3
            className="text-sm font-medium uppercase tracking-[0.18em]"
            style={{ color: brandColor }}
          >
            {services.sectionLabel}
          </h3>
          <p className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight max-w-3xl">
            {services.headline}{" "}
            <span style={{ color: brandColor }} className="font-medium">
              {services.headlineHighlight}
            </span>
          </p>

          <div
            className="w-full mask-gradient no-scrollbar"
            style={{ overflowX: "auto", overflowY: "hidden" }}
          >
            <div className="flex gap-6 w-full gap-x-6 gap-y-6 items-stretch pb-4">
              {services.items.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <div
                    key={service.id}
                    className="flex-1 min-w-[280px] shrink-0 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col overflow-hidden transition-colors duration-300 hover:border-opacity-30"
                    style={{ ["--tw-border-opacity" as string]: "1" }}
                  >
                    {service.image && (
                      <div className="relative w-full h-40 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div
                          className="absolute bottom-3 right-3 flex bg-white/90 backdrop-blur-sm w-10 h-10 rounded-lg items-center justify-center shadow-lg"
                          style={{ color: brandColor }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                    {!service.image && (
                      <div className="pt-6 px-6">
                        <div
                          className="flex w-12 h-12 rounded-lg mb-0 items-center justify-center"
                          style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-lg font-semibold text-neutral-900 leading-tight mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-neutral-500 mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <div className="mt-auto w-full pt-4 border-t border-slate-50">
                        <a
                          href="#contact"
                          className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                          style={{ color: brandColor }}
                        >
                          {service.cta}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">{services.benefitsTitle}</h3>
          <ul className="space-y-6">
            {services.benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1"
                  style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
