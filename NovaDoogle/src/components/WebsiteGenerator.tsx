import React, { useState } from 'react'

const WebsiteGenerator = () => {
  const [prompt, setPrompt] = useState('')
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
        messages: [{ role: 'user', content: `Lag en enkel HTML-side basert på: ${prompt}` }]
      })
    })
    const data = await response.json()
    setResult(data.choices?.[0]?.message?.content || 'No response')
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>🌐 Website Generator</h2>
      <input value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Beskriv nettsiden..." />
      <button onClick={handleGenerate}>Generate</button>
      <pre>{result}</pre>
    </div>
  )
}

export default WebsiteGenerator