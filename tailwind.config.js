/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'party-red': {
          DEFAULT: '#DC2626', // Red-600
          dark: '#991B1B',    // Red-800
          light: '#EF4444',   // Red-500
        },
        'ministry-black': '#111827', // Gray-900
        'paper-white': '#F3F4F6',    // Gray-100
        'dystopia-gray': '#374151',  // Gray-700
      },
      fontFamily: {
        'propaganda': ['"Oswald"', 'sans-serif'],
        'terminal': ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}