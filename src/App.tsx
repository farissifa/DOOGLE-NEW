import React, { useState } from 'react';
import { Tool, ProjectType } from './types';
import { tools } from './data/tools';
import { ToolCard } from './components/ToolCard';
import { ProjectPrompt } from './components/ProjectPrompt';
import { Globe } from 'lucide-react';

function App() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const handleToolSelect = (tool: Tool) => {
    setSelectedTool(tool);
  };

  const handlePromptSubmit = (prompt: string) => {
    console.log('Processing prompt:', prompt);
    // TODO: Implement AI processing logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Globe className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Platform</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!selectedTool ? (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Choose a Tool</h2>
              <p className="mt-4 text-lg text-gray-600">
                Select a tool to start creating with AI assistance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onClick={() => handleToolSelect(tool)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <button
              onClick={() => setSelectedTool(null)}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <span className="mr-2">←</span> Back to Tools
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">{selectedTool.name}</h2>
              <p className="mt-4 text-lg text-gray-600">{selectedTool.description}</p>
            </div>
            <ProjectPrompt
              type={selectedTool.id.split('-')[0] as ProjectType}
              onSubmit={handlePromptSubmit}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;