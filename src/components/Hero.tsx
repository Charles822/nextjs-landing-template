"use client";

import Image from "next/image";
import { ArrowRight, Check, Award } from "lucide-react";
import type { ProjectConfig } from "@/types/project";
import PartnersMarquee from "./PartnersMarquee";

interface HeroProps {
  config: ProjectConfig;
}

export default function Hero({ config }: HeroProps) {
  const { brandColor, hero } = config;
  const useGradient = hero.heroVariant === "gradient";

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : "0, 101, 194";
  };
  const rgb = hexToRgb(brandColor);

  return (
    <section className="grid lg:grid-cols-12 min-h-[640px]">
      <div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center">
        {hero.quote && (
          <div className="mb-6">
            <p className="text-lg italic text-[#7c878e] font-light">"{hero.quote}"</p>
            {hero.quoteAuthor && (
              <p className="text-sm text-[#b1b1b1] mt-2">{hero.quoteAuthor}</p>
            )}
          </div>
        )}

        <h1 className="text-5xl lg:text-7xl tracking-tighter leading-[1.05] mb-8 text-neutral-900">
          <span className="font-light block text-slate-600">{hero.headline.line1}</span>
          <span
            className="font-serif-custom italic font-medium block mt-0"
            style={{ color: brandColor }}
          >
            {hero.headline.line2}
          </span>
          <span className="font-light block text-slate-600 text-3xl lg:text-5xl mt-2">
            {hero.headline.line3}
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-10 font-normal">
          {hero.subheadline}{" "}
          {hero.subheadlineBold && (
            <span className="font-medium text-neutral-800">{hero.subheadlineBold}</span>
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
          <a
            href="#contact"
            className="group font-medium text-white rounded-lg pt-4 pr-8 pb-4 pl-8 relative transition-all duration-300 overflow-hidden hover:opacity-90"
            style={{
              backgroundColor: brandColor,
              boxShadow: `0 18px 40px -15px rgba(${rgb}, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)`,
            }}
          >
            <div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full" />
            <span className="flex items-center gap-2 relative">
              {hero.ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="text-xs font-medium text-neutral-600 flex gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                >
                  <Check className="w-4 h-4" />
                </div>
                <span className="whitespace-pre-line">{hero.badge1}</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                >
                  <Check className="w-4 h-4" />
                </div>
                <span className="whitespace-pre-line">{hero.badge2}</span>
              </div>
            </div>
          </div>
        </div>

        <PartnersMarquee config={config} />
      </div>

      <div
        className={`lg:col-span-5 lg:h-auto overflow-hidden w-full h-[500px] relative ${
          useGradient ? "" : ""
        }`}
      >
        {useGradient ? (
          <div
            className="w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `linear-gradient(135deg, ${brandColor} 0%, ${brandColor}dd 50%, ${brandColor}99 100%)`,
              backgroundColor: brandColor,
            }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 animate-pulse bg-gradient-to-br from-emerald-400 via-[#2D5A3D] to-green-800 opacity-80 mix-blend-multiply w-[500px] h-[500px] rounded-full absolute top-1/2 left-1/2 blur-3xl" />
            <div className="flex z-30 pointer-events-none pb-10 absolute right-0 bottom-2 left-0 items-end justify-center">
              <div className="w-80 h-64 relative">
                <div className="flex flex-col bg-gradient-to-b from-white/20 to-white/5 rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl justify-between border border-white/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-white/10 border-white/20 text-white">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold tracking-tight text-white">
                          {hero.cardTitle}
                        </h3>
                        <p className="text-xs text-emerald-100">{hero.cardSubtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full overflow-hidden border rounded-lg h-28 bg-slate-800 border-white/10">
                    <div className="flex items-center justify-center h-full text-white/60 text-sm">
                      {hero.caption}
                    </div>
                  </div>
                  <div className="w-full h-px mt-4 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full bg-white rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : hero.image ? (
          <>
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-br opacity-30"
              style={{ background: `linear-gradient(to bottom right, ${brandColor}4D, transparent, ${brandColor}33)` }}
            />
            <div className="flex z-30 pointer-events-none pb-10 absolute right-0 bottom-2 left-0 items-end justify-center">
              <div className="w-80 h-64 relative">
                <div className="flex flex-col bg-gradient-to-b from-white/20 to-white/5 rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl justify-between border border-white/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-white/10 border-white/20 text-white">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold tracking-tight text-white">
                          {hero.cardTitle}
                        </h3>
                        <p className="text-xs text-blue-100">{hero.cardSubtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full overflow-hidden border rounded-lg h-28 bg-slate-800 border-white/10">
                    <div className="flex items-center justify-center h-full text-white/60 text-sm">
                      {hero.caption}
                    </div>
                  </div>
                  <div className="w-full h-px mt-4 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full bg-white rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {hero.caption && hero.image && (
          <div className="flex pointer-events-none z-30 pb-2 absolute right-0 bottom-0 left-0 justify-center">
            <div className="bg-slate-900/60 backdrop-blur-md text-xs text-neutral-200 rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/10 shadow-lg">
              <span className="inline-flex w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="font-medium tracking-tight">{hero.caption}</span>
            </div>
          </div>
        )}

        {!useGradient && hero.image && (
          <div className="absolute inset-0 flex pointer-events-none">
            <div className="w-1/4 h-full border-r border-white/10 backdrop-blur-[1px]" />
            <div className="w-1/4 h-full border-r border-white/10 backdrop-blur-[2px]" />
            <div className="w-1/4 h-full border-r border-white/10 backdrop-blur-[4px] bg-white/5" />
            <div className="w-1/4 h-full backdrop-blur-[8px] bg-white/10" />
          </div>
        )}
      </div>
    </section>
  );
}
