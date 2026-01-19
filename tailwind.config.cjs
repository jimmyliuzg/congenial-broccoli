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
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        // LOGIC-style light mode colors
        logic: {
          bg: '#FFFFFF',
          text: '#000000',
          link: '#0066CC', // Blue for links
        },
        // Brutalist dark mode (monochrome black/white)
        brutal: {
          bg: '#FFFFFF',
          text: '#000000',
          'dark-bg': '#000000',
          'dark-text': '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
