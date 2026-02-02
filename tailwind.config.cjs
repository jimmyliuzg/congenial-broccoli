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
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
        display: ['Momo Trust Display', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode colors
        light: {
          bg: '#F9F6F0',      // Off-white/Bone
          text: '#1A1A1A',    // Near black for readability
          card: '#FFFFFF',    // Pure white for cards
        },
        // Dark mode colors  
        dark: {
          bg: '#1A1A1A',      // Deep charcoal
          text: '#F9F6F0',    // Off-white for text
          card: '#2A2A2A',    // Slightly lighter for cards
        },
        // Accent colors - Navy Blue for light mode
        accent: {
          DEFAULT: '#2C5F7F', // Slate Blue (light mode) - more legible
          dark: '#FF6B6B',    // Coral (dark mode contrast)
        },
        // Secondary accent - Darker Slate for better visibility
        secondary: {
          DEFAULT: '#556B7C', // Darker Slate (light mode) - more visible for borders
          dark: '#87CEEB',    // Sky Blue (dark mode contrast)
        },
        // Link color (kept for compatibility)
        link: {
          DEFAULT: '#2C5F7F', // Slate Blue for light mode  
          dark: '#FF6B6B',    // Coral for dark mode
        },
        // Racefinder Maximalist Palette (kept for other projects)
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
