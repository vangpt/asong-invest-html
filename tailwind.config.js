/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,pug}'],
  theme: {
    extend: {
      colors: {
        primary: '#f94c3b',
        blue: {
          100: '#003366',
        },
        pink: {
          100: '#f3525a',
        },
      },
      container: {
        screens: {
          '2xl': '1312px',
        },
      },
    },
    container: {
      center: true,
      padding: '16px',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
