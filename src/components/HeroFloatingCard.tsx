import { Award } from "lucide-react";
import ServiceImageCarousel from "./ServiceImageCarousel";

interface ServiceItem {
  id: string;
  image?: string;
  title: string;
}

interface HeroFloatingCardProps {
  cardTitle?: string;
  cardSubtitle?: string;
  services: ServiceItem[];
}

export default function HeroFloatingCard({
  cardTitle,
  cardSubtitle,
  services,
}: HeroFloatingCardProps) {
  return (
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
                  {cardTitle}
                </h3>
                <p className="text-xs text-white/90">{cardSubtitle}</p>
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden border rounded-lg h-28 bg-slate-800 border-white/10">
            <ServiceImageCarousel services={services} />
          </div>
          <div className="w-full h-px mt-4 overflow-hidden rounded-full bg-white/20">
            <div className="h-full bg-white rounded-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
