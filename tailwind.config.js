/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#0f172a', // slate-900
        accent: '#38bdf8', // sky-400
        secondary: '#6366f1', // indigo-500
      }
    }
  },
  plugins: [],
}
