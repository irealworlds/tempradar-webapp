/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1fbea',
          '100': '#def5d2',
          '200': '#c1ebab',
          '300': '#99dc7a',
          '400': '#76cb50',
          '500': '#52a72f',
          '600': '#408c24',
          '700': '#346b20',
          '800': '#2b561e',
          '900': '#28491e',
          '950': '#11280b',
        },
      }
    },
  },
  plugins: [],
}
