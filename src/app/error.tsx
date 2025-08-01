'use client';

import React from 'react';

const ErrorBoundary: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Something went wrong.</h1>
    </div>
  );
};

export default ErrorBoundary;