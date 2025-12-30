/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.js"],
  theme: {
    extend: {
      borderColor: {
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
}
