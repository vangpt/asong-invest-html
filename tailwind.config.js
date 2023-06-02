/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,pug}'],
  theme: {
    extend: {
      colors: {
        primary: '#f94c3b',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
