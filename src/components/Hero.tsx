"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import type { ProjectConfig } from "@/types/project";
import PartnersMarquee from "./PartnersMarquee";
import HeroFloatingCard from "./HeroFloatingCard";

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

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
      <motion.div
        className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-16 pr-6 pb-12 pl-6 relative justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
      >
        {hero.quote && (
          <motion.div className="mb-6" variants={staggerVariants}>
            <p className="text-lg italic text-[#7c878e] font-light font-serif-custom">"{hero.quote}"</p>
            {hero.quoteAuthor && (
              <p className="text-sm text-[#b1b1b1] mt-2">{hero.quoteAuthor}</p>
            )}
          </motion.div>
        )}

        <motion.h1
          className="text-5xl lg:text-7xl tracking-tighter leading-[1.05] mb-8 text-neutral-900"
          variants={staggerVariants}
        >
          <span className="font-light block text-slate-600">{hero.headline.line1}</span>
          <span
            className="font-serif-custom italic font-medium block mt-0"
            style={{ color: brandColor }}
          >
            {hero.headline.line2}
          </span>
          {hero.headline.line2 && (
            <span
              className="block w-8 h-0.5 rounded-full mb-2"
              style={{ backgroundColor: brandColor }}
            />
          )}
          <span className="font-light block text-slate-600 text-3xl lg:text-5xl mt-2">
            {hero.headline.line3}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-10 font-normal"
          variants={staggerVariants}
        >
          {hero.subheadline}{" "}
          {hero.subheadlineBold && (
            <span className="font-medium text-neutral-800">{hero.subheadlineBold}</span>
          )}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16"
          variants={staggerVariants}
        >
          <motion.a
            href="#contact"
            className="group font-medium text-white rounded-lg pt-4 pr-8 pb-4 pl-8 relative transition-all duration-300 overflow-hidden hover:opacity-90"
            style={{
              backgroundColor: brandColor,
              boxShadow: `0 18px 40px -15px rgba(${rgb}, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)`,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full" />
            <span className="flex items-center gap-2 relative">
              {hero.ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>

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
        </motion.div>

        <motion.div variants={staggerVariants}>
          <PartnersMarquee config={config} />
        </motion.div>
      </motion.div>

      <div
        className={`lg:col-span-5 lg:h-auto overflow-hidden w-full h-[500px] relative ${
          useGradient ? "" : ""
        }`}
      >
        {useGradient ? (
          <div
            className="w-full h-full relative"
            style={{
              backgroundImage: `linear-gradient(135deg, ${brandColor} 0%, ${brandColor}dd 50%, ${brandColor}99 100%)`,
              backgroundColor: brandColor,
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, rgba(${rgb}, 0.15) 0%, transparent 70%)`,
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
              }}
            />
            <HeroFloatingCard
              cardTitle={hero.cardTitle}
              cardSubtitle={hero.cardSubtitle}
              services={config.services.items}
            />
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
              className="absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none"
              style={{ background: `linear-gradient(to bottom right, ${brandColor}4D, transparent, ${brandColor}33)` }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to left, rgba(0,0,0,0.15) 0%, transparent 40%)",
              }}
            />
            <HeroFloatingCard
              cardTitle={hero.cardTitle}
              cardSubtitle={hero.cardSubtitle}
              services={config.services.items}
            />
          </>
        ) : null}

        {hero.caption && hero.image && (
          <div className="flex pointer-events-none z-30 pb-2 absolute right-0 bottom-0 left-0 justify-center">
            <div className="bg-slate-900/60 backdrop-blur-md text-xs text-neutral-200 rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/10 shadow-lg">
              <span
                className="inline-flex w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: brandColor }}
              />
              <span className="font-medium tracking-tight">{hero.caption}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
