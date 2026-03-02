"use client";

import { motion } from "motion/react";
import type { ProjectConfig } from "@/types/project";
import { Quote, User } from "lucide-react";

interface TestimonialsEnhancedProps {
  config: ProjectConfig;
}

export default function TestimonialsEnhanced({ config }: TestimonialsEnhancedProps) {
  const { brandColor, testimonials } = config;
  if (!testimonials?.items?.length) return null;

  const items = testimonials.items.slice(0, 3);
  const rotations = [-10, 0, 10];

  return (
    <section id="testimonials" className="sm:py-16 pt-12 pb-12 bg-white border-t border-slate-100">
      <div className="mb-8 text-center px-6">
        {testimonials.sectionLabel && (
          <p
            className="text-xs uppercase tracking-widest mb-2 font-medium"
            style={{ color: brandColor }}
          >
            {testimonials.sectionLabel}
          </p>
        )}
        {testimonials.headline && (
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-neutral-900">
            {testimonials.headline}
          </h2>
        )}
      </div>

      <div className="relative flex items-center justify-center py-8 sm:py-12 min-h-[280px] overflow-hidden">
        <div className="container max-w-full flex justify-center items-center flex-wrap gap-3 px-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-[280px] h-[280px] flex justify-center items-center shrink-0"
              style={{
                background: "linear-gradient(rgba(255, 255, 255, 0.1), transparent)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 16px 20px",
                borderRadius: "1rem",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 24, rotate: rotations[index % rotations.length] }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[index % rotations.length] }}
              whileHover={{ y: -8, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute inset-3 rounded-xl bg-white text-neutral-900 shadow-xl ring-1 ring-neutral-200 overflow-hidden">
                <div className="p-4 h-full flex flex-col">
                  <div
                    className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 mb-3"
                    style={{ color: brandColor }}
                  >
                    <Quote className="h-3 w-3 text-neutral-700" />
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-900 mb-3 flex-1 line-clamp-3">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-neutral-500 bg-neutral-100"
                        style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
                      >
                        <User className="h-3 w-3" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-neutral-900 truncate">
                          {item.author}
                        </div>
                        {(item.company || item.role) && (
                          <div className="text-xs text-neutral-500 truncate">
                            {[item.role, item.company].filter(Boolean).join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
