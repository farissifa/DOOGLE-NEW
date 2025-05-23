import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf } from 'lucide-react';
import { HerbalRemedy } from '../types';

export function HerbalistAI() {
  const { t } = useTranslation();
  const [symptoms, setSymptoms] = useState('');
  const [remedies, setRemedies] = useState<HerbalRemedy[]>([]);

  const handleConsult = () => {
    // Placeholder for API call
    setRemedies([
      {
        herb: 'Chamomile',
        form: 'tea',
        dosage: '1-2 cups daily',
        warnings: ['Avoid if allergic to ragweed'],
      },
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Leaf className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-900">{t('herbalist.title')}</h2>
      </div>

      <div className="space-y-4">
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder={t('herbalist.symptomsPlaceholder')}
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />

        <button
          onClick={handleConsult}
          className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          {t('herbalist.consult')}
        </button>

        {remedies.length > 0 && (
          <div className="mt-4 space-y-4">
            {remedies.map((remedy, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg space-y-2">
                <h3 className="font-medium text-green-900">{remedy.herb}</h3>
                <p className="text-green-800">
                  {t('herbalist.form')}: {remedy.form}
                </p>
                <p className="text-green-800">
                  {t('herbalist.dosage')}: {remedy.dosage}
                </p>
                {remedy.warnings.length > 0 && (
                  <div className="mt-2 p-2 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-yellow-800 font-medium">
                      {t('herbalist.warnings')}:
                    </p>
                    <ul className="list-disc list-inside text-yellow-700">
                      {remedy.warnings.map((warning, idx) => (
                        <li key={idx}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}