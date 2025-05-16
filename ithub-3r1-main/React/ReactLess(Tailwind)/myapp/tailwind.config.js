/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        header: "var(--color-header)",
      }
    },
  },
  plugins: [],
}

