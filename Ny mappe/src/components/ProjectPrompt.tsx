import React, { useState } from 'react';
import { ProjectType } from '../types';

type ProjectPromptProps = {
  type: ProjectType;
  onSubmit: (prompt: string) => void;
};

export function ProjectPrompt({ type, onSubmit }: ProjectPromptProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="space-y-2">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
          Describe your {type} project
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={`Example: I need a ${type} that...`}
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Generate {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    </form>
  );
}