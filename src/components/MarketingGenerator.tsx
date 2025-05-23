import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Megaphone } from 'lucide-react';
import { SocialPlatform, MarketingContent } from '../types';

export function MarketingGenerator() {
  const { t } = useTranslation();
  const [platform, setPlatform] = useState<SocialPlatform>('instagram');
  const [niche, setNiche] = useState('');
  const [generatedContent, setGeneratedContent] = useState<MarketingContent | null>(null);

  const platforms: SocialPlatform[] = ['instagram', 'tiktok', 'facebook', 'youtube'];

  const handleGenerate = () => {
    // Placeholder for API call
    setGeneratedContent({
      platform,
      content: 'Sample marketing content...',
      hashtags: ['#sample', '#marketing', '#content'],
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Megaphone className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">{t('marketing.title')}</h2>
      </div>

      <div className="space-y-4">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value as SocialPlatform)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {platforms.map((p) => (
            <option key={p} value={p}>
              {t(`marketing.platforms.${p}`)}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder={t('marketing.nichePlaceholder')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />

        <button
          onClick={handleGenerate}
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {t('marketing.generate')}
        </button>

        {generatedContent && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
            <p className="font-medium text-gray-700">{generatedContent.content}</p>
            <div className="flex flex-wrap gap-2">
              {generatedContent.hashtags.map((tag) => (
                <span key={tag} className="text-sm text-indigo-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}