import React, { useState } from 'react'

const MarketingGenerator = () => {
  const [platform, setPlatform] = useState('Instagram')
  const [niche, setNiche] = useState('')
  const [result, setResult] = useState('')

  const handleGenerate = async () => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{
          role: 'user',
          content: `Lag markedsføringstekst for ${niche} på ${platform}`
        }]
      })
    })
    const data = await response.json()
    setResult(data.choices?.[0]?.message?.content || 'No response')
  }

  return (
    <div>
      <h2>📣 Marketing Generator</h2>
      <select value={platform} onChange={e => setPlatform(e.target.value)}>
        <option>Instagram</option>
        <option>Facebook</option>
        <option>TikTok</option>
      </select>
      <input value={niche} onChange={e => setNiche(e.target.value)} placeholder="Skriv nisje..." />
      <button onClick={handleGenerate}>Generate</button>
      <pre>{result}</pre>
    </div>
  )
}

export default MarketingGenerator