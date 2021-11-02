const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './index.html',
    './src/**/*.{ts, tsx, js, jsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        trueGray: colors.trueGray,
        blue: colors.blue,
        blueGray: colors.blueGray
      },
      fontFamily: {
        'sans': ['Lexend Deca']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
