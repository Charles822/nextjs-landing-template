export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">LandingMachine</h1>
        <p className="text-slate-400 mb-8">Template de landing pages modernes</p>
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <p className="text-slate-300 mb-4">Accédez au hub des projets :</p>
          <a 
            href="/hub822"
            className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all font-medium"
          >
            Voir tous les projets
          </a>
        </div>
      </div>
    </main>
  );
}