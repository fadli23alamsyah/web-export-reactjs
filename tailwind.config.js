/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        card: '0.375rem',
      },
      dropShadow: {
        card: '0.6rem 0.6rem 0 #222',
      },
      colors: {
        first: '#0CB431',
        second: '#B4850F'
      }
    },
  },
  plugins: [],
}
