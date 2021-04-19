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
        ...colors.gray,
        lightest: '#F2F2F2',
        light: '#BDBDBD',
        DEFAULT: '#828282',
        '2': '#4F4F4F'
      }, 
      red: {
        DEFAULT: '#EB5757'
      },
      white: colors.white,
      green: colors.green,
    },
    extend: {
      inset: {
      '1/2': '50%'
      },
      zIndex: {
        '1000': '1000', // for backdrop
        '1010': '1010', // for popover
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
} 
