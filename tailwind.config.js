/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fill-7": "repeat(auto-fill, minmax(7rem, 1fr))",
      },
    },
  },
  plugins: [],
};
