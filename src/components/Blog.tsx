import Image from "next/image";
import type { ProjectConfig } from "@/types/project";
import { ArrowRight } from "lucide-react";

interface BlogProps {
  config: ProjectConfig;
}

export default function Blog({ config }: BlogProps) {
  const { brandColor, blog } = config;
  if (!blog?.items?.length) return null;

  const subheadline = "subheadline" in blog ? (blog as { subheadline?: string }).subheadline : undefined;

  return (
    <section id="blog" className="border-t border-slate-200 bg-[#FAFAFA] pt-20 pb-20 relative">
      <div className="grid md:grid-cols-12 gap-12 p-8 lg:px-12">
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            {blog.sectionLabel && (
              <p
                className="text-sm font-medium uppercase tracking-[0.18em] mb-2"
                style={{ color: brandColor }}
              >
                {blog.sectionLabel}
              </p>
            )}
            <h2 className="text-3xl font-medium tracking-tighter text-neutral-900 mb-4">
              {blog.headline}
            </h2>
            {subheadline && (
              <p className="text-neutral-600 text-sm leading-relaxed mb-8">{subheadline}</p>
            )}
            <a
              href="#blog"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-80"
              style={{ color: brandColor }}
            >
              Voir tous les articles
              <ArrowRight className="w-3 h-3 ml-2" />
            </a>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="flex flex-col">
            {blog.items.map((item) => (
              <a
                key={item.id}
                href={item.href || "#"}
                className="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-slate-200 last:border-b-0 hover:bg-white/60 transition-colors px-4 -mx-4 rounded-lg"
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
              >
                {item.image && (
                  <div className="w-full md:w-48 aspect-video rounded-lg bg-slate-200 overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={192}
                      height={108}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  {item.date && (
                    <span className="text-[10px] text-neutral-500 font-mono uppercase block mb-2">
                      {item.date}
                    </span>
                  )}
                  <h3 className="text-lg font-medium text-neutral-900 group-hover:opacity-80 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">{item.excerpt}</p>
                </div>
                <div className="hidden md:block shrink-0" style={{ color: brandColor }}>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
