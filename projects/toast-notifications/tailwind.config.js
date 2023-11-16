/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/toast-notifications/**/*.{html,ts,css,scss}',
    // './**/*.{html,ts,css,scss}'
  ],
  corePlugins: {
    preflight: false,
  }
}
