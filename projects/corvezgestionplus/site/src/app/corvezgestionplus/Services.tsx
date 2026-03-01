"use client";

const services = [
  {
    image: "/service-admin.png",
    title: "Gestion administrative",
    description: "Organisation documentaire et archivage. Classement et structuration des dossiers. Préparation des documents pour votre expert-comptable.",
  },
  {
    image: "/service-compta.png",
    title: "Pré-comptabilité",
    description: "Saisie comptable et préparation des écritures. Suivi des flux financiers. Liaison avec votre cabinet comptable.",
  },
  {
    image: "/service-facturation.png",
    title: "Suivi de facturation",
    description: "Émission et envoi des factures. Suivi des paiements. Relances clients structurées et régulières.",
  },
  {
    image: "/service-paie.png",
    title: "Préparation de la paie",
    description: "Collecte et préparation des variables de paie. Organisation des éléments pour le cabinet de paie. Suivi des déclarations sociales.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 font-medium mb-3 tracking-wide uppercase text-sm">
            Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Ce que je prends en charge
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Une consultante opérationnelle qui intervient directement chez vous.
            Je m'adapte à vos outils existants et vous rendez un administratif organisé.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
