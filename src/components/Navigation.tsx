import Link from "next/link";
import Image from "next/image";
import type { ProjectConfig } from "@/types/project";

interface NavigationProps {
  config: ProjectConfig;
}

export default function Navigation({ config }: NavigationProps) {
  const { brandColor, navigation } = config;
  const initial = config.name.charAt(0);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            {(navigation.logoImageLight ?? navigation.logoImage) ? (
              <Image
                src={navigation.logoImageLight ?? navigation.logoImage!}
                alt={config.name}
                width={120}
                height={40}
                className={`object-contain h-10 w-auto ${navigation.logoImageLight ? "" : "brightness-0"}`}
              />
            ) : (
              <>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: brandColor }}
                >
                  <span className="text-white font-bold text-sm">{initial}</span>
                </div>
                <span className="font-semibold text-slate-900">{navigation.logoText}</span>
              </>
            )}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 transition-colors duration-200"
                style={{ ["--hover-color" as string]: brandColor }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors"
            style={{ backgroundColor: brandColor }}
          >
            {navigation.ctaText}
          </Link>
        </div>
      </div>
    </nav>
  );
}
