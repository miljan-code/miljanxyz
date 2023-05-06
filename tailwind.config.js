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
      keyframes: {
        'bounce-rotate': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-60px) rotate(30deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
      },
      animation: {
        'bounce-rotate-fast': 'bounce-rotate 9s linear infinite',
        'bounce-rotate-medium': 'bounce-rotate 11s linear infinite',
        'bounce-rotate-slow': 'bounce-rotate 13s linear infinite',
      },
    },
  },
  plugins: [backfaceVisibility],
};
