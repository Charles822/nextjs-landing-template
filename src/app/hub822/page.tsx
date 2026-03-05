import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-2 text-center">LandingMachine</h1>
        <p className="text-slate-400 text-center mb-12">Template de landing pages modernes</p>
        
        <div className="space-y-4">
          <Link 
            href="/master"
            className="block p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">LandingMachine</h2>
                <p className="text-slate-400 text-sm">Template complet – toutes les sections visibles</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/bonsensconseil-v2"
            className="block p-6 bg-[#2D5A3D]/20 hover:bg-[#2D5A3D]/30 rounded-2xl transition-all border border-[#2D5A3D]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#4ade80]">BonSens Conseil V2 ⭐</h2>
                <p className="text-slate-300 text-sm">Version STRICTEMENT conforme au master template</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/greenconseil-v2"
            className="block p-6 bg-[#00A651]/20 hover:bg-[#00A651]/30 rounded-2xl transition-all border border-[#00A651]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#00A651]">GREEN Conseil V2 ⭐</h2>
                <p className="text-slate-300 text-sm">Version STRICTEMENT conforme au master template</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/katalyse"
            className="block p-6 bg-[#0065c2]/20 hover:bg-[#0065c2]/30 rounded-2xl transition-all border border-[#0065c2]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#60a5fa]">Katalyse ⭐</h2>
                <p className="text-slate-300 text-sm">Cabinet conseil en stratégie PME & ETI</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/acfaty"
            className="block p-6 bg-[#0065c2]/20 hover:bg-[#0065c2]/30 rounded-2xl transition-all border border-[#0065c2]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#60a5fa]">Acfaty ⭐</h2>
                <p className="text-slate-300 text-sm">Cabinet conseil VTC, Taxi & Transport</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/restauconseil"
            className="block p-6 bg-[#5489a3]/20 hover:bg-[#5489a3]/30 rounded-2xl transition-all border border-[#5489a3]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#7cc4d4]">Restauconseil ⭐</h2>
                <p className="text-slate-300 text-sm">Ingénierie de la restauration depuis 1978</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/fidemconseil"
            className="block p-6 bg-[#1e3a5f]/20 hover:bg-[#1e3a5f]/30 rounded-2xl transition-all border border-[#1e3a5f]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#4a90a4]">Fidem Conseil ⭐</h2>
                <p className="text-slate-300 text-sm">Gestion de paie et RH externalisée</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/altiusconseil"
            className="block p-6 bg-[#2563eb]/20 hover:bg-[#2563eb]/30 rounded-2xl transition-all border border-[#2563eb]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#60a5fa]">Altius Conseil ⭐</h2>
                <p className="text-slate-300 text-sm">Formation & accompagnement Qualiopi</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/xtep"
            className="block p-6 bg-[#0f766e]/20 hover:bg-[#0f766e]/30 rounded-2xl transition-all border border-[#0f766e]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#14b8a6]">XTEP ⭐</h2>
                <p className="text-slate-300 text-sm">Cabinet de conseil en gestion d'entreprise</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/lacourcelleassocies"
            className="block p-6 bg-[#b0107d]/20 hover:bg-[#b0107d]/30 rounded-2xl transition-all border border-[#b0107d]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#b0107d]">La Courcelle & Associés ⭐</h2>
                <p className="text-slate-300 text-sm">Cabinet de conseil en évolution professionnelle</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/penicaudpatrimoine"
            className="block p-6 bg-[#36a9e1]/20 hover:bg-[#36a9e1]/30 rounded-2xl transition-all border border-[#36a9e1]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#36a9e1]">Penicaud Patrimoine ⭐</h2>
                <p className="text-slate-300 text-sm">Cabinet de courtage en gestion de patrimoine</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>

          <Link 
            href="/agendadiagnostics"
            className="block p-6 bg-[#0094d3]/20 hover:bg-[#0094d3]/30 rounded-2xl transition-all border border-[#0094d3]/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1 text-[#0094d3]">Agenda Diagnostics ⭐</h2>
                <p className="text-slate-300 text-sm">Diagnostics immobiliers - RDV en ligne</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Sélectionnez un projet pour voir la landing page</p>
          <p className="mt-2 text-xs">La V2 suit exactement la structure du master template</p>
        </div>
      </div>
    </main>
  );
}
