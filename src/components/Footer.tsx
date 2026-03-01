import Link from "next/link";
import type { ProjectConfig } from "@/types/project";

interface FooterProps {
  config: ProjectConfig;
}

export default function Footer({ config }: FooterProps) {
  const { brandColor, navigation, footer } = config;

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 lg:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: brandColor }}
              >
                <span className="text-white font-bold text-sm">
                  {config.name.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-white">{config.name}</span>
            </div>
            <p className="text-sm mb-4 max-w-sm">{footer.description}</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navigation.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} {footer.copyright}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
