/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customColor': 'rgb(241, 241, 243)',
        "customGray": '#F7F7F8',
        "customWhite": '#FCFCFD',
        "customOrange": '#FF9500',
      },
    },
  },
  plugins: [],
}