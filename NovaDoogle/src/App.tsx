import React from 'react'
import WebsiteAnalyzer from '@/components/WebsiteAnalyzer'
import ImprovementPlan from '@/components/ImprovementPlan'

const App = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">🚀 Doogle1 – Din AI-tjenesteplattform</h1>
        <p className="text-gray-500 mt-2 text-lg">Bygg, analyser og forbedre med AI på din side</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">🌍 Nettsideanalyse</h2>
          <WebsiteAnalyzer />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">📈 Forbedringsforslag</h2>
          <ImprovementPlan />
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400">
        &copy; 2025 Doogle1 AI – utviklet med deg i fokus
      </footer>
    </main>
  )
}

export default App