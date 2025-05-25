import React from 'react';
import { useTranslation } from 'react-i18next';
import { Share2, Send } from 'lucide-react';

export function IntegrationsPlaceholder() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Share2 className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">{t('integrations.title')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          className="flex items-center justify-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-indigo-500 hover:text-indigo-600"
          onClick={() => alert(t('integrations.comingSoon'))}
        >
          <Send className="w-5 h-5" />
          <span>{t('integrations.exportWordPress')}</span>
        </button>

        <button
          className="flex items-center justify-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-indigo-500 hover:text-indigo-600"
          onClick={() => alert(t('integrations.comingSoon'))}
        >
          <Send className="w-5 h-5" />
          <span>{t('integrations.postSocial')}</span>
        </button>
      </div>
    </div>
  );
}