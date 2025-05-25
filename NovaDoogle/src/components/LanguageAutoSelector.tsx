import React, { useEffect, useState } from 'react';

const LanguageAutoSelector = () => {
  const [language, setLanguage] = useState(navigator.language || 'en');

  useEffect(() => {
    console.log('Detected language:', language);
  }, [language]);

  return (
    <div className="p-4 border rounded-xl shadow mb-6 bg-white">
      <h2 className="text-lg font-bold mb-2">🌐 Language Selector</h2>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border px-2 py-1"
      >
        <option value="en">English</option>
        <option value="no">Norwegian</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ar">Arabic</option>
      </select>
      <p className="mt-2">Selected: {language}</p>
    </div>
  );
};

export default LanguageAutoSelector;