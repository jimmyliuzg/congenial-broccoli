/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier Prime', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brutal: {
          bg: '#FFFFFF',
          text: '#000000',
          'dark-bg': '#0A0A0A',
          'dark-text': '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
