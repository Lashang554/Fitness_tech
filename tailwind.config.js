/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'active-lime': '#CCFF00', // You can save your brand color here!
      },
    },
  },
  plugins: [],
}