import React from 'react';
import { Tool } from '../types';
import * as Icons from 'lucide-react';

type ToolCardProps = {
  tool: Tool;
  onClick: () => void;
};

export function ToolCard({ tool, onClick }: ToolCardProps) {
  const Icon = Icons[tool.icon as keyof typeof Icons];

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 space-y-4 w-full"
    >
      <div className="p-3 bg-indigo-100 rounded-full">
        <Icon className="w-8 h-8 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{tool.name}</h3>
      <p className="text-gray-600 text-center">{tool.description}</p>
    </button>
  );
}