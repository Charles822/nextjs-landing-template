export default function PartnersMarquee() {
  const partners = [
    "ISO 26000",
    "ISO 20400",
    "BNQ 9700",
    "AFNOR",
    "Entreprise à Mission",
    "ESS",
  ];

  return (
    <div className="w-full overflow-hidden">
      <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Référentiels et accréditations</p>
      <div className="flex gap-8 animate-marquee">
        {[...partners, ...partners].map((partner, index) => (
          <span 
            key={index} 
            className="text-sm font-medium text-slate-500 whitespace-nowrap flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D]"></span>
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
