/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode with class strategy
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',      // 12px
        sm: '0.875rem',     // 14px
        base: '1rem',       // 16px
        lg: '1.125rem',     // 18px
        xl: '1.25rem',      // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        tight: '1.25',
        snug: '1.375',
        relaxed: '1.625',
      },
      letterSpacing: {
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
      },
      colors: {
        brand: {
          light: '#1E40AF', // Example brand color for light mode
          dark: '#60A5FA',  // Example brand color for dark mode
        },
      },
    },
  },
  plugins: [],
};
