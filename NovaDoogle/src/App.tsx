import React from 'react'
import WebsiteAnalyzer from '@/components/WebsiteAnalyzer'
import ImprovementPlan from '@/components/ImprovementPlan'
import SelfEditor from '@/components/SelfEditor'
import AIPartnerChat from '@/components/AIPartnerChat'
import LanguageAutoSelector from '@/components/LanguageAutoSelector'
import Loader from '@/components/Loader'

const App = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">🚀 Doogle1 AI Platform</h1>
      <LanguageAutoSelector />
      <WebsiteAnalyzer />
      <ImprovementPlan />
      <SelfEditor />
      <AIPartnerChat />
      <Loader />
    </div>
  )
}

export default App