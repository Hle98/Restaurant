/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        tomato: '#E50914',
        marigold: '#ffbe0b'
      }
    },
  },
  plugins: [],
}

