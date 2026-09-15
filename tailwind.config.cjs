/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'Courier Prime', 'monospace'],
        sans: ['"Space Grotesk"', 'GT America Standard', 'Helvetica Neue', 'Helvetica', 'Yu Gothic', 'YuGothic', 'Hiragino Sans', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'GT America Standard', 'Helvetica Neue', 'Helvetica', 'Yu Gothic', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode — Utrecht paper white + signal red
        light: {
          bg: '#FFFFFF',      // Paper
          text: '#111111',    // Near-black ink
          card: '#FFFFFF',    // Flat paper cards
          muted: '#6E6E6E',   // Utrecht hover-grey analogue
        },
        // Dark mode — inverted paper, vermillion stays signal
        dark: {
          bg: '#111111',      // Deep ink
          text: '#F5F2EB',    // Warm paper text
          card: '#161616',    // Flat raised paper
          muted: '#A8A8A8',
        },
        // Signal red — Utrecht vermillion #DB0000
        accent: {
          DEFAULT: '#DB0000', // Signal red (light mode rules/links/labels)
          dark: '#FF4D42',    // Brightened vermillion for dark-mode contrast
        },
        // Utrecht hover grey
        secondary: {
          DEFAULT: '#999999',
          dark: '#8A8A8A',
        },
        // Link color mirrors signal red
        link: {
          DEFAULT: '#DB0000',
          dark: '#FF4D42',
        },

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
