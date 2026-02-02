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
        // Light mode colors (white background, black text)
        light: {
          bg: '#FFFFFF',
          text: '#000000',
        },
        // Dark mode colors (black background, white text)
        dark: {
          bg: '#000000',
          text: '#FFFFFF',
        },
        // Accent color - electric blue (works in both modes)
        accent: {
          DEFAULT: '#0066FF', // For light mode
          dark: '#3D8EFF',    // Brighter for dark mode
        },
        // Link color (kept for compatibility)
        link: {
          DEFAULT: '#0066FF', // Blue for light mode  
          dark: '#3D8EFF',    // Brighter blue for dark mode
        },
        // Racefinder Maximalist Palette (Updated)
        racefinder: {
          cyan: '#13F0FF',
          yellow: '#F0FF13',
          magenta: '#FF13F0',
          white: '#FFFFFF',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
};
