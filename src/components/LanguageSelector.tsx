import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { Language } from '../types';

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'no', name: 'Norsk' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'ru', name: 'Русский' },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Languages className="w-5 h-5 text-gray-600" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}