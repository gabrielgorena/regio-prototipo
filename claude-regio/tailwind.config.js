/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb-red': '#FF5A5F',
        'airbnb-dark-red': '#D93B3F',
        'airbnb-light-gray': '#F7F7F7',
        'airbnb-dark-gray': '#484848',
      },
    },
  },
  plugins: [],
}
