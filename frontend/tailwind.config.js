/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#121212',
        primary: '#8b5cf6', // Violet
        secondary: '#06b6d4', // Cyan
        accent: '#f43f5e', // Rose
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
}
