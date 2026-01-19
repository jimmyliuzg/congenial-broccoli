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
        // Link color (blue for light mode, white for dark mode)
        link: {
          DEFAULT: '#0066CC', // Blue for light mode
          dark: '#FFFFFF',    // White for dark mode
        },
      },
    },
  },
  plugins: [],
};
