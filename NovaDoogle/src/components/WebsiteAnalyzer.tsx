import React, { useState } from 'react';

const WebsiteAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!url) return;
    setLoading(true);
    setResult('Analyzing...');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{
            role: 'user',
            content: `Analyze the following website and return SEO issues, performance tips and improvement suggestions: ${url}`
          }]
        })
      });
      const data = await response.json();
      setResult(data.choices?.[0]?.message?.content || 'No response');
    } catch (err) {
      setResult('Error analyzing site');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow mb-6 bg-white">
      <h2 className="text-lg font-bold mb-2">🌍 Website Analyzer</h2>
      <input
        className="border px-2 py-1 mr-2"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
      />
      <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleAnalyze}>
        Analyze
      </button>
      <pre className="mt-4 whitespace-pre-wrap">{loading ? 'Loading...' : result}</pre>
    </div>
  );
};

export default WebsiteAnalyzer;