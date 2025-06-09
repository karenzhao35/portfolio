/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        'main-pink': '#FF69B4',
        'accent-pink': '#FF1493',
        'light': '#FFFFFF',
        'dark': "#313038",
      },
    },
  },
  plugins: [],
} 