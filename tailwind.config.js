/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,pug}'],
  theme: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
