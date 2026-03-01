const partners = [
  "ALPTIS",
  "APIVIA", 
  "APICIL",
  "APRIL",
  "ASAF & AFPS",
  "MALAKOFF HUMANIS",
  "NÉOLIANE",
  "SWISS LIFE",
  "CEGEMA",
  "COVERITY",
];

export default function PartnersMarquee() {
  return (
    <div className="w-full mask-gradient overflow-hidden relative mt-4">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">
        Nos partenaires assureurs
      </p>
      <div className="flex animate-marquee gap-12 items-center w-max opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Partners Text Logos */}
        {partners.map((partner, index) => (
          <span key={index} className="text-xl font-bold text-slate-700">
            {partner}
          </span>
        ))}
        {/* Duplicate Set */}
        {partners.map((partner, index) => (
          <span key={`dup-${index}`} className="text-xl font-bold text-slate-700 ml-12">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
