/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
  });
});

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e74c3c',
        dark: '#222831',
        light: '#fbfcfc',
      },
      zIndex: {
        100: '100',
        200: '200',
        300: '300',
        500: '500',
        1000: '1000',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '400px',
        sm: '640px',
        md: '769px',
        lg: '840px',
        xl: '1025px',
      },
    },
  },
  plugins: [backfaceVisibility, require('tailwindcss-animate')],
};
