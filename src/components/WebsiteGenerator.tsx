import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'lucide-react';

export function WebsiteGenerator() {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = () => {
    // Placeholder for API call
    setGeneratedCode('<!-- Generated website code will appear here -->');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Code className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">{t('website.title')}</h2>
      </div>
      
      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t('website.promptPlaceholder')}
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        
        <button
          onClick={handleGenerate}
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {t('website.generate')}
        </button>
        
        {generatedCode && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm text-gray-700">
              {generatedCode}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}