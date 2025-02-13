'use client';

import TypeWriter from './TypeWriter';

export default function HeaderSection() {
  return (
    <header className="container mx-auto px-4 py-16">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Angelo Cortez
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400 mt-2">
          <TypeWriter
            text="Developer and Real Estate Investor"
            delay={75}
          />
        </h2>
      </div>
    </div>
  </header>
  );
} 