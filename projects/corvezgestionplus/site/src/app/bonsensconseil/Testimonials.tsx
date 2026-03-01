import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Notre entreprise de 1 100 salariés a été évaluée par Géraldine Pauly. Grâce à son professionnalisme et ses connaissances en matière de RSE, l'évaluation AFAQ 26000 s'est déroulée parfaitement : plannings respectés, entretiens bien menés, rapport clair et exploitable.",
    author: "Pierre Montigny",
    company: "Legallais",
  },
  {
    quote: "Au-delà de la facilité de collaborer avec Géraldine, le niveau de satisfaction des entreprises est très élevé. Sa technicité et sa capacité à mettre en mouvement un groupe de travail font d'elle une intervenante de haut niveau.",
    author: "Cathleen Berton",
    company: "CCI du Loiret",
  },
];

const stats = [
  { number: "+80", label: "organisations accompagnées" },
  { number: "+50", label: "évaluations ISO 26000" },
  { number: "95%", label: "satisfaction client" },
  { number: "20 ans", label: "d'expérience cumulée" },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f0fdf4] border-neutral-100 border-t pt-20 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
            Ils nous font confiance
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl lg:text-4xl font-bold text-[#2D5A3D] mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-[#dcfce7]">
              <Quote className="w-8 h-8 text-[#2D5A3D]/30 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                « {item.quote} »
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#2D5A3D] font-semibold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
