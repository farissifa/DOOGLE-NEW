import React from 'react'
import WebsiteGenerator from '@/components/WebsiteGenerator'
import MarketingGenerator from '@/components/MarketingGenerator'

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Doogle1 AI Platform</h1>
      <WebsiteGenerator />
      <MarketingGenerator />
    </div>
  )
}

export default App