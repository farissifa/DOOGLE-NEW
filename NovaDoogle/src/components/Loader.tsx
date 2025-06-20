import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
      <span className="ml-2">AI is thinking...</span>
    </div>
  );
};

export default Loader;