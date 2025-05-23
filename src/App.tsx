import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './components/LanguageSelector';
import { WebsiteGenerator } from './components/WebsiteGenerator';
import { MarketingGenerator } from './components/MarketingGenerator';
import { HerbalistAI } from './components/HerbalistAI';
import { IntegrationsPlaceholder } from './components/IntegrationsPlaceholder';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">{t('header.title')}</h1>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <WebsiteGenerator />
          <MarketingGenerator />
          <HerbalistAI />
          <IntegrationsPlaceholder />
        </div>
      </main>
    </div>
  );
}

export default App;