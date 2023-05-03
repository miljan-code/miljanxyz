/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
