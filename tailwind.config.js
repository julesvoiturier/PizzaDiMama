/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main_orange': '#ff6145',
      'white': '#ffffff',
      'black': '#000000',
      'yellow': '#00521f',
      'yellow2': '#ffe43b'
    },
    fontFamily: {
      'Pencerio': ['Pencerio'],
      'Switzer': ['Switzer']
    },
    extend: {},
  },
  plugins: [],
}
