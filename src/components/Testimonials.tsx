import type { ProjectConfig } from "@/types/project";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  config: ProjectConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  const { brandColor, testimonials } = config;
  if (!testimonials?.items?.length) return null;

  return (
    <section className="bg-[#FAFAFA] border-t border-slate-100 pt-20 pb-20 pr-6 pl-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {testimonials.sectionLabel && (
          <p
            className="text-sm font-medium uppercase tracking-[0.18em] mb-3"
            style={{ color: brandColor }}
          >
            {testimonials.sectionLabel}
          </p>
        )}
        {testimonials.headline && (
          <h2 className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight mb-12">
            {testimonials.headline}
          </h2>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm flex flex-col"
            >
              <Quote
                className="w-8 h-8 mb-4 opacity-20"
                style={{ color: brandColor }}
              />
              <blockquote className="text-neutral-700 leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-medium text-neutral-900">{item.author}</p>
                {(item.company || item.role) && (
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {[item.role, item.company].filter(Boolean).join(" • ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
