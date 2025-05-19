// .storybook/preview.tsx

import React, { useEffect } from 'react';
import '../src/index.css'; // Import Tailwind styles
import type { Preview } from '@storybook/react';

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: any) => {
    useEffect(() => {
      const html = document.documentElement;
      if (!html.classList.contains('dark')) {
        html.classList.add('dark');
      }
    }, []);

    return (
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-6">
        <Story />
      </div>
    );
  },
];
