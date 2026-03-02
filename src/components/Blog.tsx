import Image from "next/image";
import type { ProjectConfig } from "@/types/project";
import { ArrowRight } from "lucide-react";

interface BlogProps {
  config: ProjectConfig;
}

export default function Blog({ config }: BlogProps) {
  const { brandColor, blog } = config;
  if (!blog?.items?.length) return null;

  return (
    <section className="bg-[#FAFAFA] border-t border-slate-100 pt-20 pb-20 pr-6 pl-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {blog.sectionLabel && (
          <p
            className="text-sm font-medium uppercase tracking-[0.18em] mb-3"
            style={{ color: brandColor }}
          >
            {blog.sectionLabel}
          </p>
        )}
        {blog.headline && (
          <h2 className="text-2xl lg:text-3xl font-light text-neutral-800 leading-snug tracking-tight mb-12">
            {blog.headline}
          </h2>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          {blog.items.map((item) => (
            <a
              key={item.id}
              href={item.href || "#"}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col"
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
            >
              {item.image && (
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                {item.date && (
                  <p className="text-xs text-neutral-500 mb-2">{item.date}</p>
                )}
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-opacity-90">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1 line-clamp-3">
                  {item.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium mt-4"
                  style={{ color: brandColor }}
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
