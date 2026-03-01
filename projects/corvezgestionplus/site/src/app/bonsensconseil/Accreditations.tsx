import { Award, FileCheck, Users, Building2 } from "lucide-react";

const accreditations = [
  {
    icon: FileCheck,
    code: "ISO 26000",
    title: "Responsabilité sociétale",
    description: "Évaluation et accompagnement selon les 7 domaines d'action de la norme.",
  },
  {
    icon: Building2,
    code: "ISO 20400",
    title: "Achats responsables",
    description: "Structuration de votre démarche et préparation au label RFAR.",
  },
  {
    icon: Users,
    code: "BNQ 9700",
    title: "Entreprise en santé",
    description: "Déploiement SQVT et préparation au Label Groupe Entreprises en Santé.",
  },
];

export default function Accreditations() {
  return (
    <section className="bg-[#f0fdf4] border-slate-100 border-t py-16 lg:px-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#2D5A3D] rounded-full text-sm font-medium mb-6">
          <Award className="w-4 h-4" />
          Agréés AFNOR pour l'évaluation et la formation
        </div>
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">
          Référentiels et normes que nous maîtrisons
        </h2>
        <p className="text-lg text-slate-500">
          Nous intervenons sur la base des référentiels internationaux reconnus, garantissant la crédibilité de nos évaluations auprès de vos parties prenantes.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {accreditations.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="p-6 rounded-2xl bg-white border border-[#dcfce7] shadow-sm">
              <div className="text-xs font-bold text-[#2D5A3D] uppercase tracking-wider mb-2">
                {item.code}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500">
          <span className="font-medium text-[#2D5A3D]">Agréé AFNOR</span> • ISO 26000 • ISO 20400 • BNQ 9700 • Entreprise à Mission • ESS
        </p>
      </div>
    </section>
  );
}
