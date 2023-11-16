/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#ffefeb",
          "100": "#ffded7",
          "200": "#ffbeb0",
          "300": "#ff9d88",
          "400": "#ff7d61",
          "500": "#ff5c39",
          "600": "#cc4a2e",
          "700": "#993722",
          "800": "#662517",
          "900": "#33120b"
        },
        accent: {
          "50": "#e6f1fb",
          "100": "#cce2f8",
          "200": "#99c6f1",
          "300": "#66a9e9",
          "400": "#338de2",
          "500": "#0070db",
          "600": "#005aaf",
          "700": "#004383",
          "800": "#002d58",
          "900": "#00162c"
        }
      }
    },
  },
  plugins: [],
}
