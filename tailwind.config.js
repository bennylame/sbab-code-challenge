/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      display: ['SBAB', 'sans-serif'],
    },
    extend: {
      gap: {
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
      },
    },
    plugins: [],
  },
};
