export default function PartnersMarquee() {
  const partners = [
    "VTC",
    "Taxi",
    "Transport de personnes",
    "Loi Granguillaume",
    "ADS",
    "Carte professionnelle",
    "Capacité de transport",
  ];

  return (
    <div className="w-full overflow-hidden">
      <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Expertises</p>
      <div className="flex gap-8 animate-marquee">
        {[...partners, ...partners].map((partner, index) => (
          <span 
            key={index} 
            className="text-sm font-medium text-slate-500 whitespace-nowrap flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0065c2]"></span>
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
