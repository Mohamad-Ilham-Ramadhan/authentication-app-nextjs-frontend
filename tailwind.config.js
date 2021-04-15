const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#2D9CDB',
        DEFAULT: '#2F80ED',
      },
      gray: {
        light: '#BDBDBD',
        DEFAULT: '#828282'
      }, 
      red: {
        DEFAULT: '#EB5757'
      },
      white: colors.white,
      green: colors.green,
    },
    inset: {
      '1/2': '50%'
    },
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
} 
