/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d283e',
        secondary: '#564f6f',
        accent: '#802bb1',
        grayText: '#d1d7e0'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}