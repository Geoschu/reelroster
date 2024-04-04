/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./view/layout/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '932x',
      'lg': {'max': '932px'},
    },
    extend: {},
  },
  plugins: [],
}

